import { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import userListImg from "../assets/more/userListImg.png";

const Users = () => {
  const loadedUsersData = useLoaderData();
  const [users, setUsers] = useState(loadedUsersData);
  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
              console.log("user data is deleted");
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="w-full h-screen"
    style={{
        backgroundImage: `url(${userListImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    }}>
      <div className="w-4/5 h-auto mx-auto my-10">
        <h1 className="font-real text-center">
          Users number is : {loadedUsersData.length}
        </h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Sl:</th>
                  <th>Email</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loadedUsersData.map((user, index) => (
                  <tr key={index} className="">
                    <th>{index + 1}</th>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="p-2 bg-red-500 text-white rounded-xl border-none hover:text-black cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
