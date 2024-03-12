import React from "react";
import { FaAlignRight } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex py-8 md:py-4 px-8 items-center justify-between">
      <span className="italic">Tomas Oh</span>
      <button>
        <FaAlignRight size={16} />
      </button>
    </header>
  );
}
