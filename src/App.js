import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((val) => {
        setData(val.results[0]);
      })
      .catch((error) =>
        console.error("Error while fetching the data: ", error)
      );
  }, []);

  return (
    <div className="App">
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        {data ? (
          <div>
            <div className="bg-white shadow-lg rounded-md p-8 w-full flex  space-x-6 border border-yellow-300">
              {/* Left side: Image */}
              <img
                src={data.picture.large}
                alt={`${data.name.first} ${data.name.last}`}
                className="w-60 h-60 rounded-md object-cover"
              />

              {/* Right side: data details */}
              <div className="text-lg text-left ">
                <div className="grid grid-cols-4 ">
                  <h2 className="text-2xl font-bold text-gray-800 col-span-1 ">
                    FirstName:
                  </h2>
                  <p className="text-2xl text-gray-800 capitalize col-span-1">
                    {data.name.first}
                  </p>
                  <h2 className="text-2xl font-bold text-gray-800 col-span-1">
                    LastName:
                  </h2>
                  <p className="text-2xl text-gray-800 capitalize col-span-1">
                    {data.name.last}
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-2 pt-6">
                  <h2 className="text-2xl font-bold text-gray-800 col-span-1 ">
                    Gender:
                  </h2>
                  <p className="text-2xl text-gray-800 capitalize col-span-1">
                    {data.gender}
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-2 pt-6">
                  <h2 className="text-2xl font-bold text-gray-800 col-span-1 ">
                    Phone Number:
                  </h2>
                  <p className="text-2xl text-gray-800 capitalize col-span-1">
                    {data.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="border border-blue-300 shadow rounded-md p-8 w- mx-auto items-center ">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-200 w-60 h-60"></div>
                <div className="flex-1 space-y-6 items-center py-6">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-1 w-60"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-1 w-60"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4  pt-6">
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4  pt-6">
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
