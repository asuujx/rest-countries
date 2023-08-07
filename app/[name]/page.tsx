import { CountryDetails } from "@/types";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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

  const data = (await response.json()) as CountryDetails[];

  return data[0];
};

const CountryPage = async ({ params: { name } }: Props) => {
  const countryData = (await fetchCountry(name)) as CountryDetails;
  const countryName = countryData.name.nativeName;
  const nativeNameCommon = countryName[Object.keys(countryName)[0]];

  // console.log(countryData);
  // console.log(countryName);
  // console.log(nativeNameCommon.common);

  return (
    <div className="bg-[hsl(0,0%,98%)] h-full px-8 py-10">
      <Link href="/">
        <div className="flex gap-3 place-items-center bg-white rounded shadow-md w-fit px-8 py-2">
          <FontAwesomeIcon icon={faArrowLeft} className="w-3" />
          <p>Back</p>
        </div>
      </Link>

      <CountryDetail data={countryData} />
      <p className="mt-10 mb-4 font-bold">Border Countries:</p>
      <div className="grid grid-cols-3 gap-2">
        {countryData.borders ? countryData.borders.map((cca3) => (
          <CountryNeighbour key={cca3} code={cca3} />
        )) : <p className="grid col-span-2">No border countries.</p>}
      </div>
    </div>
  );
};

export default CountryPage;
