import { CountryType } from "@/types";
import Country from "./Country";

const fetchCountries = async () => {
  const response = await fetch("https://restcountries.com/v3/all");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const Countries = async () => {
  const data = (await fetchCountries()) as CountryType[];
  console.log(data);

  return (
    <div className="grid gap-10 place-items-center">
      {data.map((country) => (
        <Country key={country.name.common} data={country} />
      ))}
    </div>
  );
};

export default Countries;
