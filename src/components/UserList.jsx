import React from 'react';
import { IoPersonOutline, IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

const UserList = ({ selectedCategory }) => {
    const data = {
        salle: [
          { id: 1, name: "Aaron James", checked: false },
          { id: 2, name: "Amanda Wallace", checked: false },
          { id: 3, name: "Angela Danger", checked: true },
          { id: 4, name: "Abella White", checked: false },
          { id: 5, name: "Darlene Robertson", checked: true },
          { id: 6, name: "Fred Davis", checked: false },
        ],
        cuisine: [
          { id: 1, name: "Paul", checked: false },
          { id: 2, name: "Mia", checked: false },
          { id: 3, name: "Miaouss", checked: true },
          { id: 4, name: "Rome", checked: false },
          { id: 5, name: "Melo", checked: true },
          { id: 6, name: "Fredo", checked: false },
        ],
        service: [
          { id: 1, name: "Pika", checked: false },
          { id: 2, name: "Mel", checked: false },
          { id: 3, name: "Vatira", checked: true },
          { id: 4, name: "Zen", checked: false },
          { id: 5, name: "Hello", checked: true },
          { id: 6, name: "Julius", checked: false },
        ],
    };

    const filteredData = data[selectedCategory] || [];

    // This function could be passed down to toggle the check state in a real scenario
    // For now, it's just a placeholder
    const toggleCheck = (id) => {
        console.log('Toggled', id);
    };

  return (
    <div className="bg-white shadow rounded-lg p-6">
        <div className="divide-y divide-gray-300">
            {filteredData.map((item) => (
                <div key={item.id} className={`flex items-center p-4 ${item.checked ? 'bg-yellow-200' : ''}`}>
                    <div className="bg-red-100 p-2 rounded-full mr-2">
                        <IoPersonOutline className="text-red-500 text-xl" />
                    </div>
                    <span className="flex-grow font-medium px-2">{item.name}</span>
                    <button onClick={() => toggleCheck(item.id)} className="transform scale-125">
                        {item.checked ? (
                            <IoCheckboxOutline className="text-green-500 text-xl" />
                        ) : (
                            <IoSquareOutline className="text-gray-300 text-xl" />
                        )}
                    </button>
                </div>
            ))}
        </div>

        <div className="p-4">
            <button className="w-full bg-orange-500 text-white p-3 rounded-lg">Suivant</button>
        </div>
    </div>
    );
};

export default UserList;