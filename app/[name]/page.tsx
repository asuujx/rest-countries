import { CountryType } from "@/types";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountryDetail from "../components/CountryDetail";
import CountryNeighbour from "../components/CountryNeighbour";

type Props = {
  params: {
    name: string;
  };
};

const fetchCountry = async (name: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = (await response.json()) as CountryType[];

  return data[0];
};

const CountryPage = async ({ params: { name } }: Props) => {
  const countryData = (await fetchCountry(name)) as CountryType;
  
  console.log(countryData);

  return (
    <div className="bg-[hsl(0,0%,98%)] h-screen px-8">
      <div className="flex gap-1 bg-white rounded shadow-md w-fit px-4 py-2">
        <FontAwesomeIcon icon={faArrowLeft} className="w-3" />
        <p>Back</p>
      </div>

      <CountryDetail data={countryData} />
      <p className="mt-10 mb-4 font-semibold">Border Countries:</p>
      <div className="grid grid-cols-3 gap-2">
        {countryData.borders.map((cca3) => (
          <CountryNeighbour key={cca3} code={cca3} />
        ))}
      </div>
    </div>
  );
};

export default CountryPage;
