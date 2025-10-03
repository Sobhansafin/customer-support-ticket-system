// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";
// import { toast } from "react-toastify";

// export default function TaskStatus() {
//   const { tasks, resolved, completeTask } = useContext(TicketContext);

//   const handleComplete = (ticket) => {
//     completeTask(ticket);
//     toast.success(`${ticket.title} marked as Resolved!`);
//   };

//   return (
//     <div className="bg-white p-4 rounded-md shadow">
//       <h3 className="text-lg font-bold mb-4">Task Status</h3>

//       <div className="mb-4">
//         <h4 className="text-sm font-medium">In-Progress</h4>
//         {tasks.length === 0 ? (
//           <p className="text-sm text-gray-500">No in-progress tasks yet.</p>
//         ) : (
//           tasks.map((t) => (
//             <div key={t.id} className="card bg-gray-50 p-3 mb-2 rounded">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="font-medium">{t.title}</p>
//                   <p className="text-xs text-gray-500">{t.customer}</p>
//                 </div>
//                 <button
//                   className="btn btn-success btn-xs"
//                   onClick={() => handleComplete(t)}
//                 >
//                   Complete
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       <div>
//         <h4 className="text-sm font-medium">Resolved</h4>
//         {resolved.length === 0 ? (
//           <p className="text-sm text-gray-500">No resolved tasks yet.</p>
//         ) : (
//           resolved.map((r) => (
//             <div key={r.id} className="p-2 text-sm border-b">
//               {r.title}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }



// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";
// import { toast } from "react-toastify";

// export default function TaskStatus() {
// const { tasks, resolved, completeTask } = useContext(TicketContext);

//  const handleComplete = (ticket) => {
//  completeTask(ticket);
//  toast.success(`${ticket.title} marked as Resolved!`);
//  };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"> 
//       <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-3">Task Status</h3>
      
//       {/* নতুন নির্দেশিকা যোগ করা হয়েছে */}
//       <p className="text-sm text-gray-600 mb-6">Select a ticket to add to Task Status</p>

//       {/* In-Progress সেকশন */}
//       <div className="mb-6 border-b pb-4">
//         <h4 className="text-base font-semibold text-gray-700 mb-2">In-Progress</h4>
//         {tasks.length === 0 ? (
//           <p className="text-sm text-gray-500">No in-progress tasks yet.</p>
//         ) : (
//           tasks.map((t) => (
//             <div key={t.id} className="card bg-yellow-50 p-3 mb-2 rounded border border-yellow-200">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="font-medium text-sm">{t.title}</p>
//                   <p className="text-xs text-gray-500">{t.customer}</p>
//                 </div>
//                 <button
//                   className="btn btn-success btn-xs"
//                   onClick={() => handleComplete(t)}
//                 >
//                   Complete
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Resolved সেকশন */}
//       <div>
//         <h4 className="text-base font-semibold text-gray-700 mb-2">Resolved Task</h4>
//         {resolved.length === 0 ? (
//           <p className="text-sm text-gray-500">No resolved tasks yet.</p>
//         ) : (
//           resolved.map((r) => (
//             <div key={r.id} className="p-2 text-sm text-gray-600 border-b border-gray-100">
//               {r.title}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }





// src/components/TaskStatus/TaskStatus.jsx

// import React, { useContext } from "react";
// import { TicketContext } from "../../context/TicketContext";
// import { toast } from "react-toastify";

// export default function TaskStatus() {
//   const { tasks, resolved, completeTask } = useContext(TicketContext);

//   const handleComplete = (ticket) => {
//     completeTask(ticket);
//     toast.success(`${ticket.title} marked as Resolved!`);
//   };

//   return (
//     // ছবিতে হালকা ধূসর পটভূমি রয়েছে, তাই BG-WHITE রাখা হলো
//     <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"> 
//       <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Task Status</h3>
      
//       {/* ছবিতে দেখানো নির্দেশনা */}
//       <p className="text-sm text-blue-600 mb-6">Select a ticket to add to Task Status</p>

//       {/* In-Progress সেকশন */}
//       <div className="mb-6 border-b pb-4">
//         <h4 className="text-base font-semibold text-gray-700 mb-3">In-Progress ({tasks.length})</h4>
//         {tasks.length === 0 ? (
//           <p className="text-sm text-gray-500">No in-progress tasks yet.</p>
//         ) : (
//           tasks.map((t) => (
//             <div key={t.id} className="card bg-white-50 p-3 mb-2 rounded border border-gray-200">
//               <div className=" items-center">
//                 <div>
//                   <p className="font-medium text-[14px] mb-2">{t.title}</p>
//                   {/* <p className="text-xs text-gray-500">{t.customer}</p> */}
//                 </div>
//                 <button
//                   className="btn btn-success btn-xs bg-green-500 hover:bg-green-600 text-[15px] text-white w-full p-4"
//                   onClick={() => handleComplete(t)}
//                 >
//                   Complete
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Resolved সেকশন */}
//       <div>
//         <h4 className="text-base font-semibold text-gray-700 mb-3">Resolved Task ({resolved.length})</h4>
//         {resolved.length === 0 ? (
//           <p className="text-sm text-gray-500">No resolved tasks yet.</p>
//         ) : (
//           resolved.map((r) => (
//             <div key={r.id} className="p-2 text-sm text-gray-600 border-b border-gray-100 last:border-b-0">
//               <span className="text-green-500 mr-2">✓</span> {r.title}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }







// src/components/TaskStatus/TaskStatus.jsx

import React, { useContext } from "react";
import { TicketContext } from "../../context/TicketContext";
// toast এখান থেকে সরিয়ে TicketContext এ ব্যবহার করা হয়েছে।

export default function TaskStatus() {
  const { tasks, resolved, completeTask } = useContext(TicketContext);

  // completeTask সরাসরি Context থেকে কল করা হয়েছে
  const handleComplete = (ticket) => {
    completeTask(ticket);
    // toast এখন context এর মধ্যেই কল হচ্ছে
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"> 
      <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Task Status</h3>
      
      <p className="text-sm text-blue-600 mb-6">Select a ticket to add to Task Status</p>

      {/* In-Progress সেকশন */}
      <div className="mb-6 border-b pb-4">
        <h4 className="text-base font-semibold text-gray-700 mb-3">In-Progress ({tasks.length})</h4>
        {tasks.length === 0 ? (
          <p className="text-sm text-gray-500">No in-progress tasks yet.</p>
        ) : (
          tasks.map((t) => (
            <div key={t.id} className="card bg-white p-3 mb-2 rounded border border-gray-200">
              <div className="mr-1 items-center">
                <div>
                  <p className="font-medium text-{14px}">{t.title}</p>
                  {/* <p className="text-xs text-gray-500">#{t.id} - {t.customer}</p> */}
                </div>
                <button
                  className="btn btn-success  bg-green-500 hover:bg-green-600 text-white px-3 py-1 text-[15px] rounded w-full mt-2 "
                  onClick={() => handleComplete(t)}
                >
                  Complete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Resolved সেকশন */}
      <div>
        <h4 className="text-base font-semibold text-gray-700 mb-3">Resolved Task ({resolved.length})</h4>
        {resolved.length === 0 ? (
          <p className="text-sm text-gray-500">No resolved tasks yet.</p>
        ) : (
          resolved.map((r) => (
            <div key={r.id} className="p-2 text-sm text-gray-600  border-b border-gray-100 last:border-b-0 text-left bg-green-50 mb-2">
               {r.title} <span className="text-green-500 mr-2 flex mt-2 "> ✓ Complete</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}