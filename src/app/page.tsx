import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Project";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center px-8 max-w-2xl mx-auto">
        <Navbar />
        <div className="mt-8">
          <Hero />
          <Projects />
        </div>
      </main>
    </>
  );
}
