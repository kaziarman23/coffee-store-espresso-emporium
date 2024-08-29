import { NavLink } from "react-router-dom";
import navBg from "../../assets/more/navBg.jpg";
import navLogo from "../../assets/more/navLogo.png";

const Header = () => {
  return (
    <div
      className="w-full h-16 flex justify-between items-center"
      style={{
        backgroundImage: `url(${navBg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center items-center gap-2 ml-5">
        <img
          src={navLogo}
          alt="navbar logo"
          className="w-10 h-10 object-cover"
        />
        <h1 className="text-white text-2xl  font-real">
          <NavLink to="/" className="list-none no-underline text-white">Espresso Emporium</NavLink>
        </h1>
      </div>
      <div className="">
        <ul className="flex justify-center items-center gap-2 list-none">
          <NavLink to="/">
            <li className="p-2 text-white ">Home</li>
          </NavLink>
          <NavLink to="/users">
            <li className="p-2 text-white">Users</li>
          </NavLink>
        </ul>
      </div>
      <div className="mr-5">
        <NavLink to="/signup">
          <button className="btn btn-outline text-white ">Sign UP</button>
        </NavLink>
        {/* <ul>
          <NavLink to="/signup">
            <li>Sign UP</li>
          </NavLink>
          <NavLink to="/signin">
            <li>Sign IN</li>
          </NavLink>
        </ul> */}
      </div>
    </div>
  );
};

export default Header;
