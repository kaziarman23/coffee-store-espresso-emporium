import { GoEye } from "react-icons/go";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, teast, cetagory, details, photo } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side w-full shadow-2xl bg-[#F5F4F1]">
      <figure className="w-2/5">
        <img src={photo} alt="coffee images" className="object-cover" />
      </figure>
      <div className="w-3/5 flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">Name: {name}</h2>
          <h4>Chef: {chef}</h4>
          <p>Teast: {teast}</p>
        </div>
        <div className="join join-vertical pr-4">
          <button className="btn join-item bg-[#D2B48C]" title="View">
            <GoEye className="text-white hover:text-black hover:py-2" />
          </button>

          <button className="btn join-item bg-[#3C393B] " title="Update">
            <Link to={`/updateCoffee/${_id}`}>
              <FaPen className="text-white hover:text-black hover:py-2"/>
            </Link>
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn join-item bg-[#EA4744]"
            title="Delete"
          >
            <MdDelete className="text-white hover:text-black hover:py-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
