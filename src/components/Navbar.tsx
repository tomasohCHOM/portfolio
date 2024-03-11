import React from "react";

const headerItems = ["Home", "Experience", "Projects", "Blog", "Extra"];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-3 border-b-[1px] p-2 border-slate-300 mx-auto w-full">
      {headerItems.map((item, i) => (
        <a
          className="cursor-pointer hover:scale-110 transition-all ease-in"
          key={`header-item-${i}`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
