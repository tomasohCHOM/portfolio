import { AsciiArt } from "@/components/v1/Ascii";
import Header from "@/components/Header";
import Hero from "@/components/v1/Hero";
import { useTheme } from "@/theme";
import "@/styles.css";

export default function PortfolioV1() {
  useTheme("v1");
  return (
    <div>
      <AsciiArt />
      <Header />
      <main className="max-w-160 px-8 py-0 md:py-12">
        <Hero />
      </main>
    </div>
  );
}
