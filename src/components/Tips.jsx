import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const Tips = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [tip, setTip] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle the submit logic here...
      setShowSuccessMessage(true);
      // To automatically hide the message after a few seconds you could use:
      // setTimeout(() => setShowSuccessMessage(false), 3000);
  };
  return (
    <div className="bg-white p-4">
        {showSuccessMessage && (
          <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg flex items-center" role="alert">
            <CheckCircleIcon className="w-5 h-5 mr-2"/>
            Le pourboire a bien été ajouté
          </div>
        )}
        <div className="text-center mb-4">
          <p className="text-gray-500 text-sm">Jeudi, 21 avr</p>
          <h1 className="text-2xl font-bold">Ajouter un pourboire</h1>
        </div>

        <form className="space-y-4">
            <div>
              <label htmlFor="tableName" className="block text-sm font-medium text-gray-700">Nom de table</label>
              <input type="text" id="tableName" name="tableName" placeholder="cerise" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>

            <div>
              <label htmlFor="tipAmount" className="block text-sm font-medium text-gray-700">Montant du pourboire</label>
              <input type="number" id="tipAmount" name="tipAmount" placeholder="3" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>

            <div className="flex justify-between">
              <button type="button" className="border border-red-500 text-red-500 rounded-full px-4 py-1">0.50</button>
              <button type="button" className="border border-red-500 text-red-500 rounded-full px-4 py-1">1.00</button>
              <button type="button" className="border border-red-500 text-red-500 rounded-full px-4 py-1">2.00</button>
            </div>

            <button type="submit" className="w-full bg-orange-500 text-white p-3 rounded-lg">Ajouter le pourboire</button>
        </form>
    </div>

  );
};

export default Tips;