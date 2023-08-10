"use client"
import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as fasMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function DarkMode() {
  const [darkToggle, setDarkToggle] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkToggle) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } 
  }, [darkToggle]);

  return (
    <div className="flex gap-2 place-items-center">
      <FontAwesomeIcon icon={darkToggle ? fasMoon : farMoon} className="w-3" />
      <button
        className="font-semibold"
        onClick={() => setDarkToggle(!darkToggle)}
      >
        {darkToggle ? 'Dark Mode' : 'Light Mode' }
      </button>
    </div>
  );
}

export default DarkMode;
