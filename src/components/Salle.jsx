import React, { useState } from 'react';
// Make sure to import tailwind.css correctly.
// import '../index.css';
import { toggleDarkMode } from '../functions/Darkmode';

function Salle() {
  // Initialize the state of employees
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Aaron James', selected: false },
    { id: 2, name: 'Amanda Wallace', selected: false },
    { id: 3, name: 'Angela Danger', selected: true },
    { id: 4, name: 'Abella White', selected: false },
    { id: 5, name: 'Darlene Robertson', selected: true },
    { id: 6, name: 'Fred Davis', selected: false },
  ]);

  // Function to toggle the selection of an employee
  const toggleEmployeeSelection = (id) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? { ...employee, selected: !employee.selected } : employee
      )
    );
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="text-center p-4">
        <h2 className="text-lg font-bold">Qui travaille aujourd'hui ?</h2>
      </div>

      <div className="flex justify-around p-2">
        <button className="font-semibold text-gray-600">salle</button>
        <button className="font-semibold text-gray-600">cuisine</button>
        <button className="font-semibold text-gray-600">service</button>
      </div>

      <div className="divide-y divide-gray-300">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className={`flex items-center p-4 ${employee.selected ? 'bg-yellow-200' : ''}`}
          >
            <div className="flex-grow font-medium px-2">{employee.name}</div>
            <input
              type="checkbox"
              checked={employee.selected}
              onChange={() => toggleEmployeeSelection(employee.id)}
              className="transform scale-125"
            />
          </div>
        ))}
      </div>

      <div className="p-4">
        <button className="w-full bg-orange-500 text-white p-3 rounded-lg">Suivant</button>
      </div>
      <button onClick={toggleDarkMode}>Basculer le mode sombre</button>
    </div>
  );
}

export default Salle;
