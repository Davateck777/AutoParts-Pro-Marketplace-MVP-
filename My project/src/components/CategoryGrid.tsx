import React from 'react';
import { Battery, Gauge, Cpu, Cog, Wrench, Zap } from 'lucide-react';

const CategoryGrid = () => {
  const categories = [
    { name: 'EV Components', icon: Battery, count: 1243 },
    { name: 'Sensors & ECUs', icon: Cpu, count: 3521 },
    { name: 'Engine Parts', icon: Cog, count: 5632 },
    { name: 'Diagnostic Tools', icon: Gauge, count: 892 },
    { name: 'Mechanical Parts', icon: Wrench, count: 4267 },
    { name: 'Electrical Systems', icon: Zap, count: 2198 }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count.toLocaleString()} products</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryGrid;