"use client";
import { useState } from "react";
import Header from "./components/Header/Header";
import LoadCountries from "./components/Home/Countries/LoadCountries";
import Filter from "./components/Home/Filter/Filter";
import Search from "./components/Home/Search";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [filterOption, setFilterOption] = useState<string | null>(null);

  const inputHandler = (e: any) => {
    let lowerCase = e.target.value.toLowerCase();
    // console.log(lowerCase);
    setSearchInput(lowerCase);
  };

  const optionHandler = (value: string | null) => {
    setFilterOption(value);
  };

  return (
    <div className="bg-[hsl(0,0%,98%)] min-h-screen dark:text-[hsl(0,0%,100%)] dark:bg-[hsl(207,26%,17%)]">
      <Header />
      <div className="text-sm md:grid md:place-items-center lg:grid lg:place-items-center 2xl:grid 2xl:place-items-center">
        <div className="w-full md:flex md:w-4/5 md:justify-between md:items-center lg:flex lg:w-5/6 lg:justify-between lg:items-center 2xl:flex 2xl:w-3/4 2xl:justify-between 2xl:items-center transition-all ease-in-out">
          <Search searchInput={searchInput} inputHandler={inputHandler} />
          <Filter optionHandler={optionHandler} />
        </div>
        <LoadCountries searchInput={searchInput} option={filterOption} />
      </div>
    </div>
  );
}
