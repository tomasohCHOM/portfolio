import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col justify-center max-w-2xl mx-auto">
      <Navbar />
      <Hero />
    </main>
  );
}
