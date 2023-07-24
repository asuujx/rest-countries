import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between py-7 px-3 relative z-10 shadow-md">
      <Link href="/" className="font-bold">Where in the world?</Link>
      <div className="flex gap-2">
        <FontAwesomeIcon icon={farMoon} className="w-3"/>
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
