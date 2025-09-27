import React from "react";
import tickets from "../Components/Ticketcard.json"; 

const TicketCard = () => {
  return (
    <div className="container mx-auto bg-[#F5F5F5] m-10 ">
        <h2 className="font-semibold text-lg p-3">Customer Tickets</h2>
    <div className="grid md:grid-cols-2 gap-4">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="p-4 bg-white shadow-md rounded-xl">
          <h2 className="text-lg font-bold">{ticket.title}</h2>
          <p className="text-sm text-gray-600">{ticket.description}</p>
          <p className="mt-2">
            <span className="font-semibold">Customer:</span> 
            {ticket.customer}
          </p>
          <p>
            <span className="font-semibold">Priority:</span> {ticket.priority}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {ticket.status}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Created At: {new Date(ticket.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TicketCard;
