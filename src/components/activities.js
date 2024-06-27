import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './activities.css';

const Activities = ({ activities, onRatingChange, filter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const activitiesPerPage = 10;

  // Filter and paginate activities
  const filteredActivities = activities.filter(filter);
  const totalPages = Math.ceil(filteredActivities.length / activitiesPerPage);
  const startIdx = (currentPage - 1) * activitiesPerPage;
  const endIdx = startIdx + activitiesPerPage;
  const currentActivities = filteredActivities.slice(startIdx, endIdx);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="activities">
      {currentActivities.map((activity) => (
        <div className="activity" key={activity.id}>
          <h3>{activity.name}</h3>
          <div className="activity-content">
            <div className="activity-description">
              <p><strong>Length:</strong> {activity.length}</p>
              <p><strong>Difficulty:</strong> {activity.difficulty}</p>
              <p><strong>Rating:</strong> {activity.rating}</p>
              <p><strong>Location:</strong> {activity.location}</p>
              <button>
                <Link to={`/activity/${activity.id}`}>View Activity</Link>
              </button>
            </div>
            <div className="activity-image">
              <img src={activity.image} alt={activity.name} />
            </div>
          </div>
        </div>
      ))}
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Activities;
