import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ScanLine, MoreVertical, Edit, Trash2 } from "lucide-react";

const Home = () => {
  const [instances, setInstances] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInstances = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/instance/instances");
        setInstances(response.data);
      } catch (error) {
        console.error("Error fetching instances:", error);
      }
    };

    fetchInstances();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const formatParticipantTypes = (participantTypes) => {
    if (!participantTypes) return '';
    
    // Handle if participantTypes is a string (comma-separated)
    const typesArray = Array.isArray(participantTypes) 
      ? participantTypes 
      : participantTypes.split(',').map(type => type.trim());
    
    if (typesArray.length <= 2) {
      return typesArray.join(', ');
    }
    
    return `${typesArray[0]}, ${typesArray[1]} +${typesArray.length - 2} more`;
  };

  const formatTickets = (ticketCount) => {
    if (!ticketCount || ticketCount <= 0) return 'No tickets';
    
    if (ticketCount <= 2) {
      return Array.from({ length: ticketCount }, (_, i) => `Ticket ${String(i + 1).padStart(2, '0')}`).join(', ');
    }
    
    return `Ticket 01, Ticket 02 +${ticketCount - 2} more`;
  };


  const handleAddInstance = () => {
    Swal.fire({
      title: 'Add New Instance',
      text: 'Do you want to create a new instance?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, create new!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/createInstance');
      }
    });
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
    setOpenDropdownId(null);
  };

  const handleDelete = (id) => {
    setOpenDropdownId(null);
    Swal.fire({
      title: 'Delete Instance',
      text: 'Are you sure you want to delete this instance?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/api/instance/${id}`);
          setInstances(instances.filter(instance => instance._id !== id));
          Swal.fire('Deleted!', 'Instance has been deleted.', 'success');
        } catch (error) {
          console.error("Error deleting instance:", error);
          Swal.fire('Error!', 'Failed to delete instance.', 'error');
        }
      }
    });
  };

  const toggleDropdown = (id, e) => {
    e.stopPropagation();
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    setDropdownPosition({
      top: rect.top + scrollTop - 10,
      left: rect.left - 120
    });
    
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const calculatePending = (alloted, checkin) => {
    return alloted - checkin;
  };

  if (instances.length === 0) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instance</h2>
        <div className="flex flex-col items-center justify-center mt-32">
          <div className="w-24 h-24 mb-6 text-gray-300">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 21.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="16" r="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No instance added</h3>
          <p className="text-sm text-gray-500 mb-6">Add a instance to start building your event</p>
          <button
            onClick={handleAddInstance}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2"
          >
            <span>+ Add Instance</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instance</h2>
      <div className="flex justify-between items-center mb-4">
        <button className="bg-gray-100 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-200">Filter</button>
        <div className="flex space-x-2">
          <button className="bg-gray-100 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-200">Import</button>
          <button className="bg-gray-100 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-200">Export</button>
          <button 
            onClick={handleAddInstance}
            className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700"
          >
            + Add Instance
          </button>
        </div>
      </div>

      <div className="overflow-x-auto relative">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-left">
              <th className="px-6 py-3 border-b border-gray-300">Instance Name</th>
              <th className="px-6 py-3 border-b border-gray-300">Included Participant Types</th>
              <th className="px-6 py-3 border-b border-gray-300">Included Tickets</th>
              <th className="px-6 py-3 border-b border-gray-300">Alloted</th>
              <th className="px-6 py-3 border-b border-gray-300">Checkin</th>
              <th className="px-6 py-3 border-b border-gray-300">Pending</th>
              <th className="px-6 py-3 border-b border-gray-300 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {instances.map((instance) => {
              const alloted = 340;
              const checkin = instance.ticket * 40;
              const pending = calculatePending(alloted, checkin);

              return (
                <tr key={instance._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-200">{instance.instanceName}</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-gray-500">
                    {formatParticipantTypes(instance.participantType)}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-gray-500">
                    {formatTickets(instance.ticket)}
                  </td>                  <td className="px-6 py-4 border-b border-gray-200 text-blue-600 cursor-pointer">{alloted}</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-blue-600 cursor-pointer">{checkin}</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-blue-600 cursor-pointer">{pending}</td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-center space-x-4">
                      <button className="flex items-center space-x-1 bg-gray-200 px-4 py-1 rounded-md hover:bg-gray-300">
                        <ScanLine size={16} />
                        <span>Scan</span>
                      </button>
                      <div className="relative dropdown-container">
                        <button 
                          onClick={(e) => toggleDropdown(instance._id, e)}
                          className="text-gray-600 hover:text-gray-800 focus:outline-none"
                        >
                          <MoreVertical size={20} />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
        {openDropdownId && (
          <div 
            className="fixed bg-white rounded-md shadow-lg z-50 py-1 border border-gray-200"
            style={{ 
              top: `${dropdownPosition.top}px`, 
              left: `${dropdownPosition.left}px`,
            }}
          >
            <button
              onClick={() => handleEdit(openDropdownId)}
              className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <Edit size={16} />
              <span>Edit</span>
            </button>
            <button
              onClick={() => handleDelete(openDropdownId)}
              className="flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
            >
              <Trash2 size={16} />
              <span>Delete</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;