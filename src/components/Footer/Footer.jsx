import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="bg-black w-full ">
          <footer className="bg-black mt-10 text-white max-w-6xl mx-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-4  mb-[100px] ">
        <div>
          <h2 className="text-[20px] mb-5">CS — Ticket System</h2>
          <p className="text-[16px] mt-3 text-gray-400">Lorem ipsum is simply dummy text of the printing industry.</p>
        </div>
        <div>
          <h3 className="text-[20px] mb-5">Company</h3>
          <p className="text-[16px] text-gray-400">About Us</p>
          <p className="text-[16px] mt-3 text-gray-400">Our Mission</p>
          <p className="text-[16px] mt-3 text-gray-400">Contact</p>
        </div>
        <div>
          <h3 className="text-[20px] mb-5 ">Services</h3>
          <p className="text-[16px] text-gray-400">Products & Services</p>
          <p className="text-[16px] mt-3 text-gray-400">Customer Stories</p>
        </div>
        <div>
          <h3 className="text-[20px] mb-5">Information</h3>
          <p className="text-[16px] text-gray-400">Privacy Policy</p>
          <p className="text-[16px] mt-3 text-gray-400">Terms & Conditions</p>
        </div>
        <div>
          <h3 className="text-[20px] mb-5">Social Link</h3>
            <div className="flex items-center justify-center">
                <span className="text-2xl mb-3"><i class="fa-brands fa-square-x-twitter"></i></span>
                <p className="text-[16px] justify-center items-center mb-3 ml-1 text-gray-400">@CS — Ticket System</p>
            </div>

            <div className="flex items-center justify-center">
                <span className="text-2xl mb-3"><i class="fa-brands fa-linkedin"></i></span>
                <p className="text-[16px] justify-center items-center mb-3 ml-1 text-gray-400">@CS — Ticket System</p>
            </div>

              <div className="flex items-center justify-center">
                <span className="text-2xl mb-3"><i class="fa-brands fa-facebook"></i></span>
                <p className="text-[16px] justify-center items-center mb-3 ml-1 text-gray-400">@CS — Ticket System</p>
            </div>

             <div className="flex items-center justify-center">
                <span className="text-2xl mb-3"><i class="fa-solid fa-square-envelope"></i></span>
                <p className="text-[16px] justify-center items-center mb-3 ml-1 text-gray-400"> — Support@cst.com</p>
            </div>
        </div>
      </div>

      <div className="text-center text-[16px] border-t-1 border-gray-500">
        <p className="mt-8 mb-8">© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
}



