import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DarkMode() {
  return (
    <div className="flex gap-2 place-items-center">
      <FontAwesomeIcon icon={farMoon} className="w-3" />
      <button className="font-semibold">Dark Mode</button>
    </div>
  );
}

export default DarkMode;
