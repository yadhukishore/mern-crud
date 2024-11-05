import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, Save, Plus, X } from 'lucide-react';
import Swal from 'sweetalert2';

const EditInstance = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    instanceName: '',
    participantType: [''],
    ticket: 0,
    description: ''
  });

  const ticketPrice = 40;
  const totalPrice = formData.ticket * ticketPrice;

  useEffect(() => {
    const fetchInstance = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/api/instance/edit/${id}`);
        const instance = response.data;
        setFormData({
          instanceName: instance.instanceName,
          // If participantType is a string, convert it to array
          participantType: Array.isArray(instance.participantType) 
            ? instance.participantType 
            : [instance.participantType],
          ticket: instance.ticket,
          description: instance.description || ''
        });
      } catch (error) {
        console.error('Error fetching instance:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to load instance data'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchInstance();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleParticipantTypeChange = (index, value) => {
    const newParticipantTypes = [...formData.participantType];
    newParticipantTypes[index] = value;
    setFormData(prev => ({
      ...prev,
      participantType: newParticipantTypes
    }));
  };

  const addParticipantType = () => {
    setFormData(prev => ({
      ...prev,
      participantType: [...prev.participantType, '']
    }));
  };

  const removeParticipantType = (index) => {
    if (formData.participantType.length > 1) {
      const newParticipantTypes = formData.participantType.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        participantType: newParticipantTypes
      }));
    }
  };

  const validateForm = () => {
    // Instance name validation
    if (!formData.instanceName.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Input',
        text: 'Please enter an instance name.'
      });
      return false;
    }

    // Participant type validation
    if (formData.participantType.some(type => !type)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Input',
        text: 'Please select all participant types.'
      });
      return false;
    }

    // Ticket count validation
    if (formData.ticket <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Input',
        text: 'Please add at least one ticket.'
      });
      return false;
    }

    // Total price validation
    if (totalPrice > 340) {
      Swal.fire({
        icon: 'error',
        title: 'Limit Reached',
        text: 'Total amount exceeds the limit of ₹340.'
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await axios.put(`http://localhost:3000/api/instance/edit/${id}`, formData);
      
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Instance updated successfully',
        showConfirmButton: false,
        timer: 1500
      });
      
      navigate('/');
    } catch (error) {
      console.error('Error updating instance:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to update instance'
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Instances
          </button>
          <h1 className="text-2xl font-semibold text-gray-800">Edit Instance</h1>
          <div className="w-24"></div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instance Name
                </label>
                <input
                  type="text"
                  name="instanceName"
                  value={formData.instanceName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  placeholder="Enter instance name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Participant Types
                </label>
                <div className="space-y-3">
                  {formData.participantType.map((type, index) => (
                    <div key={index} className="flex gap-2">
                      <select
                        value={type}
                        onChange={(e) => handleParticipantTypeChange(index, e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select Participant Type</option>
                        <option value="Student">Student</option>
                        <option value="Professional">Professional</option>
                        <option value="Guest">Guest</option>
                        <option value="Volunteer">Volunteer</option>
                        <option value="Organizer">Organizer</option>
                        <option value="Speaker">Speaker</option>
                        <option value="VIP">VIP</option>
                      </select>
                      {formData.participantType.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeParticipantType(index)}
                          className="p-2 text-gray-500 hover:text-red-500"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addParticipantType}
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Participant Type
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Tickets
                </label>
                <input
                  type="number"
                  name="ticket"
                  value={formData.ticket}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                  required
                />
                <p className="text-sm text-gray-600 mt-2">Total Amount: ₹{totalPrice}</p>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditInstance;