import React from 'react';
// Import icons from Heroicons or another icon library
import { CashIcon, CalendarIcon, UserGroupIcon } from '@heroicons/react/solid';

const Admin = () => {
  return (
    <div className="bg-white p-4">
      <div className="text-center mb-4">
        <p className="text-gray-500 text-sm">Jeudi, 21 avr</p>
        <h1 className="text-2xl font-bold">Administrateur</h1>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Résultat semaine 16</h2>
        <div className="flex justify-between items-center bg-red-100 p-2 rounded-md mb-2">
          <CashIcon className="h-6 w-6 text-red-500" />
          <p className="text-red-500">287 €</p>
        </div>
        <div className="flex justify-between items-center">
          <CalendarIcon className="h-6 w-6 text-red-500" />
          <p className="text-red-500">59 € / jeudi</p>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Progression</h2>
        <div className="flex justify-around text-xs font-semibold mb-2">
          <span>jour</span>
          <span>semaine</span>
          <span>mois</span>
        </div>
        {/* Chart placeholder */}
        <div className="h-32 bg-pink-100 rounded-md mb-4">
          {/* You would use a chart library like Chart.js or similar */}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Montant à payer par employé</h2>
        <a href="#see-all" className="text-xs text-red-500">Voir tout</a>
        <div className="space-y-2">
          {/* Loop through your employees here */}
          <div className="flex items-center justify-between">
            <UserGroupIcon className="h-6 w-6 text-gray-500" />
            <span>Gabriella Lopez</span>
            <span>12 €</span>
          </div>
          <div className="flex items-center justify-between">
            <UserGroupIcon className="h-6 w-6 text-gray-500" />
            <span>Jawad Abbas</span>
            <span>7 €</span>
          </div>
          <div className="flex items-center justify-between">
            <UserGroupIcon className="h-6 w-6 text-gray-500" />
            <span>Amanda Wallace</span>
            <span>7 €</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
