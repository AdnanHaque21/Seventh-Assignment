const TicketCard = ({ tickets, addToTask }) => {
  return (
    <div className="container mx-auto p-5 flex flex-col ">
      <h2 className="text-2xl font-bold mb-6">Customer Tickets</h2>
      <div className="grid md:grid-cols-2 gap-6 flex-1">
        {tickets.map(ticket => (
          <div 
            key={ticket.id} 
            className="bg-white shadow-lg rounded-xl p-5 cursor-pointer hover:shadow-xl transition"
            onClick={() => addToTask(ticket)}
          >
            <h3 className="text-lg font-semibold mb-2">{ticket.title}</h3>
            <p className="text-gray-600 mb-2">{ticket.description}</p>
            <p className="text-sm text-gray-500 mb-1"><span className="font-semibold">Customer:</span> {ticket.customer}</p>
            <p className="text-sm text-gray-500 mb-1"><span className="font-semibold">Priority:</span> {ticket.priority}</p>
            <p className="text-sm text-gray-500 mb-1"><span className="font-semibold">Status:</span> {ticket.status}</p>
            <p className="text-xs text-gray-400">Created: {new Date(ticket.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketCard;
