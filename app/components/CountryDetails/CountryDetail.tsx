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
    <div className="mt-16 lg:mt-0 lg:flex lg:gap-24 2xl:mt-0 2xl:flex 2xl:gap-24 transition-all ease-in-out">
      {/* <img
        src={flags.png}
        className="rounded-t w-screen mb-10 aspect-[5/3] 2xl:w-fit"
      /> */}
      <div>
        <p className="text-2xl font-extrabold mb-5 lg:text-4xl 2xl:text-4xl transition-all ease-in-out">
          {name.common}
        </p>
        <div className="whitespace-nowrap lg:flex lg:gap-14 2xl:flex 2xl:gap-28">
          <div className="flex flex-col gap-2 mb-10">
            <div className="flex gap-1">
              <p className="font-bold">Native Name: </p>
              <p>{nativeNameCommon}</p>
            </div>
            <div className="flex gap-1">
              <p className="font-bold">Population: </p>
              <p>{sepPopulation}</p>
            </div>
            <div className="flex gap-1">
              <p className="font-bold">Region: </p>
              <p>{region}</p>
            </div>
            <div className="flex gap-1">
              <p className="font-bold">Sub Region:</p>
              <p>{subregion}</p>
            </div>
            <div className="flex gap-1">
              <p className="font-bold">Capital: </p>
              <p>{capital}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-10">
            <div className="flex gap-1">
              <p className="font-bold">Top Level Domain:</p>
              <p>{tld}</p>
            </div>
            <div className="flex gap-1">
              <p className="font-bold">Currencies:</p>
              <p>{currency[0].name}</p>
            </div>
            <div className="flex gap-1">
              <p className="font-bold">Languages: </p>
              <p>{Object.values(languages).join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
