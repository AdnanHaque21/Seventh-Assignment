import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import TicketCard from "./Components/Ticketcard";
import { Suspense } from "react";
import Aside from "./Components/Aside";
import Dashboard from "./Components/Dashboard";


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
      <div>
      <Dashboard />
      </div>
      {/* <div className="grid grid-cols-3"> */}
      <Suspense>
        <TicketCard fetchPromiseis={fetchPromiseis}></TicketCard>
      </Suspense>
      <Aside/>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default App;
