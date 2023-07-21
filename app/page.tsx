import Countries from "./components/Countries";
import Filter from "./components/Filter";
import Search from "./components/Search";

export default function Home() {
  return (
    <div className="bg-[hsl(0,0%,98%)]">
      <Search />
      <Filter />
      <Countries />
    </div>
  );
}
