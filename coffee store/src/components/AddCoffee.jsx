import { TiArrowLeftThick } from "react-icons/ti";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const teast = form.teast.value;
    const cetagory = form.cetagory.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      chef,
      supplier,
      teast,
      cetagory,
      details,
      photo,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "New Coffee Item Added",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="w-full h-auto">
      {/* Navbar component */}
      <div className="w-4/5 h-[705px] mx-auto my-20">
        <button className="font-bold mb-5 flex items-center">
          <TiArrowLeftThick /> Back to home
        </button>
        <div className="w-full h-auto bg-[#F4F3F0]">
          <div className="flex justify-center items-center gap-5 flex-col">
            <h1 className="font-real font-bold text-2xl text-black text-shadow-black-glow mt-10">
              Add New Coffee
            </h1>
            <p className="text-sm mx-20">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>

          <form onSubmit={handleAddCoffee} className="w-4/5 mx-auto my-10">
            {/* 1st row */}
            <div className="flex justify-center items-center gap-5 mb-5">
              <div className="w-1/2">
                <label htmlFor="name" className="text-xl">
                  Name
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Coffee name"
                  className="mt-2 p-3 w-full rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="chef" className="text-xl">
                  Chef
                </label>
                <br />
                <input
                  type="text"
                  id="chef"
                  name="chef"
                  placeholder="Enter Coffee Chef"
                  className="mt-2 p-3 w-full rounded-md"
                />
              </div>
            </div>
            {/* 2nd row */}
            <div className="flex justify-center items-center gap-5 mb-5">
              <div className="w-1/2">
                <label htmlFor="supplier" className="text-xl">
                  Supplier
                </label>
                <br />
                <input
                  type="text"
                  id="supplier"
                  name="supplier"
                  placeholder="Enter Coffee Supplier"
                  className="mt-2 p-3 w-full rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="teast" className="text-xl">
                  Teast
                </label>
                <br />
                <input
                  type="text"
                  id="teast"
                  name="teast"
                  placeholder="Enter Coffee Teast"
                  className="mt-2 p-3 w-full rounded-md"
                />
              </div>
            </div>
            {/* 3ed row */}
            <div className="flex justify-center items-center gap-5 mb-5">
              <div className="w-1/2">
                <label htmlFor="cetagory" className="text-xl">
                  Cetagory
                </label>
                <br />
                <input
                  type="text"
                  id="cetagory"
                  name="cetagory"
                  placeholder="Enter Coffee Cetagory"
                  className="mt-2 p-3 w-full rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="details" className="text-xl">
                  Details
                </label>
                <br />
                <input
                  type="text"
                  id="details"
                  name="details"
                  placeholder="Enter Coffee details"
                  className="mt-2 p-3 w-full"
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="photo" className="text-xl">
                Photo
              </label>
              <br />
              <input
                type="text"
                id="photo"
                name="photo"
                placeholder="Enter Photo URL"
                className="mt-2 p-3 w-full rounded-md"
              />
            </div>
            <div className="col-span-2">
              <input
                type="submit"
                value="Add Coffee"
                className="w-full h-10 mb-10 bg-orange-500 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
      {/* footer div */}
    </div>
  );
};

export default AddCoffee;
