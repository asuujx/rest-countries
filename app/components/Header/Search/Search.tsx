import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  searchInput: string;
  inputHandler: (e: any) => void;
}

const Search = ({ searchInput, inputHandler }: Props) => {
  

  return (
    <div className="mb-8 pt-5 flex justify-center">
      <div className="flex px-10 py-4 bg-white gap-6 shadow-md rounded">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4" />
        <input
          type="text"
          onChange={inputHandler}
          value={searchInput}
          name="search"
          placeholder="Search for a country..."
          className="bg-transparent"
        />
      </div>
    </div>
  );
};

export default Search;
