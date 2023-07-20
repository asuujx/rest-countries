import { Country } from "@/types";

type Props = {
  data: Country;
};

const Country = ({ data }: Props) => {
  const { name, capital, population, region, flags } = data;
  const sepPopulation = population.toLocaleString();

  return (
    <div className="bg-white shadow-md rounded mx-14 w-fit pb-5">
      <img src={flags[1]} className="rounded-t max-h-52" />
      <div className="px-3">
        <p className="font-bold text-lg my-4">{name.common}</p>
        <div className="mb-5">
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
    </div>
  );
};

export default Country;
