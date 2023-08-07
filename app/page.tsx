"use client";
import { useState } from "react";
import Filter from "./components/Filter";
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
    <div className="bg-[hsl(0,0%,98%)] h-screen ">
      <Search searchInput={searchInput} inputHandler={inputHandler} />
      <Filter optionHandler={optionHandler} />
      <LoadCountries searchInput={searchInput} option={filterOption} />
    </div>
  );
}
