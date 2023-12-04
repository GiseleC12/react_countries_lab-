import { useState, useEffect } from "react";
import VisitedCountryList from "../Components/VisitedCountryList";

const VisitedCountriesContainer = () => {
    const [visitedCountries, setVisitedCountries] = useState(null);

    //Logic for loading visited countries data 

    return (
        <>
            <h1>Visited Countries</h1>
            <VisitedCountryList visitedCountries={visitedCountries} />
        </>
    );
}

export default VisitedCountriesContainer;
