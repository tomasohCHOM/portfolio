import Header from "@/components/Header";
import Navbar from "@/components/v0/Navbar";
import Hero from "@/components/v0/Hero";
import Experience from "@/components/v0/Experience";
import Projects from "@/components/v0/Project";
import Extra from "@/components/v0/Extra";
import Footer from "@/components/v0/Footer";
import { experiences, projects, skills } from "@/info";
import { useTheme } from "@/theme";
import "@/styles.css";

export default function PortfolioV0() {
  useTheme("v0");
  return (
    <div>
      <Header />
      <main className="mx-auto flex max-w-3xl flex-col justify-center px-8">
        <Navbar />
        <div className="mt-8">
          <Hero />
          <Experience experiences={experiences} skills={skills} />
          <Projects projects={projects} />
          <Extra />
        </div>
      </main>
      <Footer />
    </div>
  );
}
