import React from "react";

const VisitedCountriesList = ({ visitedCountries }) => {
    return (
        <>
            <h2>Visited Countries</h2>
            <ul>
                {visitedCountries.map((country) => (
                    <li key={country.alpha3Code}>{country.name}</li>
                ))}
            </ul>
        </>
    );
};

export default VisitedCountriesList;