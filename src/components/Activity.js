import React from 'react';
import { useParams } from 'react-router-dom';
import activitiesData from './data';
import ActivityCarousel from './ActivityCarousel';
import './ActivityDetail.css';

const ActivityDetail = () => {
    const { id } = useParams();
    const activity = activitiesData.find((activity) => activity.id === parseInt(id));

    if (!activity) {
        return <div>Activity not found</div>;
    }

    return (
        <div className="activity-detail">
            <div className="activity-header">
                <h2>{activity.name}</h2>
                <p><strong>Length:</strong> {activity.length}</p>
                <p><strong>Difficulty:</strong> {activity.difficulty}</p>
                <p><strong>Rating:</strong> {activity.rating}</p>
                <p><strong>Location:</strong> {activity.location}</p>
                <p>{activity.description}</p>
            </div>
            <ActivityCarousel images={activity.images} />
        </div>
    );
};

export default ActivityDetail;
