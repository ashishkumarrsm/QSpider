import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  let [value, setValue] = useState({
    id: "",
    name: "",
    phone: "",
  });

  let navigate = useNavigate();

  function handleSubmit(e) {
    
    e.preventDefault()
    console.log(`form is su`)
    axios
      .post(`http://localhost:3030/users`, value)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  console.log(value);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            Create User
          </h2>

          <form className="gap-5 flex flex-col" onSubmit={handleSubmit}>
            {/* User ID */}
            <div className="flex flex-col gap-1">
              <label htmlFor="id" className="text-gray-600 font-medium">
                User ID
              </label>
              <input
                type="text"
                id="id"
                className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => {
                  setValue({ ...value, id: e.target.value });
                }}
              />
            </div>

            {/* User Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-gray-600 font-medium">
                User Name
              </label>
              <input
                type="text"
                id="name"
                className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setValue({ ...value, name: e.target.value })}
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-gray-600 font-medium">
                User Phone No
              </label>
              <input
                type="text"
                id="phone"
                className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setValue({ ...value, phone: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
          <div className="mt-7">
            <Link
              to="/"
              className="mt-4 bg-red-600 text-white p-2 rounded-lg hover:bg-red-900 transition"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
