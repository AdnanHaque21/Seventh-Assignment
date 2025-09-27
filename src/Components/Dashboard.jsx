import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ticketsData from "../Components/Ticketcard.json";
import Banner from "./Banner";

const Dashboard = () => {
  const [tickets, setTickets] = useState(ticketsData);
  const [resolved, setResolved] = useState([]);

  // ---- Handle Complete Task ----
  const handleComplete = (id) => {
    const ticket = tickets.find((t) => t.id === id);
    if (!ticket) return;

    // Remove from Customer Tickets
    setTickets(tickets.filter((t) => t.id !== id));

    // Add to Resolved List
    setResolved([...resolved, ticket]);

    // Toast
    toast.success(`✅ "${ticket.title}" moved to Resolved`);
  };

  return (
    <div className="container mx-auto my-10">
      {/* Banner with counts */}
      <Banner inProgress={tickets.length} resolved={resolved.length} />

      {/* Customer Tickets */}
      <h2 className="font-semibold text-lg p-3">Customer Tickets</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {tickets.length === 0 ? (
          <p className="text-gray-500 p-4">No tickets available</p>
        ) : (
          tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="p-4 bg-white shadow-md rounded-xl flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-bold">{ticket.title}</h2>
                <p className="text-sm text-gray-600">{ticket.description}</p>
                <p className="mt-2">
                  <span className="font-semibold">Customer:</span>{" "}
                  {ticket.customer}
                </p>
                <p>
                  <span className="font-semibold">Priority:</span>{" "}
                  {ticket.priority}
                </p>
                <p>
                  <span className="font-semibold">Status:</span> {ticket.status}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Created At: {new Date(ticket.createdAt).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => handleComplete(ticket.id)}
                className="mt-4 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Complete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Resolved Tasks Section */}
      <h2 className="font-semibold text-lg p-3 mt-8">Resolved Tasks</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {resolved.length === 0 ? (
          <p className="text-gray-500 p-4">No resolved tasks yet.</p>
        ) : (
          resolved.map((ticket) => (
            <div
              key={ticket.id}
              className="p-4 bg-gray-100 shadow-sm rounded-xl"
            >
              <h2 className="text-lg font-bold text-green-700">
                {ticket.title}
              </h2>
              <p className="text-sm text-gray-600">{ticket.description}</p>
            </div>
          ))
        )}
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    </div>
  );
};

export default Dashboard;
