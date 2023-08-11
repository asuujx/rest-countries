import { CountryType } from "@/types";
import Country from "./Country";

type Props = {
  data: CountryType[];
  option: string | null;
  searchInput: string;
};

const Countries = ({ data, option, searchInput }: Props) => {
  const filteredCountries = data.filter((country) =>
    country.name.common.toLowerCase().startsWith(searchInput)
  );
  
  const filterByContinent = filteredCountries.filter(country => option ? country.region === option : true);

  return (
    <>
      {filterByContinent.map((country) => (
        <Country key={country.name.common} data={country} />
      ))}
    </>
  );
};

export default Countries;