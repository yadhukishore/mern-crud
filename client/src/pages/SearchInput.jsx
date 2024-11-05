import { useState } from "react";
import { Search } from "lucide-react";

const SearchInput = ({ onSearch }) => {
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearchClick = () => {
    setShowInput((prev) => !prev);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-100 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-200"
        onClick={handleSearchClick}
      >
        <Search size={16} />
      </button>
      {showInput && (
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search instance..."
          className="absolute left-0 bottom-full mb-2 bg-white border border-gray-300 rounded-md px-2 py-1 shadow-md z-10 transform -translate-y-full"
        />
      )}
    </div>
  );
};

export default SearchInput;
