import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Products = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(
        `https://clothbackend-t858.onrender.com/api/getProducts`,
        {
          method: "POST",
          body: JSON.stringify({ category: category }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setData(data);
    };
    fetchCategory();
  }, [category]);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        {category ? `${category} Products` : "Products"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.
                imageUrl} // Assuming your API returns an `image` field
              alt={item.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-semibold text-gray-800 mt-4">
              {item.name}
            </h2>
            <p className="text-gray-600 mt-2">Category: {item.category}</p>
            <p className="text-orange-500 font-bold text-xl mt-2">
              ₹{item.price}
            </p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
             Click Here to View Details 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
