import React, { useState } from 'react';
// Assurez-vous d'importer tailwind.css correctement.
import '../index.css';
import { toggleDarkMode } from'../functions/Darkmode';

function Salle() {
  // Initialiser l'état des employés
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Aaron James', selected: false },
    { id: 2, name: 'Amanda Wallace', selected: false },
    { id: 3, name: 'Angela Danger', selected: true },
    { id: 4, name: 'Abella White', selected: false },
    { id: 5, name: 'Darlene Robertson', selected: true },
    { id: 6, name: 'Fred Davis', selected: false },
  ]);

  // Fonction pour basculer la sélection d'un employé
  const toggleEmployeeSelection = (id) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? { ...employee, selected: !employee.selected } : employee
      )
    );
  };

  return (
    <div className="bg-green-200 max-w-sm mx-auto bg-white dark:bg-gray-800">
      <div className="text-center p-4 bg-white">
        <h2 className="text-lg font-bold">Qui travaille aujourd'hui ?</h2>
      </div>

      <div className="flex justify-around p-2 bg-white">
        <button className="font-semibold text-gray-600">salle</button>
        <button className="font-semibold text-gray-600">cuisine</button>
        <button className="font-semibold text-gray-600">service</button>
      </div>

      <div className="divide-y divide-gray-300">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className={`flex items-center p-4 ${employee.selected ? 'bg-yellow-200' : 'bg-white'}`}
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