import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative">
      <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden">
        <div className="flex-1 flex">
          <input
            type="text"
            placeholder="Search by part number, name, or vehicle compatibility..."
            className="w-full px-4 py-3 focus:outline-none"
          />
        </div>
        <button className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 flex items-center">
          <Search className="w-5 h-5" />
          <span className="ml-2">Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;