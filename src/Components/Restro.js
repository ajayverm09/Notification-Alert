import React from "react";
import Footer from './Footer'
import Project from "./Project";
import Restroslider from "./Restroslider"
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

export default function RestaurantUI() {
  return (
    <div className="font-sans">
     
      <nav className="bg-white shadow-md p-4 flex justify-between place-items-center items-center fixed top-0 w-full z-50">
        <h1 className="text-2xl font-bold text-red-500">Foodie's Hub</h1>
        <ul className="flex gap-6 text-gray-700 ml-60 flex">
          <li><a href="/" className="hover:text-red-500">Home</a></li>
          <li><a href="./menu" className="hover:text-red-500">Menu</a></li>
          <li><a href="#" className="hover:text-red-500">About</a></li>
          <li><a href="#" className="hover:text-red-500">Contact</a></li>
          <li className="w-10"><Project/></li>
        </ul>
      </nav>

      <section className="bg-[url('#')]bg-cover bg-center h-[400px] -mt-10 -mb-24  flex items-center justify-center">
        <div className="bg-slate-500 bg-opacity-50 p-10 rounded-lg text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Welcome to Foodie's Hub</h2>
          <p className="text-lg">Delicious meals, fast delivery, happy stomach!</p>
        </div>
      </section>
      <Restroslider/>

      
      <section className="p-10">
        <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">Featured Dishes</h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {dishes.map((dish) => (
            <div key={dish.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-800">{dish.name}</h4>
                <p className="text-gray-600 text-sm">{dish.description}</p>
                <div className="mt-2 text-red-500 font-bold">{dish.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
      {/* <footer className="bg-gray-100 p-6 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Foodie's Hub. All rights reserved.
      </footer> */}

    </div>
  );
}
