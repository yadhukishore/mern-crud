

const Home = () => {
  return (
    <div className="relative h-screen bg-gray-50">
      <h2 className="absolute top-4 left-6 text-lg font-semibold text-gray-800">Instance</h2>
      <div className="flex flex-col items-center justify-center h-[85vh] text-center">
        <div className="flex justify-center mb-4">
          <img 
            src="/notepad.png" 
            alt="Calendar Icon"
            className="w-16 h-16 rounded-full object-cover" 
          />
        </div>

        <h2 className="text-xl font-semibold text-gray-800">No Instance added</h2>
        <p className="text-gray-500 mt-2">
          Add an instance to start building your event
        </p>

        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
          + Add Instance
        </button>
      </div>
    </div>
  );
};

export default Home;
