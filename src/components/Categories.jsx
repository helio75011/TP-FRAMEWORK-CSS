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
          <button className={`${getButtonClass('salle')} font-semibold text-gray-600`} 
            onClick={() => setSelectedCategory('salle')}>
            <span className={getTextClass('salle')}>salle</span>
          </button>
          <button className={`${getButtonClass('cuisine')} font-semibold text-gray-600`} 
            onClick={() => setSelectedCategory('cuisine')}>
            <span className={getTextClass('cuisine')}>cuisine</span>
          </button>
          <button className={`${getButtonClass('service')} font-semibold text-gray-600`} 
            onClick={() => setSelectedCategory('service')}>
            <span className={getTextClass('service')}>service</span>
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