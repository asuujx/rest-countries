import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  input: string;
  setInput: (input: string) => void;
};

const SearchInput = ({ input, setInput }: Props) => {
  return (
    <div className="flex px-10 py-4 bg-white gap-6 shadow-md rounded">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4" />
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Search for a country..."
        className="bg-transparent"
      />
    </div>
  );
};
export default SearchInput;
