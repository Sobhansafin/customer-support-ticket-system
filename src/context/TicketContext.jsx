// import React, { createContext, useEffect, useState } from "react";

// export const TicketContext = createContext();

// export default function TicketProvider({ children }) {
//   const [tickets, setTickets] = useState([]); 
//   const [tasks, setTasks] = useState([]);     
//   const [resolved, setResolved] = useState([]);

//   useEffect(() => {
//     fetch("/tickets.json")
//       .then((res) => res.json())
//       .then((data) => setTickets(data))
//       .catch((err) => console.error("Failed to load tickets:", err));
//   }, []);

//   const addTask = (ticket) => {
//     setTasks((prev) => {
//       if (prev.some((t) => t.id === ticket.id)) return prev;
//       return [...prev, ticket];
//     });
//     setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
//   };

//   const completeTask = (ticket) => {
//     setResolved((prev) => [...prev, ticket]);
//     setTasks((prev) => prev.filter((t) => t.id !== ticket.id));
//   };

//   return (
//     <TicketContext.Provider
//       value={{ tickets, tasks, resolved, addTask, completeTask }}
//     >
//       {children}
//     </TicketContext.Provider>
//   );
// }




//src/context/TicketContext.jsx

// import React, { createContext, useEffect, useState } from "react";

// export const TicketContext = createContext();

// export default function TicketProvider({ children }) {
//   const [tickets, setTickets] = useState([]); 
//   const [tasks, setTasks] = useState([]);     
//   const [resolved, setResolved] = useState([]);

//   // ... (useEffect for fetching JSON is fine) ...
//   useEffect(() => {
//     fetch("/tickets.json")
//       .then((res) => res.json())
//       .then((data) => {
//         // ডেটা লোড করার সময়, ডিফল্ট স্ট্যাটাস 'Open' সেট করা যেতে পারে
//         setTickets(data.map(t => ({...t, status: 'Open'})))
//       })
//       .catch((err) => console.error("Failed to load tickets:", err));
//   }, []);


//   const addTask = (ticket) => {
//     setTasks((prev) => {
//       // যদি টিকিটটি ইতিমধ্যে tasks এ না থাকে
//       if (prev.some((t) => t.id === ticket.id)) return prev;
//       return [...prev, {...ticket, status: 'In-Progress'}]; // স্ট্যাটাস আপডেট
//     });
//     // Customer Tickets তালিকা থেকে সরান
//     setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
//   };

//   /**
//    * 📝 টাস্ক কমপ্লিশন লজিক (মূল পরিবর্তন)
//    */
//   const completeTask = (ticket) => {
//     // 1. Resolved List এ যোগ করুন
//     setResolved((prev) => [...prev, {...ticket, status: 'Resolved'}]);

//     // 2. In Progress তালিকা (tasks) থেকে সরান
//     setTasks((prev) => prev.filter((t) => t.id !== ticket.id));
    
//     // 3. Customer Tickets তালিকা থেকেও সরান (Requirement অনুযায়ী)
//     // যদিও এটি সাধারণত করা হয় না (সাধারণত In-Progress-এ গেলে এটি Ticket List থেকে সরে যায়), 
//     // কিন্তু যদি এটি কোনোভাবে সেখানে থাকে বা এই অবস্থায় ফিরিয়ে আনতে চান, তবে এই লাইনটি প্রয়োজনীয়।
//     // যেহেতু addTask-এ আমরা tickets থেকে সরিয়ে দিয়েছি, এই লাইনটি সাধারণত অপ্রয়োজনীয়, 
//     // কিন্তু নিশ্চিত করার জন্য রাখতে পারেন যদি লজিক ভিন্ন হয়।
//     // setTickets((prev) => prev.filter((t) => t.id !== ticket.id)); 
    
//     // নোট: যেহেতু addTask ফাংশনটি already tickets থেকে সরিয়ে দিয়েছে, 
//     // এখানে tickets থেকে আর সরানোর দরকার নেই, যদি না আপনি resolved টিকিট পুনরায় দেখাতে চান।
//   };

//   return (
//     <TicketContext.Provider
//       value={{ 
//         tickets, 
//         tasks, 
//         resolved, 
//         addTask, 
//         completeTask,
//         // ইন-প্রগ্রেস ও রিজলভড কাউন্ট Banner-এর জন্য সরাসরি পাঠানো হলো
//         inProgressCount: tasks.length,
//         resolvedCount: resolved.length
//       }}
//     >
//       {children}
//     </TicketContext.Provider>
//   );
// }





// // // src/context/TicketContext.jsx

// // // import React, { createContext, useEffect, useState } from "react";
// // // // ... (initialTickets import remains the same if you use it) ...

// // // export const TicketContext = createContext();

// // // export default function TicketProvider({ children }) {
// // //   const [tickets, setTickets] = useState([]); 
// // //   const [tasks, setTasks] = useState([]);     
// // //   const [resolved, setResolved] = useState([]);

// // //   useEffect(() => {
// // //     fetch("/tickets.json")
// // //       .then((res) => res.json())
// // //       .then((data) => {
// // //         // ✅ ফিক্স: JSON ডেটা লোড করার সময় ডিফল্ট স্ট্যাটাস 'Open' সেট করা হয়েছে
// // //         setTickets(data.map(t => ({...t, status: 'Open'})))
// // //       })
// // //       .catch((err) => console.error("Failed to load tickets:", err));
// // //   }, []);


// // //   const addTask = (ticket) => {
// // //     setTasks((prev) => {
// // //       if (prev.some((t) => t.id === ticket.id)) return prev;
      
// // //       // ✅ ফিক্স: In-Progress এ যোগ করার সময় স্ট্যাটাস 'In-Progress' এ আপডেট করা হলো
// // //       return [...prev, {...ticket, status: 'In-Progress'}]; 
// // //     });
// // //     // Customer Tickets তালিকা থেকে সরান
// // //     setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
// // //   };

// // //   const completeTask = (ticket) => {
// // //     // Resolved List এ যোগ করার সময় স্ট্যাটাস 'Resolved' এ আপডেট করা হলো
// // //     setResolved((prev) => [...prev, {...ticket, status: 'Resolved'}]); 

// // //     // In Progress তালিকা (tasks) থেকে সরান
// // //     setTasks((prev) => prev.filter((t) => t.id !== ticket.id));
// // //   };
  
// // //   // ... (value object remains the same) ...

// // //   return (
// // //     <TicketContext.Provider
// // //       value={{ 
// // //         tickets, 
// // //         tasks, 
// // //         resolved, 
// // //         addTask, 
// // //         completeTask,
// // //         inProgressCount: tasks.length,
// // //         resolvedCount: resolved.length
// // //       }}
// // //     >
// // //       {children}
// // //     </TicketContext.Provider>
// // //   );
// // // }






// src/context/TicketContext.jsx

// import React, { createContext, useEffect, useState } from "react";

// export const TicketContext = createContext();

// export default function TicketProvider({ children }) {
//   const [tickets, setTickets] = useState([]); // Open tickets
//   const [tasks, setTasks] = useState([]);     // In-Progress tickets
//   const [resolved, setResolved] = useState([]); // Resolved tickets

//   useEffect(() => {
//     fetch("/tickets.json")
//       .then((res) => res.json())
//       .then((data) => {
//         // ডেটাকে স্ট্যাটাস অনুযায়ী তিনটি অ্যারেতে বিভক্ত করুন
//         const initialOpenTickets = data.filter(t => t.status === 'Open');
//         const initialTasks = data.filter(t => t.status === 'In-Progress');
//         const initialResolved = data.filter(t => t.status === 'Resolved');
        
//         setTickets(initialOpenTickets);
//         setTasks(initialTasks);
//         setResolved(initialResolved);
        
//       })
//       //.catch((err) => console.error("Failed to load tickets:", err));
//   }, []);

//   const addTask = (ticket) => {
//     setTasks((prev) => {
//       // যদি টিকিটটি ইতিমধ্যে tasks এ না থাকে
//       if (prev.some((t) => t.id === ticket.id)) return prev;
//       return [...prev, {...ticket, status: 'In-Progress'}]; 
//     });
//     // Customer Tickets তালিকা (Open) থেকে সরান
//     setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
//   };

//   const completeTask = (ticket) => {
//     // Resolved List এ যোগ করুন
//     setResolved((prev) => [...prev, {...ticket, status: 'Resolved'}]);

//     // In Progress তালিকা (tasks) থেকে সরান
//     setTasks((prev) => prev.filter((t) => t.id !== ticket.id));
//   };

//   return (
//     <TicketContext.Provider
//       value={{ tickets, tasks, resolved, addTask, completeTask,
//         inProgressCount: tasks.length,
//         resolvedCount: resolved.length
//       }}
//     >
//       {children}
//     </TicketContext.Provider>
//   );
// }








// src/context/TicketContext.jsx (চূড়ান্ত ফিক্স)

// import React, { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify"; // যদি আপনি context থেকে toast ব্যবহার করেন

// export const TicketContext = createContext();

// export default function TicketProvider({ children }) {
//   const [tickets, setTickets] = useState([]);    // Home.jsx এ দেখানো হবে (Open + In-Progress)
//   const [tasks, setTasks] = useState([]);       // Task Status এর জন্য (In-Progress)
//   const [resolved, setResolved] = useState([]); // Resolved Task এর জন্য

//   useEffect(() => {
//     fetch("/tickets.json")
//       .then((res) => res.json())
//       .then((data) => {
        
//         // JSON থেকে সমস্ত টিকিট (Resolved ছাড়া) Home.jsx এ দেখানোর জন্য
//         const initialDisplayTickets = data.filter(t => t.status !== 'Resolved'); 
        
//         // Task Status-এর জন্য In-Progress টিকিট লোড করা হচ্ছে (৩টি)
//         const initialTasks = data.filter(t => t.status === 'In-Progress');
//         const initialResolved = data.filter(t => t.status === 'Resolved');
        
//         setTickets(initialDisplayTickets); // মোট ১০টি টিকিট
//         setTasks(initialTasks);           // মোট ৩টি টাস্ক
//         setResolved(initialResolved);
        
//       })
//       .catch((err) => console.error("Failed to load tickets:", err));
//   }, []);

//   const addTask = (ticket) => {
//     // tasks অ্যারেতে যোগ করা হচ্ছে
//     setTasks((prev) => {
//       if (prev.some((t) => t.id === ticket.id)) return prev;
//       return [...prev, {...ticket, status: 'In-Progress'}]; 
//     });

//     // Home.jsx এর লিস্টে স্ট্যাটাস 'In-Progress' এ আপডেট হবে
//     setTickets((prev) => 
//       prev.map(t => 
//         t.id === ticket.id ? {...t, status: 'In-Progress'} : t
//       )
//     );
//   };

//   const completeTask = (ticket) => {
//     // ... (লজিক অপরিবর্তিত) ...
//     setResolved((prev) => [...prev, {...ticket, status: 'Resolved'}]);
//     setTasks((prev) => prev.filter((t) => t.id !== ticket.id));
    
//     // Home.jsx লিস্ট থেকে Resolved টিকিট সরিয়ে দেওয়া হলো
//     setTickets((prev) => prev.filter((t) => t.id !== ticket.id)); 
//   };

//   return (
//     <TicketContext.Provider
//       value={{ 
//         tickets, 
//         tasks, 
//         resolved, 
//         addTask, 
//         completeTask,
//         inProgressCount: tasks.length,
//         resolvedCount: resolved.length
//       }}
//     >
//       {children}
//     </TicketContext.Provider>
//   );
// }


// src/context/TicketContext.jsx (চূড়ান্ত ফিক্স)

// import React, { createContext, useEffect, useState } from "react";
// // ... (toast import)

// export const TicketContext = createContext();

// export default function TicketProvider({ children }) {
//   const [tickets, setTickets] = useState([]);    // Home.jsx এ দেখানো হবে (সবকিছু Open স্ট্যাটাস দিয়ে শুরু হবে)
//   const [tasks, setTasks] = useState([]);       // Task Status এর জন্য (In-Progress)
//   const [resolved, setResolved] = useState([]); // Resolved Task এর জন্য

//   useEffect(() => {
//     fetch("/tickets.json")
//       .then((res) => res.json())
//       .then((data) => {
        
//         // ✅ ফিক্স: JSON ডেটার In-Progress টিকিটগুলোকে Open এ পরিবর্তন করা হয়েছে
//         const normalizedData = data.map(t => {
//             // যদি JSON এ In-Progress বা Resolved থাকে, তবে সেগুলোকে Open করে দাও (শুধুমাত্র শুরুতে)
//             if (t.status === 'In-Progress' || t.status === 'Resolved') {
//                 return { ...t, status: 'Open' };
//             }
//             return t;
//         });
        
//         // Resolved ছাড়া সব টিকিট Home.jsx এ দেখানোর জন্য
//         const initialDisplayTickets = normalizedData.filter(t => t.status !== 'Resolved'); 
        
//         // যেহেতু সব In-Progress কে Open করা হয়েছে, তাই initialTasks এখন ফাঁকা (Count 0 হবে)
//         const initialTasks = []; 
        
//         // যদি JSON এ Resolved টিকিট থাকে, তবে সেগুলো এখানেই লোড হবে (ঐচ্ছিক)
//         const initialResolved = normalizedData.filter(t => t.status === 'Resolved');
        
//         setTickets(initialDisplayTickets); // মোট ১০টি টিকিট (সব Open স্ট্যাটাসে)
//         setTasks(initialTasks);           // মোট ০টি টাস্ক
//         setResolved(initialResolved);
        
//       })
//       .catch((err) => console.error("Failed to load tickets:", err));
//   }, []);

//   const addTask = (ticket) => {
//     // tasks অ্যারেতে যোগ করা হচ্ছে
//     setTasks((prev) => {
//       if (prev.some((t) => t.id === ticket.id)) return prev;
//       return [...prev, {...ticket, status: 'In-Progress'}]; 
//     });

//     // Home.jsx এর লিস্টে স্ট্যাটাস 'In-Progress' এ আপডেট হবে
//     setTickets((prev) => 
//       prev.map(t => 
//         t.id === ticket.id ? {...t, status: 'In-Progress'} : t
//       )
//     );
//   };

//   const completeTask = (ticket) => {
//     // Resolved লিস্টে যোগ করুন
//     setResolved((prev) => [...prev, {...ticket, status: 'Resolved'}]);

//     // tasks অ্যারে থেকে সরান
//     setTasks((prev) => prev.filter((t) => t.id !== ticket.id));
    
//     // Home.jsx এর লিস্টে স্ট্যাটাস 'Resolved' এ আপডেট হবে (যদি পরে দেখাতে হয়) 
//     setTickets((prev) => 
//       prev.map(t => 
//         t.id === ticket.id ? {...t, status: 'Resolved'} : t
//       )
//     );
    
//     // অথবা আপনি যদি চান Home.jsx থেকেResolved টিকিট একদম চলে যাক, তবে এই কোডটি ব্যবহার করুন:
//     // setTickets((prev) => prev.filter((t) => t.id !== ticket.id)); 
//   };

//   return (
//     <TicketContext.Provider
//       value={{ 
//         tickets, 
//         tasks, 
//         resolved, 
//         addTask, 
//         completeTask,
//         inProgressCount: tasks.length,
//         resolvedCount: resolved.length
//       }}
//     >
//       {children}
//     </TicketContext.Provider>
//   );
// }








// src/context/TicketContext.jsx

import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const TicketContext = createContext();

export default function TicketProvider({ children }) {
  const [tickets, setTickets] = useState([]);    // Home.jsx এ দেখানো হবে (সবকিছু Open স্ট্যাটাস দিয়ে শুরু হবে)
  const [tasks, setTasks] = useState([]);       // Task Status এর জন্য (In-Progress)
  const [resolved, setResolved] = useState([]); // Resolved Task এর জন্য

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => {
        
        // ✅ ফিক্স: JSON ডেটার সমস্ত In-Progress এবং Resolved টিকিটকে Open এ পরিবর্তন করা হয়েছে
        // ফলে প্রথম লোডে tasks এবং resolved অ্যারে দুটি ফাঁকা থাকবে।
        const normalizedData = data.map(t => {
            if (t.status === 'In-Progress' || t.status === 'Resolved') {
                return { ...t, status: 'Open' };
            }
            return t;
        });
        
        setTickets(normalizedData); // মোট ১০টি টিকিট (সব Open স্ট্যাটাসে শুরু হবে)
        setTasks([]);               // মোট ০টি টাস্ক
        setResolved([]);            // মোট ০টি Resolved
        
      })
      .catch((err) => console.error("Failed to load tickets:", err));
  }, []);

  const addTask = (ticket) => {
    // tasks অ্যারেতে যোগ করা হচ্ছে
    setTasks((prev) => {
      if (prev.some((t) => t.id === ticket.id)) return prev;
      return [...prev, {...ticket, status: 'In-Progress'}]; 
    });

    // Home.jsx এর লিস্টে স্ট্যাটাস 'In-Progress' এ আপডেট হবে
    setTickets((prev) => 
      prev.map(t => 
        t.id === ticket.id ? {...t, status: 'In-Progress'} : t
      )
    );
  };

  const completeTask = (ticket) => {
    // ১. Resolved লিস্টে যোগ করুন
    setResolved((prev) => [...prev, {...ticket, status: 'Resolved'}]);

    // ২. tasks অ্যারে (In-Progress) থেকে সরান
    setTasks((prev) => prev.filter((t) => t.id !== ticket.id));
    
    // ৩. ✅ চূড়ান্ত ফিক্স: Home.jsx এ দেখানো tickets অ্যারে থেকে টিকিটটি সম্পূর্ণভাবে মুছে যাবে।
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

  