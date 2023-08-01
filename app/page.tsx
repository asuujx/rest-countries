"use client"
import { useState } from "react";
import Filter from "./components/Filter";
import Search from "./components/Header/Search/Search";
import LoadCountries from "./components/LoadCountries";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");

  const inputHandler = (e: any) => {
    let lowerCase = e.target.value.toLowerCase();
    // console.log(lowerCase);
    setSearchInput(lowerCase);
  };

  return (
    <div className="bg-[hsl(0,0%,98%)]">
      <Search searchInput={searchInput} inputHandler={inputHandler}/>
      <Filter />
      <LoadCountries searchInput={searchInput} />
    </div>
  );
}
