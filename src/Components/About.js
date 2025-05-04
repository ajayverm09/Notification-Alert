import React from "react";

 function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto p-8 pt-20">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-6">About Foodie's Hub</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Where every meal is a celebration of flavors, freshness, and fantastic service. Welcome to Foodie's Hub — your ultimate food destination!
      </p>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-700 leading-7">
          Established in 2020, Foodie's Hub began with a simple mission — to bring delicious, hygienic, and affordable meals to everyone.
          From humble beginnings in a small kitchen, we’ve grown into one of the most loved food destinations in the city.
          Our chefs craft each dish with passion and the finest ingredients, ensuring every bite delivers an unforgettable taste.
        </p>
        <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9" alt="Our Story" className="w-full h-80 object-cover rounded-xl mt-6 shadow-lg" />
      </section>

      <section className="mb-20 flex flex-col md:flex-row items-center gap-10">
        <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2" alt="Mission" className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-lg" />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-7">
            To serve happiness through mouth-watering dishes and exceptional customer service.
            We are committed to maintaining high standards of hygiene, using fresh produce, and delivering food right to your doorstep with love.
          </p>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Meet Our Master Chefs 👨‍🍳👩‍🍳</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Our talented chefs blend tradition and innovation to create dishes that excite your taste buds.
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {[
            { name: "Chef Arjun Mehra", img: "https://randomuser.me/api/portraits/men/32.jpg", specialty: "North Indian & Tandoor" },
            { name: "Chef Riya Kapoor", img: "https://randomuser.me/api/portraits/women/44.jpg", specialty: "Italian & Continental" },
            { name: "Chef Aman Khan", img: "https://randomuser.me/api/portraits/men/65.jpg", specialty: "Chinese & Street Food" },
          ].map((chef, index) => (
            <div key={index} className="text-center">
              <img src={chef.img} alt={chef.name} className="w-40 h-40 object-cover rounded-full mx-auto shadow-md hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mt-4">{chef.name}</h3>
              <p className="text-gray-500">{chef.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-red-50 p-10 rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold text-red-500 mb-4 text-center">Why Choose Foodie's Hub? ❤️</h2>
        <ul className="text-gray-700 space-y-4 text-lg max-w-3xl mx-auto">
          <li>✅ Fresh and hygienic ingredients, every time</li>
          <li>✅ Experienced chefs with passion for food</li>
          <li>✅ Affordable prices and regular offers</li>
          <li>✅ Quick delivery right to your doorstep</li>
          <li>✅ 1000+ happy customers served daily</li>
        </ul>
      </section>
    </div>
  );
}
export default AboutUs;