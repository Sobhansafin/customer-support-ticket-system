
import React, { useContext } from "react";
import { TicketContext } from "../../context/TicketContext";


export default function TaskStatus() {
  const { tasks, resolved, completeTask } = useContext(TicketContext);


  const handleComplete = (ticket) => {
    completeTask(ticket);
    
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"> 
      <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Task Status</h3>
      
      <p className="text-sm text-blue-600 mb-6">Select a ticket to add to Task Status</p>

      
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