import React from "react";
import Country from "./Country";

const CountriesList = ({ countries, markAsVisited }) => {
    return (
        <>
            <h2>List of Countries</h2>
            <ul>
                {countries.map((country) => (
                    <Country key={country.alpha3Code} country={country} markAsVisited={markAsVisited} />
                ))}
            </ul>
        </>
    );
};

export default CountriesList;