import Header from "@/components/Header";
import Hero from "@/components/v1/Hero";
import { useTheme } from "@/theme";
import "@/styles.css";

export default function PortfolioV1() {
  useTheme("v1");
  return (
    <div>
      <Header />
      <main className="px-8 py-0 md:py-12">
        <div className="max-w-160">
          <Hero />
        </div>
      </main>
    </div>
  );
}
