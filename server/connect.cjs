const { MongoClient } = require("mongodb");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');

// Load environment variables
require("dotenv").config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const Db = process.env.ATLAS_URI; // Ensure this is correctly defined in config.env
const SECRET_KEY = process.env.SECRET_KEY;

let db;
let users;

const client = new MongoClient(Db, {
    tls: true,
    tlsInsecure: true, // Použite toto pre testovanie
    serverSelectionTimeoutMS: 30000,
    connectTimeoutMS: 30000
});

async function main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        db = client.db("kid_friendly_journeys");
        users = db.collection("Users");

        // Create unique indexes for username and email
        await users.createIndex({ username: 1 }, { unique: true });
        await users.createIndex({ email: 1 }, { unique: true });

        // Signup route
        app.post('/signup', async (req, res) => {
            const { name, surname, email, dob, username, password } = req.body;
            try {
                // Check if the username or email already exists
                const userExists = await users.findOne({ $or: [{ username }, { email }] });
                if (userExists) {
                    return res.status(400).json({ message: "Username or email already exists" });
                }

                // Client-side validation for the password
                if (password.length < 8) {
                    return res.status(400).json({ message: "Password must be at least 8 characters long" });
                }

                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = {
                    name,
                    surname,
                    email,
                    dob,
                    username,
                    password: hashedPassword,
                };

                const result = await users.insertOne(newUser);
                res.status(201).json({ message: "User registered", userId: result.insertedId });
            } catch (error) {
                console.error("Signup error:", error);
                res.status(500).json({ message: "Error registering user: " + error.message });
            }
        });

        // Login route
        app.post('/login', async (req, res) => {
            const { username, password } = req.body;
            try {
                const user = await users.findOne({ username });
                if (user && await bcrypt.compare(password, user.password)) {
                    const token = jwt.sign({ _id: user._id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
                    res.json({
                        token,
                        user: {
                            id: user._id.toString(),
                            username: user.username
                        }
                    });
                } else {
                    res.status(401).json({ message: "Invalid credentials" });
                }
            } catch (error) {
                console.error("Login error:", error);
                res.status(500).json({ message: "Error during login: " + error.message });
            }
        });

        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (e) {
        console.error("Server startup error:", e);
    }
}

main().catch(console.error);

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
