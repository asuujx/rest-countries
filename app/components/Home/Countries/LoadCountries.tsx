"use client";
import { CountryType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import Countries from "./Countries";

type Props = {
  searchInput: string;
  option: string | null;
}

const fetchCountries = async () => {
  const response = await fetch("https://restcountries.com/v3/all");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return await(response.json()) as CountryType[];
};

const LoadCountries = ({ searchInput, option }: Props) => {
  const { isLoading, isError, error, data } = useQuery(
    ["countries"],
    fetchCountries
  );

  // console.log(data);

  return (
    <div className="grid place-items-center">
      <div className="mb-8 grid gap-10 place-items-center md:grid-cols-2 md:w-4/5 lg:grid-cols-3 lg:w-5/6 2xl:grid-cols-4 2xl:w-3/4 transition-all ease-in-out">
        {data && (
          <Countries data={data} searchInput={searchInput} option={option} />
        )}
      </div>
    </div>
  );
};

export default LoadCountries;
