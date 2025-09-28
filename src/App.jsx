import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import TicketCard from "./Components/Ticketcard";
import Aside from "./Components/Aside";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    fetch("/Ticketcard.json")
      .then(res => res.json())
      .then(data => setTickets(data))
      .catch(err => console.error(err));
  }, []);

  const addToTask = (ticket) => {
    setInProgress([...inProgress, ticket]);
    setTickets(tickets.filter(t => t.id !== ticket.id));
    toast.info(`${ticket.title} Task Status Added`);
  };

  const completeTask = (ticket) => {
    setInProgress(inProgress.filter(t => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    toast.success(`${ticket.title} Resolved`);
  };

  return (
    <>
      <Navbar />
      <Banner inProgress={inProgress.length} Resolved={resolved.length} />
      <div className="container mx-auto p-5 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <TicketCard tickets={tickets} addToTask={addToTask} />
        </div>
        <aside className="w-full md:w-1/3 bg-gray-50 p-4 rounded">
          <Aside tasks={inProgress} completeTask={completeTask} />
        </aside>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;