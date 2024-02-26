import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { MenuIcon } from '@heroicons/react/outline';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative md:flex">
      {/* Overlay effect when menu is open */}
      <div
        className={`${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu content */}
      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className="fixed right-0 top-0 w-64 h-full z-50 shadow bg-white overflow-auto"
      >
        {/* Menu header */}
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setIsMenuOpen(false)}>
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        {/* Menu items */}
        <nav>
          <ul>
            <li>hello</li>
            <li>holla</li>
          </ul>
        </nav>
      </Transition>

      {/* Page content */}
      <div className="flex justify-end">
        <button onClick={() => setIsMenuOpen(true)}>
          <MenuIcon className="h-6 w-6" />
        </button>
        {/* Rest of the page content */}
      </div>
    </div>
  );
};

export default Header;