"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3/all");
        setCountries(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching countries", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="grid gap-10 place-items-center">
      {countries.map((country) => (
        <Country key={country.name.common} data={country} />
      ))}
    </div>
  );
};

export default Countries;
