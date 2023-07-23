import { CountryDetails } from "@/types";

interface Props {
  data: CountryDetails;
}

const CountryDetail = async ({ data }: Props) => {
  const { name, tld, currencies, capital, region, subregion, languages, population, flags } = data;
  const sepPopulation = population.toLocaleString();
  const currency = Object.values(currencies);
  const nativeName = name.nativeName;
  const nativeNameCommon = nativeName[Object.keys(nativeName)[0]].common;
  
  return (
    <div className="mt-14">
      <img src={flags.png} className="rounded-t w-screen mb-10" />
      <p className="text-xl font-extrabold mb-4">{name.common}</p>
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex gap-1">
          <p className="font-semibold">Native Name: </p>
          <p>{nativeNameCommon}</p>
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
          <p>{currency[0].name}</p>
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
