import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form field change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data to ensure it's correct
    console.log("Form data: ", formData);

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_nm8y79g", // Replace with your actual EmailJS service ID
        "template_x0dwbxl", // Replace with your actual EmailJS template ID
        e.target, // The form element
        "DexJtgI78dynPdB22" // Replace with your actual EmailJS user ID (Public Key)
      )
      .then(
        (result) => {
          console.log("Email sent successfully: ", result); // Log the result
          toast.success("Message sent successfully!", {
            position: toast.TOP_RIGHT,
            autoClose: 3000,
          });
          // Clear form after successful submission
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS error:", error); // Log the error for better debugging
          toast.error("Failed to send message. Please try again.", {
            position: toast.TOP_RIGHT,
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 py-6 px-4">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mb-8">
          Welcome to JVS Marketing
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
          JVS Marketing is the leading company to focus on various kinds of knitted
          uniforms, Sports shoes & Bags for school & college that is available at
          one point. Our main objective is to facilitate by providing easy access to
          all schools and colleges for the variety of knitted uniforms. We balance
          our heritage, quality, and craftsmanship with innovation and progress to
          consistently bring to the market the very best in knitted uniforms. We are
          a team renowned for providing high quality service for all our current
          and upcoming clients.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
          JVS Marketing office is located in Rayadurgam. We serve all over India
          for all reputed schools and colleges. We never deny client orders and
          requests, hence we are very successful all over India.
        </p>

        <div className="mb-8 space-x-4">
          <button
            onClick={() => setActiveSection("facts")}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Facts
          </button>
          <button
            onClick={() => setActiveSection("pricing")}
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
          >
            Pricing
          </button>
          <button
            onClick={() => setActiveSection("sendMessage")}
            className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </div>

        {activeSection === "facts" && (
          <div className="w-full bg-gray-200 p-6 rounded-lg mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Facts</h2>
            <ul className="text-gray-700 mt-4">
              <li>We respect our clients in all the ways</li>
              <li>We concentrate on the quality products</li>
              <li>Our team will never give you fake promises</li>
              <li>We promise on-time delivery</li>
            </ul>
          </div>
        )}

        {activeSection === "pricing" && (
          <div className="w-full bg-gray-200 p-6 rounded-lg mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Pricing</h2>
            <p className="text-gray-700 mt-4">
              We never disappoint our clients in pricing. We give you the best
              competitive price in the market. Quality product is our goal!
            </p>
          </div>
        )}

        {activeSection === "sendMessage" && (
          <div className="w-full bg-gray-200 p-6 rounded-lg mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Your Name (required)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Your Email (required)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        <img
          src="https://mumlyfe.com.au/wp-content/uploads/2018/08/Postive-education-what-makes-a-kid-happy-at-school.jpg"
          alt="Company Image"
          className="w-full md:w-2/3 mx-auto rounded-lg mt-8"
        />
      </div>

      <ToastContainer />
    </div>
  );
};

export default About;
