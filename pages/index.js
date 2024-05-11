import Hero from "@/components/Hero";
import Templates from "@/components/Templates";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-2">
        <Templates />
      </div>
    </>
  );
}
