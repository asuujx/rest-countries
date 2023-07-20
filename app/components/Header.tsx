import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="flex justify-between py-7 px-3 relative z-10 shadow-md">
      <h1 className="font-bold">Where in the world?</h1>
      <div className="flex gap-2">
        <FontAwesomeIcon icon={farMoon} className="w-3"/>
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
