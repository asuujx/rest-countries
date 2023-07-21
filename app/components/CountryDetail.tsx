import { CountryType } from "@/types";

interface Props {
  data: CountryType;
}

const CountryDetail = async ({ data }: Props) => {
  const { name, capital, population, region, languages, flags, subregion, tld } = data;
  const sepPopulation = population.toLocaleString();

  return (
    <div className="">
      <img src={flags[0]} className="rounded-t max-h-52" />
      <p className="text-xl font-extrabold mb-4">{name.common}</p>
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex gap-1">
          <p className="font-semibold">Native Name: </p>
          <p>PLACEHOLDER</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Population: </p>
          <p>{sepPopulation}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Region: </p>
          <p>{region}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Sub Region:</p>
          <p>{subregion}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Capital: </p>
          <p>{capital}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          <p className="font-semibold">Top Level Domain:</p>
          <p>{tld}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Currencies:</p>
          {/* <p>{currencies.values.join(", ")}</p> */}
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Languages: </p>
          <p>{Object.values(languages).join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
