import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/users`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);

  function heandelDelete(id) {
    let responce = confirm(
      "Are you shure you wante to delete that data ???????????"
    );
    console.log(id);
    if (responce) {
      axios
        .delete(`http://localhost:3030/users/${id}`)
        .then(() => {
          // relode the page
          axios.get(`http://localhost:3030/users`);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-600">
        User Data
      </h1>

      <div className="overflow-x-auto p-4 bg-white shadow-lg rounded-xl">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <tr>
              <th className="px-5 py-3 text-left">ID</th>
              <th className="px-5 py-3 text-left">Name</th>
              <th className="px-5 py-3 text-left">Phone</th>
              <th className="px-5 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {/* Creat Button */}
            <button className="px-3 py-1 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow hover:shadow-md hover:scale-105 transition">
              <Link to="/create">Creat</Link>
            </button>
            {data?.map((res, index) => (
              <tr
                key={res.id}
                className={`transition-all ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:scale-[1.01] hover:bg-indigo-50`}
              >
                <td className="px-5 py-3 border-b text-black">{res.id}</td>
                <td className="px-5 py-3 border-b font-semibold text-gray-700">
                  {res.name}
                </td>
                <td className="px-5 py-3 border-b text-gray-600">
                  {res.phone}
                </td>

                <td className="px-5 py-3 border-b flex gap-2">
                  {/* Update Button */}
                  <button className="px-3 py-1 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow hover:shadow-md hover:scale-105 transition">
                    <Link to={`/update/${res.id}`}>Update</Link>
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => heandelDelete(res.id)}
                    className="px-3 py-1 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white shadow hover:shadow-md hover:scale-105 transition"
                  >
                    Delete
                  </button>

                  {/* Read Button */}
                  <button className="px-3 py-1 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white shadow hover:shadow-md hover:scale-105 transition">
                    <Link to={`/read/${res.id}`}> Read</Link>
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

export default Home;
