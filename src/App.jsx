import React, { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import TicketProvider from "./context/TicketContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import "./App.css";

export default function App() {
  return (
    <TicketProvider>
      <div className="min-h-screen flex flex-col bg-green-50 ">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 w-full flex-1 ">
          <Suspense fallback={<div>Loading...</div>}>
            <Banner />
            <Home />
          </Suspense>
        </main>
        <Footer />
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </TicketProvider>
  );
}






// import React, { Suspense } from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Banner from "./components/Banner/Banner";
// import Home from "./components/Home/Home";
// import Footer from "./components/Footer/Footer";
// import TicketProvider from "./context/TicketContext";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./App.css";

// export default function App() {
//   return (
//     <TicketProvider>
//       <div className="min-h-screen flex flex-col bg-green-50">
//         <Navbar />
//         <main className="max-w-6xl mx-auto px-6 w-full flex-1 ">
//           <Suspense fallback={<div>Loading...</div>}>
//             <Banner />
//             <Home />
//           </Suspense>
//         </main>
//         <Footer />
//         <ToastContainer position="top-right" autoClose={2000} />
//       </div>
//     </TicketProvider>
//   );
// }








