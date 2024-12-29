import { CiMail } from "react-icons/ci";


import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoCallOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">JVS Marketing</h3>
            <p className="text-sm">
              Your trusted partner in uniform marketing. Delivering quality and
              excellence with every product.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
            
              <li className="flex items-center gap-2">
               
                <div>
                <div className='flex items-center gap-2'>
  <IoCallOutline className='text-white' />
  <a
    href="tel:+918970834996" // Replace this with the correct number
    className="block text-blue-400 hover:underline"
  >
    Chethan
    +91 8970834996
  </a>
</div>
                 <div className='flex items-center gap-2'>
                 <IoCallOutline className='text-white' />
                  <a
                    href="tel:+917981199667"
                    className="block text-blue-400 hover:underline"
                  >
                    Jagadesh
                     7981199667
                  </a>
                 </div>
                 <div className='flex items-center gap-2'>
                 <IoCallOutline className='text-white' />
                  <a
                    href="tel:+918309329444"
                    className="block text-blue-400 hover:underline"
                  >
                    vijay
                    8309329444
                  </a>
                 </div>
                </div>
              </li>
              <li className="flex items-center gap-2">
              <CiMail  className="text-white text-2xl" />
                <a
                  href="mailto:jvsuniformmarketing@example.com"
                  className="text-blue-400 hover:underline"
                >
                 
                  jvsuniformmarketing@example.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500"
              >
                
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; 2025 JVS Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
