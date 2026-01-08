import Hero from "../components/Hero";
import Projects from "../components/Projects";
import FeaturedProject from "@/components/FeaturedProject";
export default function Home() {
  return (
    <main>
      <Hero />
	    <Projects />
      <FeaturedProject/>
    </main>
  );
}
