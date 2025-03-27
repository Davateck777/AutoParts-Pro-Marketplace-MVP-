import React from 'react';
import { Menu, Bell, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">AutoParts Pro</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Marketplace</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Suppliers</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Orders</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <User className="w-5 h-5" />
            </button>
            <button className="md:hidden p-2 text-gray-400 hover:text-gray-600">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;