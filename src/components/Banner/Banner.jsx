import React, { useContext } from "react";
import { TicketContext } from "../../context/TicketContext";
import inProgressBg from '../../assets/vector1.png';

export default function Banner() {
  const { inProgressCount,  resolvedCount } =useContext(TicketContext);

  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      <div className="rounded-lg h-[150px] bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md">
        <div className="flex justify-between ">
        <img className="h-full w-[180px]" src="/src/assets/vector1.png " alt="" />
        <img className="h-full w-[180px] -scale-x-75" src="/src/assets/vector1.png" alt="" />
        </div>
        <h3 className=" text-2xl items-center justify-center mt-[-100px] bg-cover text-center">In-Progress</h3>
        <p className="text-4xl font-bold text-center">{inProgressCount}</p>
      </div>
      <div className="rounded-lg h-[150px] bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-md">
        <div className="flex justify-between">
        <img className="h-full w-[180px]" src="/src/assets/vector1.png" alt="" />
        <img className="h-full w-[180px] -scale-x-75" src="/src/assets/vector1.png" alt="" />
        </div>
        <h3 className="text-2xl items-center justify-items-center mt-[-100px] bg-cover text-center">Resolved</h3>
        <p className="text-4xl font-bold text-center">{resolvedCount}</p>
      </div>
    </section>
  );
}
