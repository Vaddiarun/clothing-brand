import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const CreatePage = () => {
 const  navigate=useNavigate();

  useEffect(()=>{
    const isAdmin=localStorage.getItem("isAdmin");
    if (!isAdmin){
      navigate("/");
    }

},[])


  const [url,setUrl]=useState([]);
  const [Category, setCategory] = useState("");
 const handleFileUpload = async(e) => {
  for (let i = 0; i < e.target.files.length; i++) {
    const file=e.target.files[i];
    const form=new FormData();
    form.append("file",file);
    form.append("upload_preset","clothing_images");
    form.append("cloud_name","dnprs39px");
    const responce=await fetch("https://api.cloudinary.com/v1_1/dnprs39px/image/upload",{
      method:"POST",
      body:form
    })
    const data=await responce.json();
    setUrl(prev=>[...prev,data.url])
  }
 }

 const handleSubmit=async(e)=>{
  e.preventDefault();
  const data1=[];
  for (let i=0;i<url.length;i++){
    data1.push({"imageUrl":url[i],"category":Category})
  }
  const responce =await fetch("https://clothbackend-t858.onrender.com/api/create",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({"data":data1})
  })
  const data=await responce.json();
  setCategory("");
  setUrl([]);
  document.getElementById("fileInput").value="";
  console.log(data)
  toast.success("Product created successfully!", {
    position: toast.TOP_CENTER,
    autoClose: 3000,
  })
  
  
 }

  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 text-white">
      <div className=" bg-transparent p-8 rounded-lg border-2 border-gray-400 shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold mb-6 text-white text-center">
          Create Product
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Input field */}
          <div>
            <label className="block text-white font-medium mb-2">
              Upload an Image
            </label>
            <input
            onChange={handleFileUpload}
              type="file"
              multiple
              accept="image/*"
              id="fileInput"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Select dropdown */}
          <div>
            <label className="block text-white font-medium mb-2">
            Select Category
            </label>
            <select
            onChange={(e) => setCategory(e.target.value)}
            value={Category}
              className=" w-full p-3 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-400"
            >
              <option value="">Select Category</option>
              <option value="pinaform">Pinaform</option>
              <option value="skirts">Skirt</option>
              <option value="frock">Frock</option>
              <option value="chudidhar">Chudidhar</option>
              <option value="halfpant">Half pant</option>
              <option value="trousers">Trousers</option>
              <option value="shirts">Shirt</option>
              <option value="waistcoat">Waistcoat</option>
              <option value="shoes">Shoes</option>
              <option value="tshirt">Tshirt</option>
              <option value="tie">Tie</option>
            </select>
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreatePage;
