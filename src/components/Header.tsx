import React from "react";
import { FaAlignRight } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-8 md:py-4">
      <span className="italic">Tomas Oh</span>
      <button>
        <FaAlignRight size={16} />
      </button>
    </header>
  );
}
