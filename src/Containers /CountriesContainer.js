import { useState, useEffect } from "react";
import CountriesList from "../Components/CountriesList";
import VisitedCountriesList from "../Components/VisitedCountriesList";

const CountriesContainer = ()  => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    
    const loadCountriesData = async () => {
        const response = await fetch("https://restcountries.com/v2/all");
        const data = await response.json();
        setCountries(data);
    };

    useEffect( ()=> {
        loadCountriesData();
    }, []);


    const markAsVisited = (country) => {
        setVisitedCountries((preVisitedCountries) => [...preVisitedCountries, country]);
    };

    return(
        <>
        <h1>Countries</h1>
        <CountriesList countries={countries} markAsVisited={markAsVisited} />  
        <VisitedCountriesList visitedCountries={visitedCountries} />
        </>
    );
};

export default CountriesContainer;