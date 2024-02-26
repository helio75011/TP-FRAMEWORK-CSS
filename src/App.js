// /path/to/App.jsx

import React, { useState } from 'react';
import CategoryFilter from './components/Categories';
import Header from './components/Header';
import Tips from './components/Tips';
import Delete from './components/Delete';


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('salle');

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <Header />
      <div className="text-center p-4">
        <h2 className="text-lg font-bold">Qui travaille aujourd'hui ?</h2>
      </div>
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Tips />
      <Delete />
    </div>
  );
};

export default App;

