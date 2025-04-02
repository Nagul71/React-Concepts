import React from 'react';

const SortOptions = ({ currentSort, onSortChange }) => {
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'mostLiked', label: 'Most Liked' }
  ];

  return (
    <div className="flex items-center space-x-3 mb-4 p-2 bg-gray-50 rounded-md">
      <span className="text-gray-600 font-medium">Sort by:</span>
      <select 
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value)}
        className="border border-gray-200 rounded-md px-3 py-1 bg-white text-gray-700"
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SortOptions;
