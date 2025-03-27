import React from 'react';

const FeaturedParts = () => {
  const parts = [
    {
      id: 1,
      name: 'EV Battery Pack',
      manufacturer: 'BOSCH',
      partNumber: 'BOSCH-0261230001',
      image: 'https://images.unsplash.com/photo-1601158935942-52255782d322?auto=format&fit=crop&w=400',
      price: '2,499.99',
      stock: 23
    },
    {
      id: 2,
      name: 'Brake System Sensor',
      manufacturer: 'Continental',
      partNumber: 'CON-ABS-2234',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=400',
      price: '89.99',
      stock: 156
    },
    {
      id: 3,
      name: 'Engine Control Module',
      manufacturer: 'Denso',
      partNumber: 'DEN-ECM-9981',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=400',
      price: '299.99',
      stock: 42
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Parts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {parts.map(part => (
          <div key={part.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src={part.image}
              alt={part.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">{part.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{part.manufacturer}</p>
              <p className="text-sm text-gray-500 mb-4">Part #: {part.partNumber}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">€{part.price}</span>
                <span className={`text-sm ${part.stock > 50 ? 'text-green-600' : 'text-orange-600'}`}>
                  {part.stock} in stock
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedParts;