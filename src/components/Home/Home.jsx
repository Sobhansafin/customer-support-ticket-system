import React, { lazy, useContext } from "react";
import { TicketContext } from "../../context/TicketContext";
import TaskStatus from "../TaskStatus/TaskStatus";

const TicketCard = lazy(() => import("../TicketCard/TicketCard"));

export default function Home() {
  const { tickets } = useContext(TicketContext);

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
      <div className="lg:col-span-2">
        <h2 className="text-lg font-bold mb-4 text-left">Customer Tickets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets && tickets.length > 0 ? (
            tickets.map((ticket) => (
              <React.Suspense fallback={<div>Loading ticket...</div>} key={ticket.id}>
                <TicketCard ticket={ticket} />
              </React.Suspense>
            ))
          ) : (
            <p>No tickets available.</p>
          )}
        </div>
      </div>

      <aside>
        <TaskStatus />
      </aside>
    </div>
  );
}




