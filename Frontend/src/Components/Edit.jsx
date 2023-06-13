import React, {useState, useRef, useEffect} from "react";
import {GetSingleuser, PostUser, UpdateMyUser} from "../assets/Services";
import Swal from "sweetalert2";
import {Link, useNavigate, useParams} from "react-router-dom";

const Edit = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({});
  const [userdata, setUserdata] = useState({});

  const handeldchange = (e) => {
    const {name, value} = e.target;
    setFormdata({...formdata, [name]: value});
  };

  let getUser = () => {
    GetSingleuser(param.id).then((res) => {
      setUserdata(res.data.User);
    });
  };
  

  useEffect(() => {
    getUser(userdata);
  }, []);


  const UpdateUser = (e) => {
    e.preventDefault();
    const res = UpdateMyUser(formdata,param.id);
    res.then((response) => {
      if (response.data.msg === "User Updated") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Update Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/list");
      } else  {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error updating user Please try  again letter",
        });
      }
    });
  };
  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-14 mx-auto">
          <div class="flex flex-col text-center w-full mb-4">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              UpDate Form
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={UpdateUser}>
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="username"
                      class="leading-7 text-sm text-gray-600"
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      required
                      name="username"
                      id="username"
                      defaultValue={userdata?.username}
                      onChange={handeldchange}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {/* <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username already taken!</p> */}
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handeldchange}
                      defaultValue={userdata?.email}
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {/* <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username already taken!</p> */}
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="mobnumber"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Mobile Number{" "}
                    </label>
                    <input
                      type="number"
                      id="mobnumber"
                      name="mobnumber"
                      defaultValue={userdata?.mobnumber}
                      onChange={handeldchange}
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {/* <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username already taken!</p> */}
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="address"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      defaultValue={userdata?.address}
                      onChange={handeldchange}
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full flex">
                  <button
                    class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    <Link to={"/list"}> Back</Link>
                  </button>
                  <button
                    type="submit"
                    class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Edit;
