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
    <div className="bg-white shadow-md rounded mx-14 w-fit pb-5">
      <Link href={name.common}>
        <img src={flags[1]} className="rounded-t max-h-52" />
        <div className="px-6">
          <p className="font-extrabold text-lg my-4">{name.common}</p>
          <div className="mb-8">
            <div className="flex gap-1">
              <p className="font-semibold">Population: </p>
              <p>{sepPopulation}</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">Region: </p>
              <p>{region}</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">Capital: </p>
              <p>{capital}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Country;
