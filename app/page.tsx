import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHouseMedical } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full text-white">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHouseMedical /> }]}
        />
        <Hero />
        <Grid />
        <Skills />
      </div>
    </main>
  );
}
