import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const navigate = useNavigate();
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, teast, cetagory, details, photo } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const teast = form.teast.value;
    const cetagory = form.cetagory.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = {
      name,
      chef,
      supplier,
      teast,
      cetagory,
      details,
      photo,
    };
    console.log(updateCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Great",
          });
          form.reset();
          navigate("/");
        }
      });
  };

  return (
    <div className="bg-[#F5F4F1]">
      <div className="overflow-hidden">
        <h1 className="font-bold text-2xl text-center my-10">
          Update you Coffee {name}
        </h1>
        <form onSubmit={handleUpdateCoffee} className="w-4/5 mx-auto my-10">
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
                defaultValue={name}
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
                defaultValue={chef}
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
                defaultValue={supplier}
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
                defaultValue={teast}
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
                defaultValue={cetagory}
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
                defaultValue={details}
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
              defaultValue={photo}
              placeholder="Enter Photo URL"
              className="mt-2 p-3 w-full rounded-md"
            />
          </div>
          <div className="col-span-2">
            <input
              type="submit"
              value="Update Coffee"
              className="w-full h-10 mb-10 bg-orange-500 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
