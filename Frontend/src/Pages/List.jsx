import React, {useEffect, useState} from "react";
import {DeleteUser, GetallUser} from "../assets/Services";
import Swal from "sweetalert2";
import Edit from "../Components/Edit";
import { Link } from "react-router-dom";

const List = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    GetUsers();
  }, []);
  const GetUsers = () => {
    GetallUser().then((res) => {
      setUsersData(res.data.AllUsers);
      console.log(res.data.AllUsers);
    });
  };
  const RemoveUser = (id) => {
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
        DeleteUser(id).then((res) => {
          if (res.data.msg == "User deleted successfully") {
            Swal.fire("Deleted!", "User Data has been Deleted.", "success");
            GetUsers();
          }
        });
      }
    });
  };
  const UpdateUser = (id) => {};
  return (
    <>
    <h1 className="text-center text-3xl pt-14 "> Users List </h1>
      <div className="relative overflow-x-auto w-full p-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
             Sr.No
              </th>
              <th scope="col" className="px-6 py-3">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile Number
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Edite
              </th>
              <th scope="col" className="px-6 py-3">
                Edite
              </th>
            </tr>
          </thead>
          <tbody>
            {usersData &&
              usersData?.map((el,index) => (
                <tr className="  border-b  bg-gray-800  text-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  text-white whitespace-nowrap "
                  >
                   
                    {index+1}
                 
              
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  text-white whitespace-nowrap "
                  >
                    {el.username}
                  </th>
                  <td className="px-6 py-4">+91 {el.mobnumber}</td>
                  <td className="px-6 py-4"> {el.email}</td>
                  <td className="px-2 py-2">
                    <button
                      onClick={() => UpdateUser(el._id)}
                      className="border px-6 py-2   rounded bg-white text-green-600"
                    >
        <Link to={`/list/${el._id}`}>Edite User</Link>
                    </button>
                  </td>
                  <td className="px-2 py-2 ">
                    <button
                      onClick={() => RemoveUser(el._id)}
                      className="border p-2 rounded bg-white text-red-400"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;
