
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="flex justify-between py-8 px-4 relative z-10 shadow-md">
      <Link href="/" className="font-extrabold">Where in the world?</Link>
      <DarkMode />
    </div>
  );
};

export default Header;
