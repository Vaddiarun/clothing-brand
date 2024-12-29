import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoCallOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 ">
      <div className="container  mx-auto text-center">
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            &copy; 2025 JVS Marketing. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="text-sm text-gray-600">
  <p>
    Contact Us: 
    <a href="mailto:jvsuniformmarketing@example.com" className="text-blue-600 hover:underline">
      jvsuniformmarketing@example.com
    </a>
  </p>

  <p className='flex justify-center items-center gap-2'>
    Phone: <IoCallOutline />
    
  </p>
  <a href="tel:+11234567890" className="text-blue-600 hover:underline">
      8970834996
    </a>
    <br/>
    <a href="tel:+11234567890" className="text-blue-600 hover:underline">
      7981199667
    </a>
    <br/> 
    <a href="tel:+11234567890" className="text-blue-600 hover:underline">
     8309329444
    </a>
</div>
      </div>
    </footer>
  )
}
