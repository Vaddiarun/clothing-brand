import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";

export const Products = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
    };
    fetchCategory();
  }, [category]);

  const sendingjoledata = (item) => {
    localStorage.setItem("item", JSON.stringify(item));
    window.location.href = "/detailspage";
  };

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <SyncLoader color="blue" size={15} margin={2} />
        </div>
      ) : (
        <div className="bg-gray-100 min-h-screen p-4">
          <h1 className="text-3xl font-bold text-center mb-6">
            {category ? `${category} Products` : "Products"}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data?.length > 0 ? (
              data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={item.imageUrl} // Assuming your API returns an `image` field
                    alt={item.name}
                    className="w-full h-48 object-cover rounded"
                  />
                  <h2 className="text-lg font-semibold text-gray-800 mt-4">
                    {item.name}
                  </h2>
                  <p className="text-orange-900 mt-2 text-xl"> {item.category}</p>
                  <button
                    onClick={() => sendingjoledata(item)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  >
                    Click Here to View Details
                  </button>
                </div>
              ))
            ) : (
              <div className="col-span-4 text-center mt-10 p-4 text-2xl text-gray-600 relative overflow-hidden flex justify-center">
                <div className="absolute inset-0 border-2 border-red-400 rounded-xl animate-bubble"></div>
               <img  className="sm:w-[20px] lg:w-[300px]" src="https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-illustration-download-in-svg-png-gif-file-formats--no-records-list-record-emply-data-user-interface-pack-design-development-illustrations-6430781.png?f=webp"/>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
