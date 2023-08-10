
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="relative bg-white z-10 shadow-md dark:dark:bg-[hsl(209,23%,22%)]">
      <div className="lg:w-5/6 lg:m-auto 2xl:w-3/4 2xl:m-auto transition-all ease-in-out">
        <div className="w-full flex justify-between py-8 px-4">
          <Link
            href="/"
            className="font-extrabold text-base lg:text-2xl 2xl:text-2xl"
          >
            Where in the world?
          </Link>
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Header;
