import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  searchInput: string;
  inputHandler: (e: any) => void;
}

const Search = ({ searchInput, inputHandler }: Props) => {
  

  return (
    <div className="mb-10 pt-8 flex justify-center">
      <div className="mx-6 px-10 py-4 flex gap-8 place-items-center bg-white shadow-md rounded-md w-screen lg:w-auto lg:mx-0 2xl:w-auto 2xl:mx-0 dark:bg-[hsl(209,23%,22%)]">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="w-5 h-5 text-[#ACACAC] dark:text-[hsl(0,0%,100%)]"
        />
        <input
          type="text"
          onChange={inputHandler}
          value={searchInput}
          name="search"
          placeholder="Search for a country..."
          className="bg-transparent placeholder-[#ACACAC] w-full"
        />
      </div>
    </div>
  );
};

export default Search;
