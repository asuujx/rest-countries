import Link from 'next/link';
import React from 'react'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BackButton() {
  return (
    <div>
      <Link href="/">
        <div className="flex gap-3 place-items-center bg-white rounded shadow-md w-fit px-8 py-2 mb-20 dark:bg-[hsl(209,23%,22%)]">
          <FontAwesomeIcon icon={faArrowLeft} className="w-3" />
          <p>Back</p>
        </div>
      </Link>
    </div>
  );
}

export default BackButton