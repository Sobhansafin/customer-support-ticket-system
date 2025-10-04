
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const TicketContext = createContext();

export default function TicketProvider({ children }) {
  const [tickets, setTickets] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => {

        const normalizedData = data.map(t => {
          if (t.status === 'In-Progress' || t.status === 'Resolved') {
            return { ...t, status: 'Open' };
          }
          return t;
        });

        setTickets(normalizedData);
        setTasks([]);
        setResolved([]);

      })
      .catch((err) => console.error("Failed to load tickets:", err));
  }, []);

  const addTask = (ticket) => {

    setTasks((prev) => {
      if (prev.some((t) => t.id === ticket.id)) return prev;
      return [...prev, { ...ticket, status: 'In-Progress' }];
    });

    setTickets((prev) =>
      prev.map(t =>
        t.id === ticket.id ? { ...t, status: 'In-Progress' } : t
      )
    );
  };

  const completeTask = (ticket) => {

    setResolved((prev) => [...prev, { ...ticket, status: 'Resolved' }]);

    setTasks((prev) => prev.filter((t) => t.id !== ticket.id));

    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    toast.success(`${ticket.title} marked as Resolved!`);
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        tasks,
        resolved,
        addTask,
        completeTask,
        inProgressCount: tasks.length,
        resolvedCount: resolved.length
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}

