import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Summary from "./components/Summary";


export default async function Page() {
  return (
    <div className="bg-neutral-100 font-poppins">
      <Hero />
      <Summary />
      <Featured />
    </div>
  )
}



