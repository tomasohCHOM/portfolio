import React from "react";

const headerItems = ["Home", "Experience", "Projects", "Blog", "Extra"];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-3 border-b-[1px] p-2 border-slate-300 mx-auto">
      {headerItems.map((item, i) => (
        <a
          className={`cursor-pointer hover:text-[1.25rem] transition-all ease-in ${
            i === 0 ? "font-semibold text-[1.25rem]" : ""
          }`}
          key={`header-item-${i}`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
