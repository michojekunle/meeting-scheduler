import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-11">
      <Header/>
      <Hero/>
    </main>
  );
}
