import Camp from "@/components/Travel";
import Features from "@/components/Features";
import Getapp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Travel from "@/components/Travel";

export default function Home() {
  return (
    <> {/*A fragment is a way to group multiple elements without needing a parent element*/}
      <Hero />
      <Travel />
      <Guide />
      <Features/>
      <Getapp />
    </>
  );
}
