import { CountryType } from "@/types";
import Link from "next/link";

type Props = {
  data: CountryType;
};

const Country = ({ data }: Props) => {
  const { name, capital, population, region, flags } = data;
  const sepPopulation = population.toLocaleString();

  // console.log(data.name);

  return (
    <div className="bg-white shadow-md rounded mx-14 w-fit pb-5 dark:dark:bg-[hsl(209,23%,22%)]">
      <Link href={name.common}>
        <div className="h-44 w-72">
          <img src={flags[1]} className="rounded-t w-full h-full object-fill" />
        </div>
      </Link>
      <div className="px-6">
        <Link href={name.common}>
          <p className="font-extrabold text-lg my-4">{name.common}</p>
        </Link>
        <div className="mb-8">
          <div className="flex gap-1">
            <p className="font-bold">Population: </p>
            <p>{sepPopulation}</p>
          </div>
          <div className="flex gap-1">
            <p className="font-bold">Region: </p>
            <p>{region}</p>
          </div>
          <div className="flex gap-1">
            <p className="font-bold">Capital: </p>
            <p>{capital}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
