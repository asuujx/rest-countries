const options = [
  { name: "All", value: null },
  { name: "Africa", value: "Africa" },
  { name: "America", value: "Americas" },
  { name: "Asia", value: "Asia" },
  { name: "Europe", value: "Europe" },
  { name: "Oceania", value: "Oceania" },
];

type Props = {
  optionHandler: (value: string | null) => void;
};

function FilterOptions({ optionHandler }: Props) {
  return (
    <div className="absolute mt-2">
      <div className="flex flex-col gap-1 ml-6 bg-white shadow-md w-56 rounded-md py-4 dark:bg-[hsl(209,23%,22%)]">
        {options.map((option, index) => (
          <button
            className="text-left pl-6"
            onClick={() => optionHandler(option.value)}
            key={index}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterOptions;
