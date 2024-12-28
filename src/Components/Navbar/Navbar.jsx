import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { FcServices } from "react-icons/fc";
import { MdConnectWithoutContact } from "react-icons/md";
import { CgLogIn } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";


const Navbar = () => {
  const [open, setOpen] = useState(false); // For mobile menu
  const [isModalOpen, setIsModalOpen] = useState(false); // For login modal
  const menuRef = useRef(null);
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(null);
  const [sucess, setSucess] = useState(false);
const navagate=useNavigate()
  // Toggle menu open/close
  const toggleMenu = () => setOpen(!open);

  // Close menu when clicking outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(()=>{
      console.log(sucess)
  },[sucess])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    const token=localStorage.getItem("isAdmin");
    if (token){
      setSucess(true);
    }else{
      setSucess(false)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  // Open login modal
  const handleLoginClick = () => {
    setIsModalOpen(true);
    setOpen(false); // Close the mobile menu if open
  };

  // Close login modal
  const closeModal = () => setIsModalOpen(false);
  
  const handleloginSubmit= async(e)=>{
  e.preventDefault();
  const responce=await fetch("https://clothbackend-t858.onrender.com/api/login",{
    method:"POST",
    body:JSON.stringify({email,password}),
    headers:{
      "Content-Type":"application/json"
    }
  
  })
  if (responce.ok){
    navagate("/create-page");
    localStorage.setItem("isAdmin",true);
    setEmail("")
    setPassword("")
    setSucess(true)
    closeModal();
  }else{
    setError("wrong email or password")
    
  }
  }

  const handleLogoutClick = () => {
    localStorage.removeItem("isAdmin");
    setSucess(false);
    navagate("/");
    setOpen(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    // <div className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 text-white">
    <div className="bg-gray-100 text-yellow-900">
      {/* Navbar container */}
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
     <div className="flex items-center gap-2">
     <img
          src="https://res.cloudinary.com/dfxkazmkc/image/upload/v1735391457/Flux_Dev_A_modern_sleek_logo_for_JVS_Marketing_featuring_bold__0-removebg-preview_fl8xsu.png"
           className="w-[100px] h-auto max-w-full"
          alt="Logo"
          
        />
         {/* <h1 className="text-2xl font-bold text-orange-200"> JVS Marketing</h1> */}
     </div>
       

        {/* Hamburger button (visible on smaller screens) */}
        <button onClick={toggleMenu} className="p-2 lg:hidden">
          {open ? (
            <GrClose className="text-2xl" />
          ) : (
            <GiHamburgerMenu className="text-3xl" />
          )}
        </button>

        {/* Full Navbar (visible on larger screens) */}
        <div className="hidden lg:flex space-x-8 items-center">
          <Link to="/" className="text-lg hover:text-orange-400 flex items-center gap-2">
            <HiOutlineHome /> Home
          </Link>
          <Link to="/about" className="text-lg hover:text-orange-400 flex items-center gap-2">
            <MdOutlineRoundaboutRight /> About
          </Link>
          <Link to="/services" className="text-lg hover:text-orange-400 flex items-center gap-2">
            <FcServices /> Services
          </Link>
          <Link to="/contact" className="text-lg hover:text-orange-400 flex items-center gap-2">
            <MdConnectWithoutContact /> Contact
          </Link>
          {sucess?(        <button
          onClick={handleLogoutClick}
          className="text-2xl flex justify-center items-center gap-2 hover:text-orange-400 ml-10"
        >
         <CiLogout /> Logout
        </button>):(<button
          onClick={handleLoginClick}
          className="text-2xl flex justify-center items-center gap-2 hover:text-orange-400 ml-10"
        >
          <CgLogIn /> Login
        </button>)}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`${
          open ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-2/3 h-full bg-gray-100 text-yellow-900 flex flex-col items-start space-y-6 transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <Link
          to="/"
          className="text-2xl flex justify-center items-center gap-2 hover:text-orange-400 mt-36 ml-10"
          onClick={() => setOpen(false)}
        >
          <HiOutlineHome /> Home
        </Link>
        <Link
          to="/about"
          className="text-2xl flex justify-center items-center gap-2 hover:text-orange-400 ml-10"
          onClick={() => setOpen(false)}
        >
          <MdOutlineRoundaboutRight /> About
        </Link>
        <Link
          to="/services"
          className="text-2xl flex justify-center items-center gap-2 hover:text-orange-400 ml-10"
          onClick={() => setOpen(false)}
        >
          <FcServices /> Services
        </Link>
        <Link
          to="/contact"
          className="text-2xl flex justify-center items-center gap-2 hover:text-orange-400 ml-10"
          onClick={() => setOpen(false)}
        >
          <MdConnectWithoutContact /> Contact
        </Link>
        {sucess?(        <button
          onClick={handleLogoutClick}
          className="text-2xl flex justify-center items-center gap-2 hover:text-orange-400 ml-10"
        >
         <CiLogout /> Logout
        </button>):(<button
          onClick={handleLoginClick}
          className="text-2xl flex justify-center items-center gap-2 hover:text-orange-400 ml-10"
        >
          <CgLogIn /> Login
        </button>)}
      </div>
     

      {/* Login Modal */}
      {isModalOpen && (
       
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
  <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 relative animate-fade-in">
    {/* Close Button */}
    <button
      type="button"
      onClick={closeModal}
      className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
      aria-label="Close modal"
    >
      &times;
    </button>

    <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Admin Login</h2>
    <form onSubmit={handleloginSubmit}>
      {/* Username Input */}
      <div className="mb-4">
        <label htmlFor="username" className="block mb-2 text-gray-600">
          Username
        </label>
        <input
          id="username"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter username"
          required
        />
      </div>

      {/* Password Input */}
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-gray-600">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={passwordVisible ? "text" : "password"}
            className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter password"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 text-gray-600 transform -translate-y-1/2 focus:outline-none"
          >
            {passwordVisible ? <span className="font-medium">Hide</span> : <span className="font-medium">Show</span>}
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={closeModal}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
       
          className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-500"
        >
         sbmit
        </button>
        
      </div>
 
    </form>
  </div>
</div>

      )}
    </div>
  );
};

export default Navbar;
