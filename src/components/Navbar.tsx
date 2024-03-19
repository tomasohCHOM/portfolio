import React from "react";

const headerItems = ["Home", "Experience", "Projects", "Extra"];

export default function Navbar() {
  return (
    <nav className="mx-auto flex items-center justify-center gap-2 border-b-[1px] border-slate-300 p-2 text-[0.75rem] md:gap-3 md:text-[1rem]">
      {headerItems.map((item, i) => (
        <a
          className={`cursor-pointer transition-all ease-in hover:text-[1.25rem] ${
            i === 0 ? "text-[1.25rem] font-semibold" : ""
          }`}
          key={`header-item-${i}`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
