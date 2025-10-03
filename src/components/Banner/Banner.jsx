import React, { useContext } from "react";
import { TicketContext } from "../../context/TicketContext";
import inProgressBg from '../../assets/vector1.png';

export default function Banner() {
  // const { tasks, resolved } = useContext(TicketContext);

  // const inProgressCount = tasks.length || 0;
  // const resolvedCount = resolved.length || 0;

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


// src/components/Banner/Banner.jsx

// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";

// // ✅ ফিক্স ১: vector2.png কেও import করা হলো
// import inProgressBg from '../../assets/vector1.png'; 
// import resolvedBg from '../../assets/vector2.png'; 


// export default function Banner() {
//   const { inProgressCount,  resolvedCount } =useContext(TicketContext);

//   return (
//     <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      
//       {/* 1. In-Progress Card: ডাইনামিক ব্যাকগ্রাউন্ড ইমেজ যোগ করা হয়েছে */}
//       <div 
//           className="rounded-lg p-6 text-white shadow-xl bg-cover bg-center"
//           // ✅ ফিক্স ২: style prop ব্যবহার করে background-image সেট করা হয়েছে
//           style={{ backgroundImage: `url(${inProgressBg})` }}
//       >
//         <h3 className="text-sm">In-Progress</h3>
//         <p className="text-4xl font-bold">{inProgressCount}</p>
//       </div>
      
//       {/* 2. Resolved Card: ডাইনামিক ব্যাকগ্রাউন্ড ইমেজ যোগ করা হয়েছে */}
//       <div 
//           className="rounded-lg p-6 text-white shadow-xl bg-cover bg-center"
//           // ✅ ফিক্স ২: style prop ব্যবহার করে background-image সেট করা হয়েছে
//           style={{ backgroundImage: `url(${resolvedBg})` }}
//       >
//         <h3 className="text-sm">Resolved</h3>
//         <p className="text-4xl font-bold">{resolvedCount}</p>
//       </div>
      
//     </section>
//   );
// }



// src/components/Banner/Banner.jsx

// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";

// // ✅ ফিক্স ১: ইমেজের পাথ সংশোধন করা হলো।
// // যদি আপনার 'assets' ফোল্ডারটি 'components' ফোল্ডারের এক লেভেল উপরে থাকে, তবে এটি সঠিক পাথ।
// import inProgressBg from '../../assets/vector1.png'; 
// import resolvedBg from '../../assets/vector2.png'; 


// export default function Banner() {
//   const { inProgressCount, resolvedCount } =useContext(TicketContext);

//   return (
//     <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      
//       {/* 1. In-Progress Card: ডাইনামিক ব্যাকগ্রাউন্ড ইমেজ যোগ করা হয়েছে */}
//       <div 
//           className="rounded-lg p-6 text-white shadow-xl bg-cover bg-center relative overflow-hidden"
//           style={{ backgroundImage: `url(${inProgressBg})` }}
//       >
//         <h3 className="text-sm">In-Progress</h3>
//         <p className="text-4xl font-bold">{inProgressCount}</p>
//       </div>
      
//       {/* 2. Resolved Card: ডাইনামিক ব্যাকগ্রাউন্ড ইমেজ যোগ করা হয়েছে */}
//       <div 
//           className="rounded-lg p-6 text-white shadow-xl bg-cover bg-center relative overflow-hidden"
//           style={{ backgroundImage: `url(${resolvedBg})` }}
//       >
//         <h3 className="text-sm">Resolved</h3>
//         <p className="text-4xl font-bold">{resolvedCount}</p>
//       </div>
      
//     </section>
//   );
// }



// src/components/Banner/Banner.jsx

// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";

// // ইমেজের পাথ নিশ্চিত করুন:
// import inProgressBg from '../../assets/vector1.png'; 
// import resolvedBg from '../../assets/vector2.png'; 


// export default function Banner() {
//   const { inProgressCount, resolvedCount } =useContext(TicketContext);

//   return (
//     <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      
//       {/* 1. In-Progress Card */}
//       <div 
//           className="rounded-lg p-6 text-white shadow-xl bg-cover bg-center relative overflow-hidden" 
//           style={{ backgroundImage: `url(${inProgressBg})` }}
//       >
//           {/* ✅ ওভারলে: ইমেজের উপর একটি হালকা কালো স্তর (bg-black/20) */}
//           <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
          
//           {/* কন্টেন্ট: ওভারলে এর উপরে আনার জন্য z-10 */}
//           <h3 className="text-sm relative z-10">In-Progress</h3>
//           <p className="text-4xl font-bold relative z-10">{inProgressCount}</p>
//       </div>
      
//       {/* 2. Resolved Card */}
//       <div 
//           className="rounded-lg p-6 text-white shadow-xl bg-cover bg-center relative overflow-hidden"
//           style={{ backgroundImage: `url(${resolvedBg})` }}
//       >
//           {/* ✅ ওভারলে: ইমেজের উপর একটি হালকা কালো স্তর (bg-black/20) */}
//           <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
          
//           {/* কন্টেন্ট: ওভারলে এর উপরে আনার জন্য z-10 */}
//           <h3 className="text-sm relative z-10">Resolved</h3>
//           <p className="text-4xl font-bold relative z-10">{resolvedCount}</p>
//       </div>
      
//     </section>
//   );
// }









// src/components/Banner/Banner.jsx

// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";

// // ✅ ইমেজ import স্টেটমেন্ট: আপনার ফাইল স্ট্রাকচার অনুযায়ী পাথ চেক করুন
// import inProgressBg from '../../assets/vector1.png'; 
// import resolvedBg from '../../assets/vector2.png'; 


// export default function Banner() {
//   const { inProgressCount, resolvedCount } =useContext(TicketContext);

//   return (
//     <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      
//       {/* 1. In-Progress Card: ইমেজ এবং ওভারলে */}
//       <div 
//           // পজিশনিং এবং ব্যাকগ্রাউন্ড ক্লাস
//           className="rounded-lg p-6 text-white shadow-xl bg-cover bg-center relative overflow-hidden" 
//           // ডাইনামিক ইমেজ সেট করা হয়েছে
//           style={{ backgroundImage: `url(${inProgressBg})` }}
//       >
//           {/* ✅ ওভারলে: ইমেজের উপর হালকা কালো স্তর (bg-black/20) */}
//           <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
          
//           {/* কন্টেন্ট: ওভারলে এর উপরে আনার জন্য z-10 */}
//           <h3 className="text-sm relative z-10">In-Progress</h3>
//           <p className="text-4xl font-bold relative z-10">{inProgressCount}</p>
//       </div>
      
//       {/* 2. Resolved Card: ইমেজ এবং ওভারলে */}
//       <div 
//           // পজিশনিং এবং ব্যাকগ্রাউন্ড ক্লাস
//           className="rounded-lg p-6 text-white shadow-xl bg-cover bg-center relative overflow-hidden"
//           // ডাইনামিক ইমেজ সেট করা হয়েছে
//           style={{ backgroundImage: `url(${resolvedBg})` }}
//       >
//           {/* ✅ ওভারলে: ইমেজের উপর হালকা কালো স্তর (bg-black/20) */}
//           <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
          
//           {/* কন্টেন্ট: ওভারলে এর উপরে আনার জন্য z-10 */}
//           <h3 className="text-sm relative z-10">Resolved</h3>
//           <p className="text-4xl font-bold relative z-10">{resolvedCount}</p>
//       </div>
      
//     </section>
//   );
// }






// src/components/Banner/Banner.jsx

// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";

// // ইমেজ import স্টেটমেন্ট:
// import inProgressBg from '../../assets/vector1.png'; 
// import resolvedBg from '../../assets/vector2.png'; // Resolved এর জন্য vector2.png ও import করা হলো


// export default function Banner() {
//   const { inProgressCount,  resolvedCount } =useContext(TicketContext);

//   // In-Progress কার্ডের স্টাইল: গ্রেডিয়েন্ট এবং ব্যাকগ্রাউন্ড ইমেজ
//   const inProgressStyle = {
//     // ইমেজটিকে ব্যাকগ্রাউন্ডে সেট করা হলো
//     backgroundImage: `url(${inProgressBg})`,
//     // রিপিট হবে না, পুরোটা কভার করবে এবং কেন্দ্রে থাকবে
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     // আপনার vector1.png ইমেজটি মূলত সাদা লাইন, তাই আমরা opacity কমিয়ে দেব
//     opacity: 0.85 // ইমেজের অস্বচ্ছতা কমানো হলো
//   };
    
//   // Resolved কার্ডের স্টাইল (যদি আপনি এটিও যোগ করতে চান)
//   const resolvedStyle = {
//     // এখানে ইমেজ যোগ করা হয়নি, শুধু গ্রেডিয়েন্ট থাকবে
//     // backgroundImage: `url(${resolvedBg})`, 
//     // backgroundRepeat: 'no-repeat',
//     // backgroundSize: 'cover',
//     // backgroundPosition: 'center',
//   };


//   return (
//     <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      
//       {/* 1. In-Progress Card: টেক্সট কেন্দ্রে আন এবং ইমেজ স্টাইল যোগ */}
//       <div 
//           // `flex`, `justify-center`, `items-center` এবং `flex-col` ব্যবহার করে কন্টেন্ট মাঝখানে আনা হলো
//           className="rounded-lg p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md 
//                      flex flex-col justify-center items-center relative overflow-hidden"
//           style={inProgressStyle} // ✅ স্টাইল যোগ
//       >
//         <h3 className="text-sm">In-Progress</h3>
//         <p className="text-4xl font-bold">{inProgressCount}</p>
//       </div>
      
//       {/* 2. Resolved Card: এটি অপরিবর্তিত রাখা হলো */}
//       <div 
//           className="rounded-lg p-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md"
//           style={resolvedStyle}
//       >
//         <h3 className="text-sm">Resolved</h3>
//         <p className="text-4xl font-bold">{resolvedCount}</p>
//       </div>
      
//     </section>
//   );
// }







// src/components/Banner/Banner.jsx (চূড়ান্ত ফিক্স)

// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";

// // ইমেজ import স্টেটমেন্ট:
// import inProgressBg from '../../assets/vector1.png'; 
// import resolvedBg from '../../assets/vector2.png'; 


// export default function Banner() {
//   const { inProgressCount,  resolvedCount } =useContext(TicketContext);

//   // In-Progress কার্ডের স্টাইল: গ্রেডিয়েন্ট এবং ব্যাকগ্রাউন্ড ইমেজ
//   const inProgressStyle = {
//     backgroundImage: `url(${inProgressBg})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     // আপনার ইমেজটির Opacity স্ক্রিনশট 35 এ ঠিক দেখা যাচ্ছে।
//   };
    
//   // Resolved কার্ডের স্টাইল (ঐচ্ছিক - এখানে শুধু গ্রেডিয়েন্ট আছে)
//   const resolvedStyle = {
//     backgroundImage: `url(${resolvedBg})`, // Resolved কার্ডে vector2.png যদি চান
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   };


//   return (
//     <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      
//       {/* 1. In-Progress Card: টেক্সট কেন্দ্রে আনা হয়েছে */}
//       <div 
//           // ✅ ফিক্স: flex, flex-col, justify-center, items-center যোগ করা হলো
//           className="rounded-lg p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md 
//                      flex flex-col justify-center items-center h-40" 
//           style={inProgressStyle}
//       >
//         <h3 className="text-sm">In-Progress</h3>
//         <p className="text-4xl font-bold">{inProgressCount}</p>
//       </div>
      
//       {/* 2. Resolved Card: এটিও মাঝখানে আনা হলো (ঐচ্ছিক) */}
//       <div 
//           // ✅ ফিক্স: flex, flex-col, justify-center, items-center যোগ করা হলো
//           className="rounded-lg p-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md
//                      flex flex-col justify-center items-center h-40"
//           style={resolvedStyle}
//       >
//         <h3 className="text-sm">Resolved</h3>
//         <p className="text-4xl font-bold">{resolvedCount}</p>
//       </div>
      
//     </section>
//   );
// }






// src/components/Banner/Banner.jsx

// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";

// // ইমেজ import স্টেটমেন্ট:
// import inProgressBg from '../../assets/vector1.png'; 
// import resolvedBg from '../../assets/vector2.png'; 


// export default function Banner() {
//   const { inProgressCount,  resolvedCount } =useContext(TicketContext);

//   // 1. In-Progress কার্ডের স্টাইল: গ্রেডিয়েন্ট এবং ইমেজ একসাথে
//   const inProgressStyle = {
//     // CSS-এ একাধিক ব্যাকগ্রাউন্ড: ইমেজটি প্রথমে, তারপর লিনিয়ার গ্রেডিয়েন্ট (ট্রান্সপারেন্ট অংশ দিয়ে)
//     // Tailwind ক্লাসে gradient আছে, তাই শুধু ইমেজ স্টাইল যুক্ত করবো
//     // যেহেতু আপনি ক্লাসে bg-gradient দিয়েছেন, তাই শুধু ইমেজ প্রপার্টি ব্যবহার করাই শ্রেয়
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
    
//     // ✅ ফিক্স: backgroundImage প্রপার্টিতে গ্রেডিয়েন্ট এবং ইমেজ দুটোই ব্যবহার করা হলো
//     // (যদি Tailwind আপনার ক্লাস গ্রেডিয়েন্টকে ওভাররাইড করে, তবে এটিই সবচেয়ে নিরাপদ)
//     // আমরা ইমেজটিকে Opacity কমানোর জন্য একটি সেমি-ট্রান্সপারেন্ট ব্ল্যাক ওভারলে যুক্ত করতে পারি, 
//     // কিন্তু আপাতত আপনার ছবির মতো দেখতে হলে শুধু গ্রেডিয়েন্ট এবং ইমেজ একসঙ্গে ব্যবহার করাই শ্রেয়
    
//     backgroundImage: `url(${inProgressBg}), linear-gradient(to right, #4F46E5, #8B5CF6)`, 
//     // #4F46E5 (indigo-600) থেকে #8B5CF6 (purple-600) এর হেক্স কোড ব্যবহার করা হলো।
//   };
    
//   // 2. Resolved কার্ডের স্টাইল: গ্রেডিয়েন্ট এবং ইমেজ একসাথে
//   const resolvedStyle = {
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
    
//     // ✅ ফিক্স: Resolved কার্ডের জন্য গ্রেডিয়েন্ট এবং ইমেজ একসাথে
//     backgroundImage: `url(${resolvedBg}), linear-gradient(to right, #10B981, #059669)`,
//     // #10B981 (green-600) থেকে #059669 (emerald-600) এর হেক্স কোড ব্যবহার করা হলো।
//   };


//   return (
//     <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      
//       {/* 1. In-Progress Card: গ্রেডিয়েন্ট ক্লাস সরানো হলো এবং স্টাইল যোগ করা হলো */}
//       <div 
//           // শুধু পজিশনিং ক্লাস এবং টেক্সট কালার রাখা হয়েছে
//           className="rounded-lg p-6 text-white shadow-md flex flex-col justify-center items-center h-40" 
//           style={inProgressStyle} // ✅ সম্মিলিত স্টাইল যোগ
//       >
//         <h3 className="text-sm">In-Progress</h3>
//         <p className="text-4xl font-bold">{inProgressCount}</p>
//       </div>
      
//       {/* 2. Resolved Card: গ্রেডিয়েন্ট ক্লাস সরানো হলো এবং স্টাইল যোগ করা হলো */}
//       <div 
//           className="rounded-lg p-6 text-white shadow-md flex flex-col justify-center items-center h-40"
//           style={resolvedStyle} // ✅ সম্মিলিত স্টাইল যোগ
//       >
//         <h3 className="text-sm">Resolved</h3>
//         <p className="text-4xl font-bold">{resolvedCount}</p>
//       </div>
      
//     </section>
//   );
// }






// src/components/Banner/Banner.jsx

// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";

// // ইমেজ import স্টেটমেন্ট:
// import inProgressBg from '../../assets/vector1.png'; 
// import resolvedBg from '../../assets/vector2.png'; 


// export default function Banner() {
//   const { inProgressCount,  resolvedCount } =useContext(TicketContext);

//   // 1. In-Progress কার্ডের স্টাইল: ইমেজ এবং গ্রেডিয়েন্ট একসাথে
//   const inProgressStyle = {
//     // CSS-এ একাধিক ব্যাকগ্রাউন্ড: ইমেজটি প্রথমে, তারপর লিনিয়ার গ্রেডিয়েন্ট
//     // (ইমেজটি সেমি-ট্রান্সপারেন্ট হলে গ্রেডিয়েন্টটি দেখা যাবে)
//     backgroundImage: `url(${inProgressBg}), linear-gradient(to right, #4F46E5, #8B5CF6)`, 
    
//     // ইমেজ স্টাইল
//     backgroundRepeat: 'no-repeat',
 
//     backgroundPosition: 'center',
    
//     // গ্রেডিয়েন্টের রঙের হেক্স কোড: #4F46E5 (indigo-600) এবং #8B5CF6 (purple-600)
//   };
    
//   // 2. Resolved কার্ডের স্টাইল: ইমেজ এবং গ্রেডিয়েন্ট একসাথে
//   const resolvedStyle = {
//     // ইমেজ এবং গ্রেডিয়েন্ট
//     backgroundImage: `url(${resolvedBg}), linear-gradient(to right, #10B981, #059669)`,
    
//     // ইমেজ স্টাইল
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
    
//     // গ্রেডিয়েন্টের রঙের হেক্স কোড: #10B981 (green-600) এবং #059669 (emerald-600)
//   };


//   return (
//     <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      
//       {/* 1. In-Progress Card: কন্টেন্ট কেন্দ্রে আনা হলো */}
//       <div 
//           // পজিশনিং এবং টেক্সট সেন্টারিং
//           className="rounded-lg p-6 text-white shadow-md 
//                      flex flex-col justify-center items-center h-40" 
//           style={inProgressStyle} // ✅ সম্মিলিত স্টাইল যোগ
//       >
//         <h3 className="text-sm">In-Progress</h3>
//         <p className="text-4xl font-bold">{inProgressCount}</p>
//       </div>
      
//       {/* 2. Resolved Card: কন্টেন্ট কেন্দ্রে আনা হলো */}
//       <div 
//           className="rounded-lg p-6 text-white shadow-md 
//                      flex flex-col justify-center items-center h-40"
//           style={resolvedStyle} // ✅ সম্মিলিত স্টাইল যোগ
//       >
//         <h3 className="text-sm">Resolved</h3>
//         <p className="text-4xl font-bold">{resolvedCount}</p>
//       </div>
      
//     </section>
//   );
// }








// src/components/Banner/Banner.jsx

// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";

// // ইমেজ import স্টেটমেন্ট:
// import inProgressBg from '../../assets/vector1.png'; 
// import resolvedBg from '../../assets/vector2.png'; 


// export default function Banner() {
//   const { inProgressCount,  resolvedCount } =useContext(TicketContext);

//   // 1. In-Progress কার্ডের সম্মিলিত স্টাইল (ইমেজ + গ্রেডিয়েন্ট)
//   const inProgressStyle = {
//     // ✅ ফিক্স ১: CSS-এর মাল্টিপল ব্যাকগ্রাউন্ড: ইমেজ (উপরে) এবং গ্রেডিয়েন্ট (নিচে)
//     backgroundImage: `url(${inProgressBg}), linear-gradient(to right, #4F46E5, #8B5CF6)`, 
    
//     // ইমেজ স্টাইল
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   };
    
//   // 2. Resolved কার্ডের সম্মিলিত স্টাইল (ইমেজ + গ্রেডিয়েন্ট)
//   const resolvedStyle = {
//     backgroundImage: `url(${resolvedBg}), linear-gradient(to right, #10B981, #059669)`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   };


//   return (
//     <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      
//       {/* 1. In-Progress Card */}
//       <div 
//           // ✅ ফিক্স ২: গ্রেডিয়েন্ট ক্লাস সরানো হলো। h-40, flex, justify-center, items-center যোগ করা হলো।
//           className="rounded-lg p-6 text-white shadow-md h-40 
//                      flex flex-col justify-center items-center" 
//           style={inProgressStyle}
//       >
//         <h3 className="text-sm">In-Progress</h3>
//         <p className="text-4xl font-bold">{inProgressCount}</p>
//       </div>
      
//       {/* 2. Resolved Card */}
//       <div 
//           // ✅ ফিক্স ২: গ্রেডিয়েন্ট ক্লাস সরানো হলো। h-40, flex, justify-center, items-center যোগ করা হলো।
//           className="rounded-lg p-6 text-white shadow-md h-40
//                      flex flex-col justify-center items-center"
//           style={resolvedStyle}
//       >
//         <h3 className="text-sm">Resolved</h3>
//         <p className="text-4xl font-bold">{resolvedCount}</p>
//       </div>
      
//     </section>
//   );
// }