import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/LogIn'; 
import Logout from './components/LogOut'; 
import Dashboard from './components/Dashboard';
import ProtectedRoute from './auth/ProtectedRoute';
import Activities from './components/activities';
import AddActivity from './components/AddActivity';
import activitiesData from './components/data';
import ActivityDetail from './components/ActivityDetail'; // Import the new component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'; // Ensure CSS is imported

function App() {
  const [lengthFilter, setLengthFilter] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);
  const [activities, setActivities] = useState(activitiesData);
  const [filtersDropdownOpen, setFiltersDropdownOpen] = useState(false); // State to control filters dropdown visibility
  const [userDropdownOpen, setUserDropdownOpen] = useState(false); // State to control user dropdown visibility
  const [searchTerm, setSearchTerm] = useState('');

  const isLoggedIn = () => {
    return !!localStorage.getItem('token');
  };

  const applyFilters = (activity) => {
    const lengthMatch = lengthFilter.length === 0 || lengthFilter.includes(activity.length);
    const difficultyMatch = difficultyFilter.length === 0 || difficultyFilter.includes(activity.difficulty);
    const ratingMatch = ratingFilter.length === 0 || ratingFilter.includes(activity.rating);
    const searchMatch = activity.name.toLowerCase().includes(searchTerm.toLowerCase());
    return lengthMatch && difficultyMatch && ratingMatch && searchMatch;
  };

  const handleCheckboxChange = (event, filterType) => {
    const { value, checked } = event.target;
    if (checked) {
      switch (filterType) {
        case 'length':
          setLengthFilter([...lengthFilter, value]);
          break;
        case 'difficulty':
          setDifficultyFilter([...difficultyFilter, value]);
          break;
        case 'rating':
          setRatingFilter([...ratingFilter, parseInt(value)]);
          break;
        default:
          break;
      }
    } else {
      switch (filterType) {
        case 'length':
          setLengthFilter(lengthFilter.filter(item => item !== value));
          break;
        case 'difficulty':
          setDifficultyFilter(difficultyFilter.filter(item => item !== value));
          break;
        case 'rating':
          setRatingFilter(ratingFilter.filter(item => item !== parseInt(value)));
          break;
        default:
          break;
      }
    }
  };

  const difficultyOptions = [
    { value: 'Easy', label: 'Easy' },
    { value: 'Moderate', label: 'Moderate' },
    { value: 'Difficult', label: 'Difficult' },
  ];

  const handleRatingChange = (id, newRating) => {
    const updatedActivities = activities.map(activity => {
      if (activity.id === id) {
        return { ...activity, rating: newRating };
      }
      return activity;
    });
    setActivities(updatedActivities);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-left">
            <div className="dropdown" onClick={() => setFiltersDropdownOpen(!filtersDropdownOpen)}>
              <button 
                className="btn btn-secondary dropdown-toggle" 
                type="button" 
                id="filterDropdown" 
                aria-expanded={filtersDropdownOpen}
              >
                Filters
              </button>
              <ul className={`dropdown-menu${filtersDropdownOpen ? ' show' : ''}`} aria-labelledby="filterDropdown">
                {/* Length options */}
                <li>
                  <span className="dropdown-item-text"><p><strong>Length</strong></p></span>
                  <div className="form-check" onClick={(e) => e.stopPropagation()}>
                    <input className="form-check-input" type="checkbox" value="Short" id="lengthShort" onChange={(e) => handleCheckboxChange(e, 'length')} />
                    <label className="form-check-label" htmlFor="lengthShort">
                      Short
                    </label>
                  </div>
                  <div className="form-check" onClick={(e) => e.stopPropagation()}>
                    <input className="form-check-input" type="checkbox" value="Medium" id="lengthMedium" onChange={(e) => handleCheckboxChange(e, 'length')} />
                    <label className="form-check-label" htmlFor="lengthMedium">
                      Medium
                    </label>
                  </div>
                  <div className="form-check" onClick={(e) => e.stopPropagation()}>
                    <input className="form-check-input" type="checkbox" value="Long" id="lengthLong" onChange={(e) => handleCheckboxChange(e, 'length')} />
                    <label className="form-check-label" htmlFor="lengthLong">
                      Long
                    </label>
                  </div>
                </li>
                {/* Difficulty options */}
                <li>
                  <span className="dropdown-item-text"><p><strong>Difficulty</strong></p></span>
                  {difficultyOptions.map((option) => (
                    <div className="form-check" key={option.value} onClick={(e) => e.stopPropagation()}>
                      <input className="form-check-input" type="checkbox" value={option.value} id={`difficulty${option.value}`} onChange={(e) => handleCheckboxChange(e, 'difficulty')} />
                      <label className="form-check-label" htmlFor={`difficulty${option.value}`}>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </li>
                {/* Rating options */}
                <li>
                  <span className="dropdown-item-text"><p><strong>Rating</strong></p></span>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <div className="form-check" key={rating} onClick={(e) => e.stopPropagation()}>
                      <input className="form-check-input" type="checkbox" value={rating} id={`rating${rating}`} onChange={(e) => handleCheckboxChange(e, 'rating')} />
                      <label className="form-check-label" htmlFor={`rating${rating}`}>
                        {rating}
                      </label>
                    </div>
                  ))}
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link className="navbar-brand" to="/">KidFriendlyJourneys</Link> {/* Use Link to navigate to the main page */}
          </div>
          <div className="navbar-right">
            <div className="dropdown" onClick={() => setUserDropdownOpen(!userDropdownOpen)}>
              <button 
                className="btn btn-secondary dropdown-toggle" 
                type="button" 
                id="userDropdown" 
                aria-expanded={userDropdownOpen}
              >
                User
              </button>
              <ul className={`dropdown-menu dropdown-menu-end${userDropdownOpen ? ' show' : ''}`} aria-labelledby="userDropdown" onClick={(e) => e.stopPropagation()}>
                <li><Link className="dropdown-item" to="/login">Log in</Link></li>
                <li><Link className="dropdown-item" to="/logout">Log out</Link></li>
                <li><Link className="dropdown-item" to="/signup">Sign up</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Dashboard />} /> {/* Dashboard accessible without login */}
          <Route path="/activity/:id" element={<ActivityDetail />} /> {/* Add this route */}
        </Routes>

        <Activities activities={activities} onRatingChange={handleRatingChange} filter={applyFilters} />

        {/* Search input */}
        <div className="search-container">
          <input 
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search activities by name"
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
