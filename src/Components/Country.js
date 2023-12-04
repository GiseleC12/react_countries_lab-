import React from "react";

const Country = ({ country, markAsVisited }) => {
    const handleMarkAsVisited = () => {
        markAsVisited(country);
    };

    return (
        <li>
            {country.name} - <button onClick={handleMarkAsVisited}>Mark as Visited</button>
        </li>
    );
};

export default Country;