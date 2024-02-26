// /path/to/App.jsx

import React, { useState } from 'react';
import CategoryFilter from './components/Categories';
import UserList from './components/UserList';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('salle');

  return (
    <div className="flex flex-col h-screen">
      <div className="px-4 py-2 bg-green-500 text-white">
        <p>Jeudi, 21 avr</p>
        <h2>Qui travaille aujourd'hui?</h2>
      </div>
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <UserList selectedCategory={selectedCategory} />
      <button className="bg-pink-300 p-4 rounded-full text-white font-semibold self-center mb-4 shadow-lg">
        Suivant →
      </button>
    </div>
  );
};

export default App;

