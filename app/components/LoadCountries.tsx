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
    <div className="grid gap-10 place-items-center">
      {data && <Countries data={data} searchInput={searchInput} option={option} />}
    </div>
  );
};

export default LoadCountries;
