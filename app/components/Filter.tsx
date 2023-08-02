import { useState } from "react";

type Props = {
  optionHandler: (value: string | null) => void;
}

const options = [
  { name: "All", value: null },
  { name: "Africa", value: "Africa" },
  { name: "America", value: "Americas" },
  { name: "Asia", value: "Asia" },
  { name: "Europe", value: "Europe" },
  { name: "Oceania", value: "Oceania" },
];

const Filter = ({ optionHandler }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="bg-white shadow-md w-fit py-4 pl-4 pr-14 rounded ml-5 mb-5">
        <button onClick={toggleOptions}>Filter by Region</button>
      </div>
      <div>
        {options.map((option, index) => (
          <button onClick={() => optionHandler(option.value)} key={index}>{option.name}</button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
