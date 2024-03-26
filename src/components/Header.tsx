import { useTheme } from "next-themes";
import { useState } from "react";
import { FaAlignRight } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  };

  return (
    <header className="relative flex items-center justify-between px-8 py-8 md:py-4">
      <span className="italic">Tomas Oh</span>
      <button
        onBlur={() => setIsOpen(!theme)}
        onMouseDown={() => setIsOpen(true)}
      >
        <FaAlignRight size={16} />
      </button>

      <div
        className={`absolute right-8 top-16 flex flex-col rounded-lg bg-secondary text-sm font-semibold transition-transform md:top-12
        ${isOpen ? "scale-100" : "scale-0"}`}
      >
        <button
          onMouseDown={changeTheme}
          className="w-full p-2 text-start transition hover:backdrop-brightness-105"
        >
          Switch Themes
        </button>
        <button className="w-full p-2 text-start transition hover:backdrop-brightness-105">
          Disable Background Animation
        </button>
      </div>
    </header>
  );
}
