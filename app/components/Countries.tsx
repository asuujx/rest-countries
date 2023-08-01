import { CountryType } from "@/types";
import Country from "./Country";

type Props = {
  data: CountryType[];
  searchInput: string;
};

const Countries = ({ data, searchInput }: Props) => {
  const filteredCountries = data.filter((country) =>
    country.name.common.toLowerCase().startsWith(searchInput)
  );
  
//   const filterByContinent = filteredCountries.filter(country => country.region === value);

  return (
    <>
      {filteredCountries.map((country) => (
        <Country key={country.name.common} data={country} />
      ))}
    </>
  );
};

export default Countries;
