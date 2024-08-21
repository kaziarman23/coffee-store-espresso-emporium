import heroBg from "../assets/more/heroBg.png";
import specialIconOne from "../assets/icons/specialIconOne.png";
import specialIconTwo from "../assets/icons/specialIconTwo.png";
import specialIconThree from "../assets/icons/specialIconThree.png";
import specialIconFour from "../assets/icons/specialIconFour.png";

const Hero = () => {
  const specialtys = [
    {
      id: 1,
      logo: specialIconOne,
      title: "Awesome Aroma",
      text: "You will definitely be a fan of the design & aroma of your coffee",
    },
    {
      id: 2,
      logo: specialIconTwo,
      title: "High Quality",
      text: "We served the coffee to you maintaining the best quality",
    },
    {
      id: 3,
      logo: specialIconThree,
      title: "Pure Grades",
      text: "The coffee is made of the green coffee beans which you will love",
    },
    {
      id: 4,
      logo: specialIconFour,
      title: "Proper Roasting",
      text: "Your coffee is brewed by first roasting the green coffee beans",
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="w-full h-[575px] relative">
        <img
          src={heroBg}
          alt="hero section img"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-56 right-8 w-[700px] text-white">
          <h1 className="font-real text-4xl">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="my-3 text-sm">
            It&#39;s coffee time - Sip & Savor - Relaxation in every sip! Get
            the nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-[#E3B577] text-black hover:bg-transparent hover:text-white cursor-pointer font-real w-20 h-8">
            Lear More
          </button>
        </div>
      </div>
      <div className="w-full h-[300px] bg-[#ECEAE3]">
        <div className="w-4/5 h-full mx-auto flex justify-center items-center gap-3">
          {specialtys.map((special) => (
            <div key={special.id} className="w-full h-full">
              <img src={special.logo} alt={special.title} className="mt-14"/>
              <h1 className="font-real text-2xl my-3">{special.title}</h1>
              <p className="font-Raleway text-sm">{special.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
