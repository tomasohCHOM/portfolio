"use client";

import Background from "@/components/Background";
import Experience from "@/components/Experience";
import Extra from "@/components/Extra";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Project";
import { experiences, projects, skills } from "@/info/info";

export default function Home() {
  return (
    <>
      <Background />
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
    </>
  );
}
