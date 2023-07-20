import Countries from "./components/Countries";
import Search from "./components/Search";

export default function Home() {
  return (
    <div className="bg-[hsl(0,0%,98%)]">
      <Search />
      <div className="bg-white shadow-md w-fit py-4 pl-4 pr-14 rounded ml-5 mb-5">
        <p>Filter by Region</p>
      </div>
      <Countries />
    </div>
  );
}
