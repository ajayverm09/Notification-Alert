import React, { useState } from "react";
import Footer from './Footer';
import Restroslider from "./Restroslider";

const dishes = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic delight with 100% real mozzarella cheese",
    price: "Rs.109",
    image: "https://cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg",
  },
  {
    id: 2,
    name: "Veg Burger",
    description: "Juicy veggie patty with fresh lettuce and tomatoes",
    price: "Rs.99",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Secret-Veg-Cheeseburgers-c981dd6.jpg",
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    description: "Creamy Alfredo sauce with penne pasta",
    price: "Rs.119",
    image: "https://www.sharmispassions.com/wp-content/uploads/2015/12/alfredopasta5-500x500.jpg",
  },
  {
    id: 4,
    name: " Spicy Ramen Bowl",
    description: " Japanese-style noodles served in a flavorful broth with boiled eggs, sautéed mushrooms, spring onions, and a hint of chili oil.",
    price: "Rs.299",
    image: "https://dishingouthealth.com/wp-content/uploads/2022/01/SpicyMisoRamen_Square.jpg",
  },
  {
    id: 5,
    name: "Paneer Tikka Wrap",
    description: "Grilled paneer cubes marinated in Indian spices, wrapped in a soft tortilla with fresh veggies and tangy mint chutney.",
    price: "Rs.399",
    image: "https://shreyaskitchen.com/wp-content/uploads/2024/04/paneer-tikka-roll-1.jpg",
  },
  {
    id: 6,
    name: "Classic Veggie Burger",
    description: "A wholesome patty made of chickpeas, peas, and potatoes, layered with lettuce, onions, tomatoes, and a creamy sauce in a toasted bun",
    price: "Rs.149",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzWy7OPxUyd9ukRai5OUxjKMJspbM8gV2zTQ&s",
  }
];

function Restaurant() {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div className="font-sans">
      <section className="bg-[url('#')] bg-cover bg-center h-[400px] -mt-10 -mb-24 flex items-center justify-center">
        <div className="bg-slate-500 bg-opacity-50 p-10 rounded-lg text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Welcome to Foodie's Hub</h2>
          <p className="text-lg">Delicious meals, fast delivery, happy stomach!</p>
        </div>
      </section>

      <Restroslider />

      <section className="p-10">
        <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">Featured Dishes</h3>

        {selectedDish ? (
          <div className="grid md:grid-cols-2 gap-6 items-start">
           
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={selectedDish.image} alt={selectedDish.name} className="w-full h-[400px] object-cover" />
              <div className="p-4">
                <h4 className="text-2xl font-semibold text-gray-800">{selectedDish.name}</h4>
                <p className="text-gray-600">{selectedDish.description}</p>
                <div className="mt-2 text-red-500 font-bold">{selectedDish.price}</div>
                <button
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => setSelectedDish(null)}
                >
                  Close
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-700">You may also like</h4>
              <div className="grid grid-cols-1 gap-4">
                {dishes.filter(dish => dish.id !== selectedDish.id).slice(0, 5).map((dish) => (
                  <div
                    key={dish.id}
                    className="flex items-center space-x-4 cursor-pointer hover:bg-gray-100 p-2 rounded"
                    onClick={() => setSelectedDish(dish)}
                  >
                    <img src={dish.image} alt={dish.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h5 className="font-semibold text-gray-800">{dish.name}</h5>
                      <p className="text-sm text-gray-600">{dish.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
         
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {dishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedDish(dish)}
              >
                <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-800">{dish.name}</h4>
                  <p className="text-gray-600 text-sm">{dish.description}</p>
                  <div className="mt-2 text-red-500 font-bold">{dish.price}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default Restaurant;
