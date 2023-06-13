import React, { useState, useRef, useEffect } from "react";
import { GetSingleuser, PostUser } from "../assets/Services";
import Swal from "sweetalert2";

const Edit = () => {
  const formRef = useRef(null);
  const [formdata, setFormdata] = useState({});

  const handeldchange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
let getUser=()=>{
  GetSingleuser()
}

useEffect(()=>{
  getUser()
},[])
  const UpdateUser = (e) => {
    e.preventDefault();
    const res = PostUser(formdata);
    res.then((response) => {
      if (response.data.msg === "User Updated") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Update Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        formRef.current.reset(); // Clear form fields
        setFormdata({});
      } else if (response.data.msg === "User Exist") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Exists With the Same Email. Try a Different Email.",
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
                      defaultValue={el?.username}
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
                      defaultValue={el?.email}
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
                      defaultValue={el?.mobnumber}
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
                      defaultValue={el?.address}
                      onChange={handeldchange}
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button
                    type="submit"
                    class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Button
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
