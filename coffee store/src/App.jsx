import { useLoaderData, useNavigate } from "react-router";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Navbar from "./components/Share/Navbar";
import Hero from "./components/Hero";
import popularBg from "./assets/more/popularBg.png";
import { GiCoffeeCup } from "react-icons/gi";


const App = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  const navigator = useNavigate()

  const handleAddCoffee = () => {
    navigator("/addCoffee")
  }
  return (
    <div>
      <div className="w-full h-16 fixed top-0 left-0 z-50">
        <Navbar />
      </div>
      <div className="w-full h-[875px] mt-16">
        <Hero />
      </div>

      <div
        className="w-full h-auto my-10"
        style={{
          backgroundImage: `url(${popularBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-52 flex gap-5 flex-col justify-center items-center">
          <p className="font-Raleway">--- Sip & Savor --- </p>
          <h1 className="font-real text-[#331A15] text-shadow-black-glow">
            Our Popular Products
          </h1>
          
            <button 
            onClick={handleAddCoffee}
            className="w-32 h-10 no-underline bg-[#E3B577] text-white text-xl rounded-md font-real flex justify-center items-center cursor-pointer">
              Add Coffee <GiCoffeeCup className="ml-2" />
            </button>
          
        </div>

        <div className="w-4/5 mx-auto my-10 gap-6 grid md:grid-cols-2">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
