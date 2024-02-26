import React from 'react';
import { UserIcon, ClipboardListIcon } from '@heroicons/react/solid'; // Ensure you have @heroicons/react installed

const AddUser = () => {
  return (
    <div className="bg-white p-4">
      <div className="text-center mb-4">
        <p className="text-gray-500 text-sm">Jeudi, 21 avr</p>
        <h1 className="text-2xl font-bold">Ajout d'employés</h1>
      </div>

      <form className="space-y-4">
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom</label>
          <input type="text" id="lastName" name="lastName" placeholder="Vox" className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
        </div>

        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom</label>
          <input type="text" id="firstName" name="firstName" placeholder="Lana" className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
        </div>

        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Poste occupé</label>
          <div className="mt-1 flex items-center space-x-2">
            <button type="button" className="flex items-center px-4 py-2 border border-red-300 text-red-500 rounded-md">
              <ClipboardListIcon className="h-5 w-5" />
              <span className="ml-2">Serveur</span>
            </button>
            {/* Add other job title buttons if necessary */}
          </div>
        </div>

        <div className="flex space-x-2 justify-center">
          {/* Icons or buttons for additional actions */}
          <UserIcon className="h-8 w-8 text-gray-400" />
          {/* Add other icons or buttons here */}
        </div>
      </form>
    </div>
  );
};

export default AddUser;
