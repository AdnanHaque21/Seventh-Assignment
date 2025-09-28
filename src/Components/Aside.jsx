const Aside = ({ tasks, completeTask }) => {
  return (
    <div className="mb-6">
      <h2 className="font-semibold">Task Status</h2>
      {tasks.length === 0 ? (
        <p className="p-2">Select a ticket to add to Task Status</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="bg-white p-3 rounded mb-2 shadow flex justify-between items-center">
            <span>{task.title}</span>
            <button 
              className="bg-green-500 text-white px-2 py-1 rounded"
              onClick={() => completeTask(task)}
            >
              Complete
            </button>
          </div>
        ))
      )}

      <h2 className="font-semibold mt-6">Resolved Task</h2>
      <p className="p-2">No Resolved Task yet</p>
    </div>
  );
};

export default Aside;