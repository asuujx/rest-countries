import { CountryDetails } from "@/types";
import Link from "next/link";

type Props = {
  code: string;
};

const fetchNeighbour = async (code: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = (await response.json()) as CountryDetails[];

  return data[0];
};

const CountryNeighbour = async ({ code }: Props) => {
  const neighbourData = (await fetchNeighbour(code)) as CountryDetails;
  // console.log(neighbourData);

  return (
    <div className="bg-white shadow-md py-1 rounded flex place-items-center justify-center text-center lg:px-4 2xl:px-6 transition-all ease-in-out dark:bg-[hsl(209,23%,22%)]">
      <Link href={neighbourData.name.common}>{neighbourData.name.common}</Link>
    </div>
  );
};

export default CountryNeighbour;
