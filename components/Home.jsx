import React from 'react';

const Home = () => {
  return (
    <div className="bg-black-500 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black/70 text-white py-20" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)",  backgroundImage: "url('https://images.unsplash.com/photo-1682685797527-63b4e495938f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="container mx-auto text-center p-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Mindful Manifesters</h1>
          <p className="text-lg">
            Empowering our community through mindfulness.
          </p>
        </div>
      </div>

      {/* Featured Products/Services Section */}
      <div className="container mx-auto my-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product/Service Card 1 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2">Mindful Journal</h3>
            <p className="text-gray-600 mb-4">
              Start your mindfulness journey with our beautifully designed journal.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">
              Learn More
            </button>
          </div>

          {/* Product/Service Card 2 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2">Guided Meditation Sessions</h3>
            <p className="text-gray-600 mb-4">
              Join our guided meditation sessions to find peace and balance in your life.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">
              Learn More
            </button>
          </div>

          {/* Product/Service Card 3 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2">Mindfulness Workshops</h3>
            <p className="text-gray-600 mb-4">
              Dive deeper into mindfulness with our interactive workshops and events.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">
              Learn More
            </button>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default Home;
