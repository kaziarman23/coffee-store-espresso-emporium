import { TiArrowLeftThick } from "react-icons/ti";
import { useLoaderData, useNavigate } from "react-router";

const Display = () => {
  const currentCoffee = useLoaderData();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-screen">
      <div className="w-3/4 mx-auto my-20">
        <button
          onClick={handleClick}
          className="w-32 h-8 border-none flex items-center font-real cursor-pointer text-2xl mb-4"
        >
          <TiArrowLeftThick /> Back to home
        </button>

        <div className="w-full h-[400px] mx-auto bg-[#F4F3F0] flex justify-center items-center gap-5">
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={currentCoffee.photo}
              alt="coffee photo"
              className="w-[200px] h-[240px] object-cover"
            />
          </div>
          <div className="w-1/2 space-y-3">
            <h1 className="font-real">{currentCoffee.name}</h1>
            <h3 className="font-real">Chef : {currentCoffee.chef}</h3>
            <h3 className="font-real">Teast : {currentCoffee.teast}</h3>
            <h3 className="font-real">Cetagory : {currentCoffee.cetagory}</h3>
            <h3 className="font-real">Supplier : {currentCoffee.supplier}</h3>
            <h3 className="font-real">Details : {currentCoffee.details}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
