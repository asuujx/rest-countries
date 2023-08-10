"use client";
import { useState } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header/Header";
import LoadCountries from "./components/LoadCountries";
import Search from "./components/Search";

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
      <div className="lg:grid lg:place-items-center 2xl:grid 2xl:place-items-center">
        <div className="w-full lg:flex lg:w-5/6 lg:justify-between lg:items-center 2xl:flex 2xl:w-3/4 2xl:justify-between 2xl:items-center transition-all ease-in-out">
          <Search searchInput={searchInput} inputHandler={inputHandler} />
          <Filter optionHandler={optionHandler} />
        </div>
        <LoadCountries searchInput={searchInput} option={filterOption} />
      </div>
    </div>
  );
}
