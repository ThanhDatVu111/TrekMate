import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Getapp from "@/components/Getapp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <> {/*A fragment is a way to group multiple elements without needing a parent element*/}
      <Hero />
      <Camp />
      <Guide />
      <Features/>
      <Getapp />
    </>
  );
}
