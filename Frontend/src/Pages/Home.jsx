import React, {useState, useRef} from "react";
import {PostUser} from "../assets/Services";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const formRef = useRef(null);
  const [formdata, setFormdata] = useState({});
  const [loading, setloading] = useState(false);
  let [emailerr, setemailerr] = useState("");
  let [moblerr, setmoberr] = useState("");
  const navigate = useNavigate();

  // ------- Geeting Inputs From The fiild ---------
  const handeldchange = (e) => {
    const {name, value} = e.target;

    // Email validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setemailerr("Please enter a valid email address.");
      } else {
        setemailerr("");
      }
    }

    // Phone number validation
    if (name === "mobnumber") {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(value)) {
        setmoberr("Please enter a 10-digit phone number.");
      } else {
        setmoberr("");
      }
    }
    setFormdata({...formdata, [name]: value});
  };

  // ---  Add new User -------
  const AddNewUser = (e) => {
    e.preventDefault();
    setloading(true);
    const res = PostUser(formdata);
    res.then((response) => {
      if (response.data.msg === "User Created") {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setloading(false);
        navigate("/list");
      } else if (response.data.msg === "User Exist") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Exists With the Same Email. Try a Different Email.",
        });
        setloading(false);
      } else if (response.data.msg === "User Exist username") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Exists With the Same Username. Please use diffrent Username .",
        });
        setloading(false);
      }
    });
  };

  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 pt-8 mx-auto">
          <div class="flex flex-col text-center w-full ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font   text-gray-900">
              User Form
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={AddNewUser}>
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
                      onChange={handeldchange}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
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
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                      {emailerr}
                    </p>
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
                      onChange={handeldchange}
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                      {moblerr}
                    </p>
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
                      onChange={handeldchange}
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-28 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button
                    type="submit"
                    disabled={loading ? true : false}
                    class="flex mx-auto text-white bg-rose-400 border-0 py-2 px-8 focus:outline-none hover:bg-rose-600 rounded text-lg"
                  >
                    {loading ? "Loading" : "Add New User"}
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

export default Home;
