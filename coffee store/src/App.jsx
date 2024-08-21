import { useLoaderData, useNavigate } from "react-router";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Navbar from "./components/Share/Navbar";
import Hero from "./components/Hero";
import popularBg from "./assets/more/popularBg.png";
import { GiCoffeeCup } from "react-icons/gi";
import cup1 from "./assets/cups/cup1.png";
import cup2 from "./assets/cups/cup2.png";
import cup3 from "./assets/cups/cup3.png";
import cup4 from "./assets/cups/cup4.png";
import cup5 from "./assets/cups/cup5.png";
import cup6 from "./assets/cups/cup6.png";
import cup7 from "./assets/cups/cup7.png";
import cup8 from "./assets/cups/cup8.png";

const App = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  const navigator = useNavigate();

  const handleAddCoffee = () => {
    navigator("/addCoffee");
  };

  const instaImages = [
    {
      id: 1,
      img: cup1,
    },
    {
      id: 2,
      img: cup2,
    },
    {
      id: 3,
      img: cup3,
    },
    {
      id: 4,
      img: cup4,
    },
    {
      id: 5,
      img: cup5,
    },
    {
      id: 6,
      img: cup6,
    },
    {
      id: 7,
      img: cup7,
    },
    {
      id: 8,
      img: cup8,
    },
  ];

  return (
    <div>
      <header className="w-full h-16 fixed top-0 left-0 z-50">
        <Navbar />
      </header>
      <div className="w-full h-[875px] mt-16">
        <Hero />
      </div>

      <popularSection
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
            className="w-32 h-10 no-underline bg-[#E3B577] text-white text-xl rounded-md font-real flex justify-center items-center cursor-pointer"
          >
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
      </popularSection>

      {/* instagram section */}
      <section className="w-full h-[800px] mt-32">
        <div className="w-4/5 h-full mx-auto">
          <div className="flex flex-col justify-center items-center">
            <p className="font-Raleway text-sm">Follow us Now</p>
            <h1 className="font-real text-[#331A15] text-3xl">Follow on Instagram</h1>
          </div>
          <div className="w-4/5 my-10 mx-auto grid md:grid-cols-4 gap-3">
            {instaImages.map((cup) => (
              <div className="w-52 h-52" key={cup.id}>
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={cup.img}
                  alt="instagram images"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer></footer>
    </div>
  );
};

export default App;
