import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import FilterOptions from "./FilterOptions";

type Props = {
  optionHandler: (value: string | null) => void;
};

const Filter = ({ optionHandler }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block mb-10 lg:pt-8 2xl:pt-8">
      <button
        onClick={toggleOptions}
        className="bg-white shadow-md py-4 pl-6 rounded-md w-56 ml-6 flex gap-2 place-content-between dark:dark:bg-[hsl(209,23%,22%)]"
      >
        <p>Filter by Region</p>
        <FontAwesomeIcon
          icon={faCaretDown}
          className="text-[#000000] mr-6 w-3 dark:text-[hsl(0,0%,100%)]"
        />
      </button>
      {isOpen && <FilterOptions optionHandler={optionHandler} />}
    </div>
  );
};

export default Filter;
