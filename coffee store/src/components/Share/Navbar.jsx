import navBg from "../../assets/more/navBg.jpg";
import navLogo from "../../assets/more/navLogo.png";

const Navbar = () => {
  return (
    <div
      className="w-full h-full flex justify-center items-center gap-4"
      style={{
        backgroundImage: `url(${navBg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <img src={navLogo} alt="navbar logo" className="w-10 h-10 object-cover" />
      <h1 className="text-white text-4xl  font-real"> Espresso Emporium</h1>
    </div>
  );
};

export default Navbar;
