import { useState, useEffect } from "react";
import CountryButton from "../Components/CountryButton";
import CountryList from "../Components/CountryList";

const CountriesContainer = ()  => {
    const [countries, setCountries] = useState(null);
    const [visitedCountries, setVisitedCountries] = useState(null);

    const loadCountriesData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
        
    }

    useEffect( ()=> {
        loadCountriesData();
    }, []);

    return(
        <>
        <h1>Countries</h1>
        <CountryButton onButtonClick={loadCountriesData} />
        <CountryList countries={countries} />
        </>
    )
}

export default CountriesContainer;