
import React, { useState } from "react";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="navbar bg-white shadow-sm mb-6 w-full ">
            <div className="max-w-6xl mx-auto px-6 w-full flex justify-between items-center h-16">

                <div className="text-lg font-bold">
                    <h3 className="text-green-800 font-bold text-2xl">CS — Ticket System</h3>
                </div>

                <nav className="hidden md:flex gap-4 items-center text-[17px] font-semibold text-green-900">
                    <a className="hover:text-purple-600 transition duration-150" href="#">Home</a>
                    <a className="hover:text-purple-600 transition duration-150" href="#">FAQ</a>
                    <a className="hover:text-purple-600 transition duration-150" href="#">Changelog</a>
                    <a className="hover:text-purple-600 transition duration-150" href="#">Blog</a>
                    <a className="hover:text-purple-600 transition duration-150" href="#">Download</a>

                    <button className="px-4 py-2 rounded-lg 
                            bg-gradient-to-r from-indigo-600 to-purple-600 
                            text-white text-[17px] font-semibold 
                            hover:from-indigo-700 hover:to-purple-700 transition duration-300">
                        + New Ticket
                    </button>
                </nav>


                <button
                    className="md:hidden text-gray-700 p-2 font-bold"
                    onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'X' : 'MENU'}
                </button>
            </div>

            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200`}>
                <nav className="flex flex-col p-4 space-y-2 text-base text-gray-700 font-medium">
                    <a className="hover:bg-gray-100 p-2 rounded" href="#">Home</a>
                    <a className="hover:bg-gray-100 p-2 rounded" href="#">FAQ</a>
                    <a className="hover:bg-gray-100 p-2 rounded" href="#">Changelog</a>
                    <a className="hover:bg-gray-100 p-2 rounded" href="#">Blog</a>
                    <a className="hover:bg-gray-100 p-2 rounded" href="#">Download</a>

                    <button className="w-full mt-4 px-4 py-2 rounded-lg 
                            bg-gradient-to-r from-indigo-600 to-purple-600 
                            text-white text-[17px] font-semibold 
                            hover:from-indigo-700 hover:to-purple-700 transition duration-300">+ New Ticket</button>
                </nav>
            </div>
        </header>
    );
}


