import { CountryType } from "@/types";

type Props = {
  code: string;
};

const fetchNeighbour = async (code: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = (await response.json()) as CountryType[];

  return data[0];
};

const CountryNeighbour = async ({ code }: Props) => {
  const neighbourData = (await fetchNeighbour(code)) as CountryType;
//   console.log(neighbourData);

  return <div className="bg-white shadow-md rounded text-center py-1">{neighbourData.name.common}</div>;
};

export default CountryNeighbour;
