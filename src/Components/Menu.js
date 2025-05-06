import React, { useState } from "react";
import {toast,ToastContainer } from "react-toastify";
const menuItems = [ 
  
  { id: 1, name: "Margherita Pizza", price: 199, img: "https://cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg" },
  { id: 2, name: "Paneer Tikka", price: 249, img: "https://shreyaskitchen.com/wp-content/uploads/2024/04/paneer-tikka-roll-1.jpg" },
  { id: 3, name: "Veg Burger", price: 149, img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Secret-Veg-Cheeseburgers-c981dd6.jpg" },
  { id: 4, name: "Chicken Biryani", price: 299, img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" },
  { id: 5, name: "Masala Dosa", price: 99, img: "https://palatesdesire.com/wp-content/uploads/2022/09/Mysore-masala-dosa-recipe@palates-desire-500x500.jpg" },
  { id: 6, name: "Pasta Alfredo", price: 189, img: "https://www.sharmispassions.com/wp-content/uploads/2015/12/alfredopasta5-500x500.jpg" },
  { id: 7, name: "Spring Rolls", price: 129, img: "https://d1mxd7n691o8sz.cloudfront.net/static/recipe/recipe/2023-12/Vegetable-Spring-Rolls-2-1-906001560ca545c8bc72baf473f230b4_thumbnail_170.jpeg" },
  { id: 8, name: "Cheese Garlic Bread", price: 89, img: "https://therecipecritic.com/wp-content/uploads/2020/02/cheesy_garlic_bread.jpg" },

  { id: 9, name: "Tandoori Chicken", price: 279, img: "https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg" },
  { id: 10, name: "Dal Makhani", price: 179, img: "https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog.jpg" },
  { id: 11, name: "Butter Naan", price: 40, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butter-naan.jpg" },
  { id: 12, name: "Pav Bhaji", price: 109, img: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/02/01171428/YFL-Pav-Bhaji-3.jpg" },

  
  { id: 13, name: "Gulab Jamun", price: 79, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aJrkMZfZWaRkqQu36Y9TBzYlCrkKHvy7mw&s" },
  { id: 14, name: "Ice Cream Sundae", price: 129, img: "https://www.detroitnews.com/gcdn/presto/2022/06/27/PDTN/8c538779-a62e-4b4d-bc18-8213f8df6298-food-icecream-7784994a-f3f2-11ec-a9c7-cbc274649d15.jpg" },
  { id: 15, name: "Fruit Salad", price: 99, img: "https://www.allrecipes.com/thmb/ggbf50E1-B3B6oFCfS2zq_O0pe4=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/14147very-easy-fruit-saladChefMo4x3-07a6310c2aab4726a1a8bef08061abfa.jpg" },

 
  { id: 16, name: "Cold Coffee", price: 99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR331FC1GRa844z77pMi05Oy-fLPYNOe5qjIA&s" },
  { id: 17, name: "Lemon Mojito", price: 89, img: "https://yogaofcooking.co/wp-content/uploads/2020/06/mojito-3.jpg" },
  { id: 18, name: "Mango Lassi", price: 79, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS22285ztkaIeZOUAzL_gF1vuYXYMbBgK1EYA&s" } ];

  function Menu() {
  const [order, setOrder] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    pincode: "",
    payment: "Cash On Delivery (COD)",
  });

  const handleOrder = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder([...order, selectedItem]);
    setShowPopup(false);
    toast.success(`✅ Order Placed for "${selectedItem.name}"!`, {
      position: "top-right",
      autoClose: 5000,
    });
    setFormData({
      name: "",
      mobile: "",
      address: "",
      pincode: "",
      payment: "Cash On Delivery (COD)",
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">User Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                maxLength="10"
                pattern="[0-9]{10}"
                required
                className="w-full p-2 border rounded"
              />
              <textarea
                name="address"
                type="text"
                placeholder="Full Address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="tel"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                maxLength="6"
                pattern="[0-9]{6}"
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="payment"
                value={formData.payment}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    
      <div>
      <h1 className="text-4xl font-bold pt-20 text-center mb-10 text-red-500">🍽️ Our Delicious Menu</h1>
      
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-gray-500 text-lg mb-4">₹{item.price}</p>
              <button
                onClick={() => handleOrder(item)}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <ToastContainer/>
    </div>
  );
}
export default Menu;