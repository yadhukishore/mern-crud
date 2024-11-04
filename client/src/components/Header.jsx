import  { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Pencil, Globe, ChevronDown, Play } from 'lucide-react';

const Header = () => {
  const [showPublishDropdown, setShowPublishDropdown] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white ml-16">
      <div className="flex items-center space-x-3">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiU3yItwJ_ok0XZt1lrGnnm33GN2L--Ogeqw&s" 
          alt="Logo" 
          className="w-12 h-8" 
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-medium">Come On Kerala</h1>
          <span className="text-sm text-gray-500">Jun 25 Sat,2024 - 8:00 AM (IST)</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <Globe className="w-5 h-5 text-gray-600" />
        
        <button className="flex items-center px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
          <Pencil className="w-4 h-4 mr-2" />
          Edit Website
        </button>
        
        <button className="flex items-center px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
          <Play className="w-4 h-4 mr-2" />
          Preview
        </button>
        
        <div className="relative">
          <button 
            className="flex items-center px-4 py-1.5 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            onClick={() => setShowPublishDropdown(!showPublishDropdown)}
          >
            <span>Publish</span>
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>
          
          {showPublishDropdown && (
            <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1">
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Publish Now
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Schedule Publish
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Save as Draft
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
