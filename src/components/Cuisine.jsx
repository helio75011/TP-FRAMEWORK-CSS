// file: /components/StaffList.jsx

import React, { useState } from 'react';

const staffMembers = [
  { name: 'Agnes Liles', selected: false },
  { name: 'Kenneth Burnett', selected: false },
  { name: 'Gabriella Lopez', selected: false },
  { name: 'Jawad Abbas', selected: false },
  { name: 'Abdel-Kader Khelfoun', selected: false },
  { name: 'Fabrice Piel', selected: false },
];

const Cuisine = () => {
  const [staff, setStaff] = useState(staffMembers);

  const toggleSelection = (index) => {
    const newStaff = [...staff];
    newStaff[index].selected = !newStaff[index].selected;
    setStaff(newStaff);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-700">Qui travaille aujourd'hui ?</h2>
        <div>
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full mr-2">salle</button>
          <button className="bg-orange-500 text-white py-1 px-3 rounded-full mr-2">cuisine</button>
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full">service</button>
        </div>
      </div>
      <div className="space-y-2">
        {staff.map((member, index) => (
          <div key={member.name} className="flex items-center justify-between">
            <span className="text-gray-800">{member.name}</span>
            <button
              onClick={() => toggleSelection(index)}
              className={`p-2 rounded-full ${member.selected ? 'bg-orange-500' : 'bg-gray-200'}`}
            >
              {member.selected ? '✓' : ''}
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-orange-500 text-white py-2 px-6 rounded-full">Suivant</button>
      </div>
    </div>
  );
};

export default Cuisine