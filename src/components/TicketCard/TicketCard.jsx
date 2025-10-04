
import React, { useContext } from "react";
import { TicketContext } from "../../context/TicketContext";
import { toast } from "react-toastify";

export default function TicketCard({ ticket }) {
  if (!ticket) return null;

  const { addTask, tasks } = useContext(TicketContext);

  const isInTask = tasks.some(t => t.id === ticket.id);

  const handleAdd = () => {
    if (isInTask) {
      toast.warn(`${ticket.title} is already in Task Status.`);
      return;
    }
    addTask(ticket);
    toast.info(`${ticket.title} added to Task Status!`);
  };

  const getStatusClass = (status) => {
    switch ((status || '').toLowerCase()) {
      case 'open':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'resolved':
        return 'bg-gray-100 text-gray-700 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };


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

    <article
      className={`bg-white border border-gray-200 p-4 rounded-lg shadow-sm transition duration-200 
                 hover:shadow-md ${!isInTask ? 'cursor-pointer' : ''}`}
      onClick={!isInTask ? handleAdd : null} >


      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-base text-gray-800 mr-4 leading-snug">
          {ticket.title}
        </h3>

        <span className={`text-xs px-2 py-0.5 rounded-full border flex items-center gap-1 ${getStatusClass(ticket.status)} whitespace-nowrap`}>

          <span className={`h-2 w-2 rounded-full ${ticket.status.toLowerCase() === 'open' ? 'bg-green-500' :
            ticket.status.toLowerCase() === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-500'
            }`}></span>
          {ticket.status}
        </span>
      </div>


      <p className="text-sm text-gray-600 mt-1 mb-4 line-clamp-2">
        {ticket.description}
      </p>

      <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-3">
        <div className="flex items-center gap-3 text-xs">
          <span className="text-gray-500">#{ticket.id}</span>
          <span className={`uppercase ${getPriorityClass(ticket.priority)}`}>
            {ticket.priority} PRIORITY
          </span>
        </div>

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