import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import apiService from "../services/apiServices";

const CreateInstance = () => {
  const navigate = useNavigate();
  const [instanceName, setInstanceName] = useState("");
  const [participantType, setParticipantType] = useState("");
  const [ticketCount, setTicketCount] = useState(0); 

  const ticketPrice = 40;
  const totalPrice = ticketCount * ticketPrice;

  const participantTypes = [
    "Student",
    "Professional",
    "Guest",
    "Volunteer",
    "Organizer",
    "Speaker",
    "VIP"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!instanceName.trim()) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Please enter an instance name."
      });
      return;
    }

    if (!participantType) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Please select a participant type."
      });
      return;
    }

    if (ticketCount <= 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Please add at least one ticket."
      });
      return;
    }

    if (totalPrice > 340) {
      Swal.fire({
        icon: "error",
        title: "Limit Reached",
        text: "Total amount exceeds the limit of ₹340."
      });
      return;
    }

    try {
      const response = await apiService.post("/instance/instances", {
        instanceName,
        participantType,
        ticket: ticketCount,
      });
      console.log("Resp:",response);

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Instance created successfully",
        confirmButtonColor: "#3085d6"
      }).then(() => {
        navigate("/"); 
      });

      setInstanceName("");
      setParticipantType("");
      setTicketCount(0); 
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to create instance",
        confirmButtonColor: "#d33"
      });
    }
  };

  const handleIncrease = () => setTicketCount((prev) => prev + 1);
  const handleDecrease = () => setTicketCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Create Instance</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Instance Name</label>
            <input
              type="text"
              value={instanceName}
              onChange={(e) => setInstanceName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Enter instance name"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Participant Type</label>
            <select
              value={participantType}
              onChange={(e) => setParticipantType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select participant type</option>
              {participantTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Number of Tickets</label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handleDecrease}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none"
              >
                -
              </button>
              <span className="text-lg">{ticketCount}</span>
              <button
                type="button"
                onClick={handleIncrease}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none"
              >
                +
              </button>
            </div>
            <p className="text-gray-600">Total Amount: ₹{totalPrice}</p>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-1/2 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create Instance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateInstance;
