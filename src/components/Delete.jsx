import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';

const Delete = () => {
    const employees = [
        'Aaron James',
        'Amanda Wallace',
        'Angela Danger',
        'Abella White',
        'Darlene Robertson',
        'Fred Davis',
        'Max Richet',
        // ... more employees
    ];

    const handleDelete = (employeeName) => {
        console.log(`Delete ${employeeName}`);
        // Implement the delete functionality here
      
    };
    
  return (
    <div className="bg-white p-4">
      <div className="text-center mb-4">
        <p className="text-gray-500 text-sm">Jeudi, 21 avr</p>
        <h1 className="text-2xl font-bold">Suppression d'employés</h1>
      </div>

      <div className="space-y-4">
        {employees.map((employee) => (
          <div key={employee} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-red-100 p-2 rounded-full mr-2">
                    <IoPersonOutline className="text-red-500 text-xl" />
              </div>
              <span className="font-medium">{employee}</span>
            </div>
            <button
              onClick={() => handleDelete(employee)}
              className="bg-red-500 text-white py-1 px-3 rounded"
            >
              supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delete