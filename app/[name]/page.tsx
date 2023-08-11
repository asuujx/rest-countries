import { CountryDetails } from "@/types";
import BackButton from "../components/CountryDetails/BackButton";
import CountryDetail from "../components/CountryDetails/CountryDetail";
import CountryNeighbour from "../components/CountryDetails/CountryNeighbour";
import Header from "../components/Header/Header";

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

  // console.log(countryData);

  return (
    <div className="bg-[hsl(0,0%,98%)] min-h-screen dark:bg-[hsl(207,26%,17%)] dark:text-[hsl(0,0%,100%)]">
      <Header />
      <div className="lg:grid lg:place-items-center 2xl:grid 2xl:place-items-center transition-all ease-in-out">
        <div className="px-8 py-10 lg:w-4/5 2xl:w-3/4">
          <BackButton />

          <div className="lg:flex lg:gap-28 2xl:flex 2xl:gap-28">
            <img
              src={countryData.flags.png}
              className="mb-10 aspect-[5/3] w-full max-w-md lg:w-fit lg:h-fit 2xl:w-fit 2xl:h-fit transition-all ease-in-out"
            />
            <div className="">
              <CountryDetail data={countryData} />
              <div className="lg:flex lg:gap-4 2xl:flex 2xl:gap-4">
                <p className="text-xl mb-4 font-bold lg:text-base lg:min-w-fit lg:mt-2 2xl:text-base 2xl:min-w-fit 2xl:mt-2">
                  Border Countries:
                </p>
                <div className="grid grid-cols-3 gap-2 lg:flex lg:flex-wrap 2xl:flex 2xl:flex-wrap">
                  {countryData.borders ? (
                    countryData.borders.map((cca3) => (
                      <CountryNeighbour key={cca3} code={cca3} />
                    ))
                  ) : (
                    <p className="grid col-span-2 lg:mt-2 2xl:mt-2">
                      No border countries.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
