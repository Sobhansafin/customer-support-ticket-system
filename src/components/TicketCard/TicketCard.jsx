

// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";
// import { toast } from "react-toastify";

// export default function TicketCard({ ticket }) {
// const { addTask, tasks } = useContext(TicketContext);
// const isInTask = tasks.some(ticket.id === ticket.id);

// const handleAdd = () => {
//    if (isInTask) {
//        toast.warn(`${ticket.title} is already in In-Progress.`);
//        return;
//     }

// addTask(ticket);
//  toast.info(`${ticket.title} added to In-Progress!`);
// };

// const getStatusClass = (status) => {
// switch (status.toLowerCase()) {
// case 'open':
// return 'bg-green-100 text-green-700 border-green-300';
// case 'in-progress':
//  return 'bg-yellow-100 text-yellow-700 border-yellow-300';
// default:
//  return 'bg-gray-100 text-gray-700 border-gray-300';
//  }
// };

//  const getPriorityClass = (priority) => {
//  switch (priority.toLowerCase()) {
//  case 'high':
//  return 'text-red-600 font-semibold';
// case 'medium':
//  return 'text-yellow-600 font-semibold';
// case 'low':
//  return 'text-green-600 font-semibold';
//  default:
//  return 'text-gray-600';
//  }
//  };

//  // ডেট ফরম্যাট (উদাহরণস্বরূপ 1/15/2024 কে 15/01/24 বা শুধু 15/01 হিসেবে দেখানোর জন্য)
// const formatDate = (dateString) => {
//  if (!dateString) return '';
//  try {
//  const date = new Date(dateString);
//  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'numeric' });
//  } catch (e) {
// return dateString; // Invalid date
//  }
// };


//  return (
//  <article className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200">
//  {/* হেডার: টাইটেল ও স্ট্যাটাস ব্যাজ */}
// <div className="flex justify-between items-start mb-2">
//  <h3 className="font-bold text-base text-gray-800 mr-4 leading-snug">
//  {ticket.title}
// </h3>
//  {/* স্ট্যাটাস ব্যাজ: গোল কোণা এবং বর্ডার */}
//  <span className={`text-xs px-2 py-0.5 rounded-full border ${getStatusClass(ticket.status)} whitespace-nowrap`}>
//  {ticket.status}
//  </span>
//  </div>

//  {/* ডেসক্রিপশন */}
//  <p className="text-sm text-gray-600 mt-1 mb-4 line-clamp-2">
// {ticket.description}
//  </p>

//  {/* ফুটার: আইডি, প্রায়োরিটি, কাস্টমার, ডেট */}
//  <div className="flex justify-between items-end border-t border-gray-100 pt-3 mt-3">

//  {/* বামের অংশ: আইডি এবং প্রায়োরিটি */}
//  <div className="flex flex-col gap-1 text-xs">
//  <div className="text-gray-500">
//  #{ticket.id} • <span className="font-medium text-gray-700">{ticket.customer}</span>
// </div>
//  <div className={`uppercase ${getPriorityClass(ticket.priority)}`}>
//  {ticket.priority} PRIORITY
//  </div>
//  </div>

//  {/* ডানের অংশ: বাটন এবং ডেট */}
//  <div className="flex items-center gap-3">
//  {/* ডেট */}
// <div className="text-xs text-gray-500 flex items-center gap-1">
//  {/* কালেন্ডার আইকন যোগ করুন */}
//  {/* <CalendarIcon className="w-4 h-4"/> */}
//              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5" />
//              </svg>
//  {formatDate(ticket.date)}
//  </div>
// </div>
//  </div>
//  </article>
//  );
// }





// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";
// import { toast } from "react-toastify";
// // ... (CalendarIcon SVG remains the same)

// export default function TicketCard({ ticket }) {
//   const { addTask, tasks } = useContext(TicketContext);
  
//   // টিকিটটি ইন-প্রগ্রেসে আছে কিনা চেক করুন
//   const isInTask = tasks.some(t => t.id === ticket.id);

//   // ফাংশন: Add to Task
//   const handleAdd = () => {
//     if (isInTask) {
//        toast.warn(`${ticket.title} is already in In-Progress.`);
//        return;
//     }
//     addTask(ticket);
//     toast.info(`${ticket.title} added to In-Progress!`);
//   };

//   // স্ট্যাটাস অনুযায়ী রং ও টেক্সট সেট করার ফাংশন
//   const getStatusClass = (status) => {
//     switch (status.toLowerCase()) {
//       case 'open':
//         // 🟢 সবুজ গোল সিগনাল: DaisyUI এর badge-success ব্যবহার করা হয়েছে
//         return 'badge-success'; 
//       case 'in-progress':
//         return 'badge-warning'; 
//       default:
//         return 'badge-neutral';
//     }
//   };
  
//   // ... (getPriorityClass and formatDate remain the same) ...

//   return (
//     // পুরো কার্ডে ক্লিকযোগ্যতা যোগ করা হলো
//     <article 
//       className={`bg-white border p-4 rounded-lg shadow-sm transition duration-200 
//                  ${isInTask ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 hover:shadow-md cursor-pointer'}`}
//       onClick={handleAdd} // ✅ কার্ডে ক্লিক করলে Add to Task ট্রিগার হবে
//     >
      
//       {/* হেডার: টাইটেল ও স্ট্যাটাস ব্যাজ */}
//       <div className="flex justify-between items-start mb-2">
//         <h3 className="font-bold text-base text-gray-800 mr-4 leading-snug">
//           {ticket.title}
//         </h3>
//         {/* স্ট্যাটাস ব্যাজ: badge এবং badge-outline এর পরিবর্তে badge-sm ও badge-success ব্যবহার করা হয়েছে */}
//         <span className={`badge badge-sm ${getStatusClass(ticket.status)} text-white whitespace-nowrap`}> 
//           {ticket.status}
//         </span>
//       </div>

//       {/* ডেসক্রিপশন */}
//       <p className="text-sm text-gray-600 mt-1 mb-4 line-clamp-2">
//         {ticket.description}
//       </p>

//       {/* ফুটার: আইডি, প্রায়োরিটি, কাস্টমার, ডেট */}
//       <div className="flex justify-between items-end border-t border-gray-100 pt-3 mt-3">
//         {/* বামের অংশ: আইডি এবং প্রায়োরিটি */}
//         <div className="flex flex-col gap-1 text-xs">
//           <div className="text-gray-500">
//             #{ticket.id} • <span className="font-medium text-gray-700">{ticket.customer}</span>
//           </div>
//           <div className={`uppercase ${getPriorityClass(ticket.priority)}`}>
//             {ticket.priority} PRIORITY
//           </div>
//         </div>

//         {/* ডানের অংশ: ডেট এবং Add Button */}
//         <div className="flex items-center gap-3">
//           {/* ডেট আইকন এবং টেক্সট */}
//           {/* ... (Date SVG and text remains the same) ... */}
          
//           {/* ✅ Add to Task বাটন - যদি কার্ডে ক্লিক করে কাজ করাতে না চান তবে বাটনটি এখানে দিন */}
//           {!isInTask && (
//             <button className="btn btn-xs btn-primary ml-2" onClick={(e) => { e.stopPropagation(); handleAdd(); }}>
//               Add to Task
//             </button>
//           )}
//           {isInTask && (
//             <span className="text-xs text-yellow-600 font-semibold ml-2">In Task</span>
//           )}
//         </div>
//       </div>
//     </article>
//   );
// }







// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";
// import { toast } from "react-toastify";
// // ... (CalendarIcon SVG remains the same)

// export default function TicketCard({ ticket }) {
//   const { addTask, tasks } = useContext(TicketContext);
  
//   // টিকিটটি ইন-প্রগ্রেসে আছে কিনা চেক করুন
//   const isInTask = tasks.some(t => t.id === ticket.id);

//   // ফাংশন: Add to Task
//   const handleAdd = () => {
//     if (isInTask) {
//        toast.warn(`${ticket.title} is already in In-Progress.`);
//        return;
//     }
//     addTask(ticket);
//     toast.info(`${ticket.title} added to In-Progress!`);
//   };

//   // স্ট্যাটাস অনুযায়ী রং ও টেক্সট সেট করার ফাংশন
//   const getStatusClass = (status) => {
//     switch (status.toLowerCase()) {
//       case 'open':
//         // 🟢 সবুজ গোল সিগনাল: DaisyUI এর badge-success ব্যবহার করা হয়েছে
//         return 'badge-success'; 
//       case 'in-progress':
//         return 'badge-warning'; 
//       default:
//         return 'badge-neutral';
//     }
//   };
  
//   // ... (getPriorityClass and formatDate remain the same) ...

//   return (
//     // পুরো কার্ডে ক্লিকযোগ্যতা যোগ করা হলো
//     <article 
//       className={`bg-white border p-4 rounded-lg shadow-sm transition duration-200 
//                  ${isInTask ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 hover:shadow-md cursor-pointer'}`}
//       onClick={handleAdd} // ✅ কার্ডে ক্লিক করলে Add to Task ট্রিগার হবে
//     >
      
//       {/* হেডার: টাইটেল ও স্ট্যাটাস ব্যাজ */}
//       <div className="flex justify-between items-start mb-2">
//         <h3 className="font-bold text-base text-gray-800 mr-4 leading-snug">
//           {ticket.title}
//         </h3>
//         {/* স্ট্যাটাস ব্যাজ: badge এবং badge-outline এর পরিবর্তে badge-sm ও badge-success ব্যবহার করা হয়েছে */}
//         <span className={`badge badge-sm ${getStatusClass(ticket.status)} text-white whitespace-nowrap`}> 
//           {ticket.status}
//         </span>
//       </div>

//       {/* ডেসক্রিপশন */}
//       <p className="text-sm text-gray-600 mt-1 mb-4 line-clamp-2">
//         {ticket.description}
//       </p>

//       {/* ফুটার: আইডি, প্রায়োরিটি, কাস্টমার, ডেট */}
//       <div className="flex justify-between items-end border-t border-gray-100 pt-3 mt-3">
//         {/* বামের অংশ: আইডি এবং প্রায়োরিটি */}
//         <div className="flex flex-col gap-1 text-xs">
//           <div className="text-gray-500">
//             #{ticket.id} • <span className="font-medium text-gray-700">{ticket.customer}</span>
//           </div>
//           <div className={`uppercase ${getPriorityClass(ticket.priority)}`}>
//             {ticket.priority} PRIORITY
//           </div>
//         </div>

//         {/* ডানের অংশ: ডেট এবং Add Button */}
//         <div className="flex items-center gap-3">

//         <div className="text-xs text-gray-500 flex items-center gap-1">
//              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5" />
//              </svg>
//               {formatDate(ticket.createdAt)} {/* ✅ পরিবর্তনটি এখানে করা হয়েছে */}
//               </div>

//           {/* ডেট আইকন এবং টেক্সট */}
//           {/* ... (Date SVG and text remains the same) ... */}
          
//           {/* ✅ Add to Task বাটন - যদি কার্ডে ক্লিক করে কাজ করাতে না চান তবে বাটনটি এখানে দিন */}
//           {!isInTask && (
//             <button className="btn btn-xs btn-primary ml-2" onClick={(e) => { e.stopPropagation(); handleAdd(); }}>
//               Add to Task
//             </button>
//           )}
//           {isInTask && (
//             <span className="text-xs text-yellow-600 font-semibold ml-2">In Task</span>
//           )}
//         </div>
//       </div>
//     </article>
//   );
// }





// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";
// import { toast } from "react-toastify";
// // ... (CalendarIcon SVG remains the same)

// export default function TicketCard({ ticket }) {
//   // যদি টিকিট প্রপস হিসেবে না আসে, তবে কিছুই রেন্ডার না করে ফিরে যাও
//   if (!ticket) return null; 
  
//   const { addTask, tasks } = useContext(TicketContext);
  
//   // ✅ বাগ ফিক্স: ভেরিয়েবলের নাম পরিবর্তন করে 't' ব্যবহার করা হয়েছে
//   const isInTask = tasks.some(t => t.id === ticket.id); 

//   // ফাংশন: Add to Task
//   const handleAdd = () => {
//     if (isInTask) {
//        toast.warn(`${ticket.title} is already in In-Progress.`);
//        return;
//     }
//     addTask(ticket);
//     toast.info(`${ticket.title} added to In-Progress!`);
//   };

//   // স্ট্যাটাস অনুযায়ী রং ও টেক্সট সেট করার ফাংশন
//   const getStatusClass = (status) => {
//     switch ((status || '').toLowerCase()) {
//       case 'open':
//         return 'bg-green-500 text-white'; 
//       case 'in-progress':
//         return 'bg-yellow-500 text-white'; 
//       case 'resolved':
//         return 'bg-gray-400 text-white'; 
//       default:
//         return 'bg-gray-200 text-gray-800';
//     }
//   };
  
//   /**
//    * 🚨 প্রথম এরর ফিক্স: এই ফাংশনটি অনুপস্থিত ছিল
//    */
//   const getPriorityClass = (priority) => {
//     switch ((priority || '').toLowerCase()) {
//       case 'high':
//         return 'text-red-600 font-semibold';
//       case 'medium':
//         return 'text-yellow-600 font-semibold';
//       case 'low':
//         return 'text-green-600 font-semibold';
//       default:
//         return 'text-gray-600';
//     }
//   };

//   /**
//    * 🚨 দ্বিতীয় এরর ফিক্স: formatDate ফাংশনটিও নিশ্চিত করুন
//    */
//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-US', { day: 'numeric', month: 'numeric' });
//     } catch (e) {
//       return dateString;
//     }
//   };

//   return (
//     // ... (রেন্ডারিং অংশটি আপনার দেওয়া কোডের মতো) ...
//     <article 
//       className={`bg-white border p-4 rounded-lg shadow-sm transition duration-200 
//                  ${isInTask ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 hover:shadow-md cursor-pointer'}`}
//       onClick={handleAdd}
//     >
      
//       {/* হেডার: টাইটেল ও স্ট্যাটাস ব্যাজ */}
//       <div className="flex justify-between items-start mb-2">
//         <h3 className="font-bold text-base text-gray-800 mr-4 leading-snug">
//           {ticket.title}
//         </h3>
//         <span className={`text-xs px-2 py-1 rounded ${getStatusClass(ticket.status)} whitespace-nowrap`}> 
//           {ticket.status}
//         </span>
//       </div>

//       {/* ডেসক্রিপশন */}
//       <p className="text-sm text-gray-600 mt-1 mb-4 line-clamp-2">
//         {ticket.description}
//       </p>

//       {/* ফুটার: আইডি, প্রায়োরিটি, কাস্টমার, ডেট */}
//       <div className="flex justify-between items-end border-t border-gray-100 pt-3 mt-3">
//         {/* বামের অংশ: আইডি এবং প্রায়োরিটি */}
//         <div className="flex flex-col gap-1 text-xs">
//           <div className="text-gray-500">
//             #{ticket.id} • <span className="font-medium text-gray-700">{ticket.customer}</span>
//           </div>
//           <div className={`uppercase ${getPriorityClass(ticket.priority)}`}>
//             {ticket.priority} PRIORITY
//           </div>
//         </div>

//         {/* ডানের অংশ: ডেট এবং বাটন */}
//         <div className="flex items-center gap-3">

//         <div className="text-xs text-gray-500 flex items-center gap-1">
//              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
//                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5" />
//              </svg>
//  {formatDate(ticket.createdAt)}
//  </div>

// {/* ✅ Add to Task বাটন - যদি কার্ডে ক্লিক করে কাজ করাতে না চান তবে বাটনটি এখানে দিন */}
//  {!isInTask && (
//  <button className="btn btn-xs btn-primary ml-2" onClick={(e) => { e.stopPropagation(); handleAdd(); }}>
//  Add to Task
//  </button>
// )}
//  {isInTask && (
//  <span className="text-xs text-yellow-600 font-semibold ml-2">In Task</span>
//  )}
// </div>
//  </div>
// </article>
//   );
// }






// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";
// import { toast } from "react-toastify";

// export default function TicketCard({ ticket }) {
//   if (!ticket) return null; 
  
//   const { addTask, tasks } = useContext(TicketContext);
  
//   // ✅ বাগ ফিক্সড: ভেরিয়েবল সংঘাত এড়ানো হয়েছে
//   const isInTask = tasks.some(t => t.id === ticket.id); 

//   const handleAdd = () => {
//     if (isInTask) {
//        toast.warn(`${ticket.title} is already in Task Status.`);
//        return;
//     }
//     // টিকিটটি In-Progress এ যোগ করা হবে
//     addTask(ticket);
//     toast.info(`${ticket.title} added to Task Status!`);
//   };

//   // স্ট্যাটাস অনুযায়ী রং সেট করার ফাংশন (ছবি অনুযায়ী)
//   const getStatusClass = (status) => {
//     switch ((status || '').toLowerCase()) {
//       case 'open':
//         // 🟢 সবুজ ব্যাকগ্রাউন্ড
//         return 'bg-green-100 text-green-700 border-green-300'; 
//       case 'in-progress':
//         // 🟡 হলুদ ব্যাকগ্রাউন্ড
//         return 'bg-yellow-100 text-yellow-700 border-yellow-300'; 
//       default:
//         return 'bg-gray-100 text-gray-700 border-gray-300';
//     }
//   };

//   // প্রায়োরিটি অনুযায়ী রং সেট করার ফাংশন
//   const getPriorityClass = (priority) => {
//     switch ((priority || '').toLowerCase()) {
//       case 'high':
//         // লাল টেক্সট
//         return 'text-red-600 font-semibold';
//       case 'medium':
//         // কমলা/হলুদ টেক্সট
//         return 'text-orange-500 font-semibold';
//       case 'low':
//         // সবুজ টেক্সট
//         return 'text-green-600 font-semibold';
//       default:
//         return 'text-gray-600';
//     }
//   };

//   // ডেট ফরম্যাট করার ফাংশন
//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     try {
//       const date = new Date(dateString);
//       // ছবিতে MM/DD/YYYY ফরম্যাট দেখা যাচ্ছে, কিন্তু এখানে সংক্ষিপ্ত করা হলো
//       return date.toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: '2-digit' });
//     } catch (e) {
//       return dateString;
//     }
//   };

//   return (
//     // কার্ড ডিজাইন: ছবিতে সামান্য নীল বর্ডার ও হালকা ব্যাকগ্রাউন্ড আছে
//     <article 
//       className={`bg-white border p-4 rounded-lg shadow-sm transition duration-200 border-l-4 
//                  ${isInTask ? 'border-l-yellow-400 bg-yellow-50' : 'border-l-blue-400 hover:shadow-md cursor-pointer'}`}
//       onClick={handleAdd} // ✅ কার্ডে ক্লিক করলে টাস্ক অ্যাড হবে (বাটন রিমুভ করার কারণে)
//     >
      
//       {/* হেডার: টাইটেল ও স্ট্যাটাস ব্যাজ */}
//       <div className="flex justify-between items-start mb-2">
//         <h3 className="font-bold text-base text-gray-800 mr-4 leading-snug">
//           {ticket.title}
//         </h3>
//         {/* স্ট্যাটাস ব্যাজ: ছবিতে ছোট, বর্ডারযুক্ত ব্যাজ আছে */}
//         <span className={`text-xs px-2 py-0.5 rounded-full border ${getStatusClass(ticket.status)} whitespace-nowrap`}> 
//           {ticket.status}
//         </span>
//       </div>

//       {/* ডেসক্রিপশন */}
//       <p className="text-sm text-gray-600 mt-1 mb-4 line-clamp-2">
//         {ticket.description}
//       </p>

//       {/* ফুটার: আইডি, প্রায়োরিটি, কাস্টমার, ডেট */}
//       <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-3">
        
//         {/* বামের অংশ: আইডি এবং প্রায়োরিটি */}
//         <div className="flex items-center gap-3 text-xs">
//           <span className="text-gray-500">#{ticket.id}</span>
//           <span className={`uppercase ${getPriorityClass(ticket.priority)}`}>
//             {ticket.priority} PRIORITY
//           </span>
//         </div>

//         {/* ডানের অংশ: কাস্টমার এবং ডেট */}
//         <div className="flex items-center gap-3 text-xs">
//           <span className="text-gray-700">{ticket.customer}</span>
          
//           <div className="text-gray-500 flex items-center gap-1">
//              {/* ক্যালেন্ডার আইকন */}
//              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5" />
//              </svg>
//             {formatDate(ticket.createdAt)}
//            </div>
//         </div>
//       </div>
//     </article>
//   );
// }









// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";
// import { toast } from "react-toastify";

// export default function TicketCard({ ticket }) {
//   // যদি টিকিট প্রপস হিসেবে না আসে, তবে এরর এড়াতে null রিটার্ন
//   if (!ticket) return null; 
  
//   const { addTask, tasks } = useContext(TicketContext);
  
//   // টিকিটটি Task Status-এ আছে কিনা চেক করা
//   const isInTask = tasks.some(t => t.id === ticket.id); 

//   // কার্ডে ক্লিক করলে টাস্ক অ্যাড করার ফাংশন
//   const handleAdd = () => {
//     if (isInTask) {
//        toast.warn(`${ticket.title} is already in Task Status.`);
//        return;
//     }
//     addTask(ticket);
//     toast.info(`${ticket.title} added to Task Status!`);
//   };

//   // স্ট্যাটাস ব্যাজের জন্য সরাসরি Tailwind ক্লাস
//   const getStatusClass = (status) => {
//     switch ((status || '').toLowerCase()) {
//       case 'open':
//         // 🟢 সবুজ স্ট্যাটাস ব্যাজ (ছবি অনুযায়ী)
//         return 'bg-green-100 text-green-700 border-green-300'; 
//       case 'in-progress':
//         // 🟡 হলুদ স্ট্যাটাস ব্যাজ (ছবি অনুযায়ী)
//         return 'bg-yellow-100 text-yellow-700 border-yellow-300'; 
//       default:
//         return 'bg-gray-100 text-gray-700 border-gray-300';
//     }
//   };

//   // কার্ডের বামদিকের বর্ডারের জন্য ক্লাস
//   const getBorderColor = (status) => {
//       switch ((status || '').toLowerCase()) {
//         case 'open':
//             return 'border-l-green-500'; // সবুজ বর্ডার
//         case 'in-progress':
//             return 'border-l-yellow-500'; // হলুদ বর্ডার
//         default:
//             return 'border-l-gray-300';
//       }
//   };

//   // প্রায়োরিটির জন্য রং সেট করার ফাংশন
//   const getPriorityClass = (priority) => {
//     switch ((priority || '').toLowerCase()) {
//       case 'high':
//         return 'text-red-600 font-semibold';
//       case 'medium':
//         return 'text-orange-500 font-semibold';
//       case 'low':
//         return 'text-green-600 font-semibold';
//       default:
//         return 'text-gray-600';
//     }
//   };

//   // ডেট ফরম্যাট করার ফাংশন
//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     try {
//       const date = new Date(dateString);
//       // MM/DD/YY ফরম্যাট (ছবি অনুযায়ী)
//       return date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: '2-digit' });
//     } catch (e) {
//       return dateString;
//     }
//   };

//   return (
//     // কার্ডের মূল ডিজাইন, বর্ডার-লেফট সহ
//     <article 
//       className={`bg-white border p-4 rounded-lg shadow-sm transition duration-200 border-l-4 
//                  ${getBorderColor(ticket.status)} hover:shadow-md cursor-pointer`}
//       onClick={handleAdd} // কার্ডে ক্লিক করলে টাস্ক অ্যাড হবে
//     >
      
//       {/* হেডার: টাইটেল ও স্ট্যাটাস ব্যাজ */}
//       <div className="flex justify-between items-start mb-2">
//         <h3 className="font-bold text-base text-gray-800 mr-4 leading-snug">
//           {ticket.title}
//         </h3>
//         {/* স্ট্যাটাস ব্যাজ */}
//         <span className={`text-xs px-2 py-0.5 rounded-full border ${getStatusClass(ticket.status)} whitespace-nowrap`}> 
//           {/* ✅ টিকিট অবজেক্টের আসল স্ট্যাটাস ব্যবহার করা হয়েছে */}
//           {ticket.status} 
//         </span>
//       </div>

//       {/* ডেসক্রিপশন */}
//       <p className="text-sm text-gray-600 mt-1 mb-4 line-clamp-2">
//         {ticket.description}
//       </p>

//       {/* ফুটার: আইডি, প্রায়োরিটি, কাস্টমার, ডেট */}
//       <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-3">
        
//         {/* বামের অংশ: আইডি এবং প্রায়োরিটি */}
//         <div className="flex items-center gap-3 text-xs">
//           <span className="text-gray-500">#{ticket.id}</span>
//           <span className={`uppercase ${getPriorityClass(ticket.priority)}`}>
//             {ticket.priority} PRIORITY
//           </span>
//         </div>

//         {/* ডানের অংশ: কাস্টমার এবং ডেট */}
//         <div className="flex items-center gap-3 text-xs">
//           <span className="text-gray-700">{ticket.customer}</span>
          
//           {/* ডেট আইকন এবং টেক্সট */}
//           <div className="text-gray-500 flex items-center gap-1">
//              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5" />
//              </svg>
//               {/* ✅ ticket.createdAt ব্যবহার করা হয়েছে */}
//               {formatDate(ticket.createdAt)}
//           </div>
          
//         </div>
//       </div>
//     </article>
//   );
// }








// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";
// import { toast } from "react-toastify";

// export default function TicketCard({ ticket }) {
//   if (!ticket) return null; 
  
//   const { addTask, tasks } = useContext(TicketContext);
  
//   const isInTask = tasks.some(t => t.id === ticket.id); 

//   const handleAdd = () => {
//     if (isInTask) {
//        toast.warn(`${ticket.title} is already in Task Status.`);
//        return;
//     }
//     addTask(ticket);
//     toast.info(`${ticket.title} added to Task Status!`);
//   };

//   // স্ট্যাটাস ব্যাজের জন্য ক্লাস (ছবি অনুযায়ী)
//   const getStatusClass = (status) => {
//     switch ((status || '').toLowerCase()) {
//       case 'open':
//         // 🟢 সবুজ স্ট্যাটাস ব্যাজ
//         return 'bg-green-100 text-green-700 border-green-300'; 
//       case 'in-progress':
//         // 🟡 হলুদ স্ট্যাটাস ব্যাজ
//         return 'bg-yellow-100 text-yellow-700 border-yellow-300'; 
//       default:
//         return 'bg-gray-100 text-gray-700 border-gray-300';
//     }
//   };

//   // প্রায়োরিটির জন্য রং সেট করার ফাংশন
//   const getPriorityClass = (priority) => {
//     switch ((priority || '').toLowerCase()) {
//       case 'high':
//         return 'text-red-600 font-semibold';
//       case 'medium':
//         return 'text-orange-500 font-semibold';
//       case 'low':
//         return 'text-green-600 font-semibold';
//       default:
//         return 'text-gray-600';
//     }
//   };

//   // ডেট ফরম্যাট করার ফাংশন
//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: '2-digit' });
//     } catch (e) {
//       return dateString;
//     }
//   };

//   return (
//     // ✅ ফিক্স: বামদিকের বর্ডার (`border-l-4`) সম্পূর্ণরূপে সরিয়ে দেওয়া হলো।
//     <article 
//       className={`bg-white border border-gray-200 p-4 rounded-lg shadow-sm transition duration-200 
//                  hover:shadow-md cursor-pointer`}
//       onClick={handleAdd} // কার্ডে ক্লিক করলে টাস্ক অ্যাড হবে
//     >
      
//       {/* হেডার: টাইটেল ও স্ট্যাটাস ব্যাজ */}
//       <div className="flex justify-between items-start mb-2">
//         <h3 className="font-bold text-base text-gray-800 mr-4 leading-snug">
//           {ticket.title}
//         </h3>
//         {/* ✅ ব্যাজ ডিজাইন ফিক্স: একটি গোল সিগনাল (dot) যোগ করা হলো */}
//         <span className={`text-xs px-2 py-0.5 rounded-full border flex items-center gap-1 ${getStatusClass(ticket.status)} whitespace-nowrap`}> 
//           {/* গোল সিগনাল (ছোট বৃত্ত) */}
//           <span className={`h-2 w-2 rounded-full ${ticket.status.toLowerCase() === 'open' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
//           {ticket.status} 
//         </span>
//       </div>

//       {/* ডেসক্রিপশন */}
//       <p className="text-sm text-gray-600 mt-1 mb-4 line-clamp-2">
//         {ticket.description}
//       </p>

//       {/* ফুটার: আইডি, প্রায়োরিটি, কাস্টমার, ডেট */}
//       <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-3">
        
//         {/* বামের অংশ: আইডি এবং প্রায়োরিটি */}
//         <div className="flex items-center gap-3 text-xs">
//           <span className="text-gray-500">#{ticket.id}</span>
//           <span className={`uppercase ${getPriorityClass(ticket.priority)}`}>
//             {ticket.priority} PRIORITY
//           </span>
//         </div>

//         {/* ডানের অংশ: কাস্টমার এবং ডেট */}
//         <div className="flex items-center gap-3 text-xs">
//           <span className="text-gray-700">{ticket.customer}</span>
          
//           <div className="text-gray-500 flex items-center gap-1">
//              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5" />
//              </svg>
//               {formatDate(ticket.createdAt)}
//           </div>
          
//         </div>
//       </div>
//     </article>
//   );
// }





// src/components/TicketCard/TicketCard.jsx (চূড়ান্ত ফিক্স)

// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";
// import { toast } from "react-toastify";

// export default function TicketCard({ ticket }) {
//   if (!ticket) return null; 
  
//   const { addTask, tasks } = useContext(TicketContext);
  
//   // টিকিটটি Task Status-এ আছে কিনা চেক করা (In-Progress)
//   const isInTask = tasks.some(t => t.id === ticket.id); 

//   // কার্ডে ক্লিক করলে টাস্ক অ্যাড করার ফাংশন
//   const handleAdd = () => {
//     if (isInTask) {
//        toast.warn(`${ticket.title} is already in Task Status.`);
//        return;
//     }
//     addTask(ticket);
//     toast.info(`${ticket.title} added to Task Status!`);
//   };

//   // স্ট্যাটাস ব্যাজের জন্য ক্লাস (ছবি অনুযায়ী)
//   const getStatusClass = (status) => {
//     switch ((status || '').toLowerCase()) {
//       case 'open':
//         // 🟢 সবুজ স্ট্যাটাস ব্যাজ
//         return 'bg-green-100 text-green-700 border-green-300'; 
//       case 'in-progress':
//         // 🟡 হলুদ স্ট্যাটাস ব্যাজ
//         return 'bg-yellow-100 text-yellow-700 border-yellow-300'; 
//       default:
//         // Default (Resolved-এর জন্য এটি TaskStatus এ দেখানোর কথা নয়)
//         return 'bg-gray-100 text-gray-700 border-gray-300';
//     }
//   };

//   // প্রায়োরিটির জন্য রং সেট করার ফাংশন
//   const getPriorityClass = (priority) => {
//     switch ((priority || '').toLowerCase()) {
//       case 'high':
//         return 'text-red-600 font-semibold';
//       case 'medium':
//         return 'text-orange-500 font-semibold';
//       case 'low':
//         return 'text-green-600 font-semibold';
//       default:
//         return 'text-gray-600';
//     }
//   };

//   // ডেট ফরম্যাট করার ফাংশন
//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: '2-digit' });
//     } catch (e) {
//       return dateString;
//     }
//   };

//   return (
//     // বামদিকের বর্ডার সম্পূর্ণরূপে সরিয়ে দেওয়া হয়েছে
//     <article 
//       className={`bg-white border border-gray-200 p-4 rounded-lg shadow-sm transition duration-200 
//                  hover:shadow-md cursor-pointer`}
//       onClick={handleAdd}
//     >
      
//       {/* হেডার: টাইটেল ও স্ট্যাটাস ব্যাজ */}
//       <div className="flex justify-between items-start mb-2">
//         <h3 className="font-bold text-base text-gray-800 mr-4 leading-snug">
//           {ticket.title}
//         </h3>
//         {/* ✅ ব্যাজ ডিজাইন ফিক্স: গোল সিগনাল (Dot) যোগ করা হয়েছে */}
//         <span className={`text-xs px-2 py-0.5 rounded-full border flex items-center gap-1 ${getStatusClass(ticket.status)} whitespace-nowrap`}> 
//           {/* গোল সিগনাল (বৃত্ত) */}
//           <span className={`h-2 w-2 rounded-full ${
//              ticket.status.toLowerCase() === 'open' ? 'bg-green-500' : 
//              ticket.status.toLowerCase() === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-500'
//           }`}></span>
//           {ticket.status} 
//         </span>
//       </div>

//       {/* ডেসক্রিপশন */}
//       <p className="text-sm text-gray-600 mt-1 mb-4 line-clamp-2">
//         {ticket.description}
//       </p>

//       {/* ফুটার: আইডি, প্রায়োরিটি, কাস্টমার, ডেট */}
//       <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-3">
        
//         {/* বামের অংশ: আইডি এবং প্রায়োরিটি */}
//         <div className="flex items-center gap-3 text-xs">
//           <span className="text-gray-500">#{ticket.id}</span>
//           <span className={`uppercase ${getPriorityClass(ticket.priority)}`}>
//             {ticket.priority} PRIORITY
//           </span>
//         </div>

//         {/* ডানের অংশ: কাস্টমার এবং ডেট */}
//         <div className="flex items-center gap-3 text-xs">
//           <span className="text-gray-700">{ticket.customer}</span>
          
//           <div className="text-gray-500 flex items-center gap-1">
//              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5" />
//              </svg>
//               {formatDate(ticket.createdAt)}
//           </div>
          
//         </div>
//       </div>
//     </article>
//   );
// }







// src/components/TicketCard/TicketCard.jsx

import React, { useContext } from "react";
import { TicketContext } from "../../context/TicketContext";
import { toast } from "react-toastify";

export default function TicketCard({ ticket }) {
  if (!ticket) return null; 
  
  const { addTask, tasks } = useContext(TicketContext);
  
  // টিকিটটি Task Status-এ আছে কিনা চেক করা (In-Progress)
  const isInTask = tasks.some(t => t.id === ticket.id); 

  // কার্ডে ক্লিক করলে টাস্ক অ্যাড করার ফাংশন
  const handleAdd = () => {
    if (isInTask) {
       toast.warn(`${ticket.title} is already in Task Status.`);
       return;
    }
    addTask(ticket);
    toast.info(`${ticket.title} added to Task Status!`);
  };

  // স্ট্যাটাস ব্যাজের জন্য ক্লাস (ছবি অনুযায়ী)
  const getStatusClass = (status) => {
    switch ((status || '').toLowerCase()) {
      case 'open':
        return 'bg-green-100 text-green-700 border-green-300'; 
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300'; 
      case 'resolved': // Resolved টিকিটগুলো এখন Home.jsx থেকে সরে যাবে, কিন্তু সেফটির জন্য রাখা হলো
        return 'bg-gray-100 text-gray-700 border-gray-300'; 
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  // প্রায়োরিটির জন্য রং সেট করার ফাংশন
  const getPriorityClass = (priority) => {
    switch ((priority || '').toLowerCase()) {
      case 'high':
        return 'text-red-600 font-semibold';
      case 'medium':
        return 'text-orange-500 font-semibold';
      case 'low':
        return 'text-green-600 font-semibold';
      default:
        return 'text-gray-600';
    }
  };

  // ডেট ফরম্যাট করার ফাংশন
  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: '2-digit' });
    } catch (e) {
      return dateString;
    }
  };

  return (
    // বামদিকের বর্ডার সম্পূর্ণরূপে সরিয়ে দেওয়া হয়েছে
    <article 
      className={`bg-white border border-gray-200 p-4 rounded-lg shadow-sm transition duration-200 
                 hover:shadow-md ${!isInTask ? 'cursor-pointer' : ''}`}
      onClick={!isInTask ? handleAdd : null} // In-Progress হলে আর ক্লিক হবে না
    >
      
      {/* হেডার: টাইটেল ও স্ট্যাটাস ব্যাজ */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-base text-gray-800 mr-4 leading-snug">
          {ticket.title}
        </h3>
        {/* ✅ ব্যাজ ডিজাইন ফিক্স: গোল সিগনাল (Dot) যোগ করা হয়েছে */}
        <span className={`text-xs px-2 py-0.5 rounded-full border flex items-center gap-1 ${getStatusClass(ticket.status)} whitespace-nowrap`}> 
          {/* গোল সিগনাল (বৃত্ত) */}
          <span className={`h-2 w-2 rounded-full ${
             ticket.status.toLowerCase() === 'open' ? 'bg-green-500' : 
             ticket.status.toLowerCase() === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-500'
          }`}></span>
          {ticket.status} 
        </span>
      </div>

      {/* ডেসক্রিপশন */}
      <p className="text-sm text-gray-600 mt-1 mb-4 line-clamp-2">
        {ticket.description}
      </p>

      {/* ফুটার: আইডি, প্রায়োরিটি, কাস্টমার, ডেট */}
      <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-3">
        
        {/* বামের অংশ: আইডি এবং প্রায়োরিটি */}
        <div className="flex items-center gap-3 text-xs">
          <span className="text-gray-500">#{ticket.id}</span>
          <span className={`uppercase ${getPriorityClass(ticket.priority)}`}>
            {ticket.priority} PRIORITY
          </span>
        </div>

        {/* ডানের অংশ: কাস্টমার এবং ডেট */}
        <div className="flex items-center gap-3 text-xs">
          <span className="text-gray-700">{ticket.customer}</span>
          
          <div className="text-gray-500 flex items-center gap-1">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5" />
             </svg>
              {formatDate(ticket.createdAt)}
          </div>
          
        </div>
      </div>
    </article>
  );
}