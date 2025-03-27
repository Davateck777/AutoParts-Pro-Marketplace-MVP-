import React from 'react';
import { Search, Package, Truck, BarChart3, Settings, ShieldCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import FeaturedParts from './components/FeaturedParts';
import CategoryGrid from './components/CategoryGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Trusted B2B Auto Parts Marketplace
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Connect with verified suppliers, streamline procurement, and manage your inventory efficiently.
            </p>
            <SearchBar />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <Package className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">50,000+</h3>
                <p className="text-gray-600">Parts Available</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <Truck className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">24-48h</h3>
                <p className="text-gray-600">Fast Delivery</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">100%</h3>
                <p className="text-gray-600">Verified Suppliers</p>
              </div>
            </div>
          </div>
        </div>

        <FeaturedParts />
        <CategoryGrid />
      </main>
    </div>
  );
}

export default App;