import React from 'react';
import UserList from './UserList';

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const getButtonClass = (category) => {
    return category === selectedCategory ? 'button-selected' : 'button';
  };

  const getTextClass = (category) => {
    return category === selectedCategory ? 'text-selected' : 'text';
  };

  return (
    <div className="safe-area">
      <div className="flex-container">
      <div className="flex justify-around p-2">
          <button 
            className={`font-semibold ${selectedCategory === 'salle' ? 'bg-orange-500' : 'bg-gray-200'} p-2 rounded-lg`} 
            onClick={() => setSelectedCategory('salle')}
          >
            <span className={`text-lg ${selectedCategory === 'salle' ? 'text-white' : 'text-gray-600'}`}>salle</span>
          </button>
          <button 
      className={`font-semibold ${selectedCategory === 'cuisine' ? 'bg-orange-500' : 'bg-gray-200'} p-2 rounded-lg`} 
            onClick={() => setSelectedCategory('cuisine')}
          >
            <span className={`text-lg ${selectedCategory === 'cuisine' ? 'text-white' : 'text-gray-600'}`}>cuisine</span>
          </button>
          <button 
            className={`font-semibold ${selectedCategory === 'service' ? 'bg-orange-500' : 'bg-gray-200'} p-2 rounded-lg`} 
            onClick={() => setSelectedCategory('service')}
          >
            <span className={`text-lg ${selectedCategory === 'service' ? 'text-white' : 'text-gray-600'}`}>service</span>
          </button>
      </div>

        <div className="user-list-container">
          <UserList selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;