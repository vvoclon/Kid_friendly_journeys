// Dashboard.js
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [userData, setUserData] = useState({
        name: '',
        surname: '',
        email: '',
        dob: '',
        age: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        const name = localStorage.getItem('name');
        const surname = localStorage.getItem('surname');
        const email = localStorage.getItem('email');
        const dob = localStorage.getItem('dob');

        if (!token) {
            setError('User is not authenticated');
            return;
        }

        if (!name || !surname || !email || !dob) {
            setError('User data not found');
            return;
        }

        // Calculate age based on date of birth
        const age = calculateAge(dob);

        setUserData({ name, surname, email, dob, age });
    }, []);

    // Function to calculate age based on date of birth
    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    return (
        <div>
            <h1>User Profile</h1>
            <p>Date: {new Date().toLocaleDateString()}</p>
            {error ? (
                <p>{error}</p>
            ) : (
                <>
                    <p>Name: {userData.name}</p>
                    <p>Surname: {userData.surname}</p>
                    <p>Email Address: {userData.email}</p>
                    <p>Date of Birth: {userData.dob}</p>
                    <p>Age: {userData.age}</p>
                </>
            )}
        </div>
    );
};

export default Dashboard;






// import React, { useEffect, useState } from 'react';

// const Dashboard = () => {
//     const [userData, setUserData] = useState({
//         name: '',
//         surname: '',
//         email: '',
//         dob: ''
//     });
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         const name = localStorage.getItem('name');
//         const surname = localStorage.getItem('surname');
//         const email = localStorage.getItem('email');
//         const dob = localStorage.getItem('dob');
//         const username = localStorage.getItem('username');

//         if (!token || !username) {
//             setError('User is not authenticated');
//             return;
//         }

//         // Calculate age based on date of birth
//         const age = calculateAge(dob);

//         setUserData({ name, surname, email, dob, age });
//     }, []);

//     // Function to calculate age based on date of birth
//     const calculateAge = (dob) => {
//         const today = new Date();
//         const birthDate = new Date(dob);
//         let age = today.getFullYear() - birthDate.getFullYear();
//         const month = today.getMonth() - birthDate.getMonth();
//         if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
//             age--;
//         }
//         return age;
//     };

//     return (
//         <div>
//             <h1>User Profile</h1>
//             <p>Date: {new Date().toLocaleDateString()}</p>
//             {error ? (
//                 <p>{error}</p>
//             ) : (
//                 <>
//                     <p>Name: {userData.name}</p>
//                     <p>Surname: {userData.surname}</p>
//                     <p>Email Address: {userData.email}</p>
//                     <p>Date of Birth: {userData.dob}</p>
//                     <p>Age: {userData.age}</p>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Dashboard;
