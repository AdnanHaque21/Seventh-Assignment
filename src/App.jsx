import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import TicketCard from "./Components/Ticketcard";
import { Suspense } from "react";
import Aside from "./Components/Aside";



const fetchTicket =async ()=>{
  const res = await fetch("./Components/Ticketcard.json")
  return res.json()
}

function App() {
  const fetchPromiseis= fetchTicket();
  return (
    <>
      <Navbar/>
      <Banner/>
      <div className="container mx-auto p-5 flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <TicketCard />
      </div>
      <aside className="w-full md:w-1/3 bg-gray-50 p-4 rounded">
        <Aside />
      </aside>
    </div>
      <Footer />
    </>
  );
};

export default App;
