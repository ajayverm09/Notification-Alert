import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(`Thank you for contacting us, ${formData.name}!`, {
      position: "top-right",
      autoClose: 5000,
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto p-8 pt-24">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-8">
        📞 Contact Us
      </h1>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
        
        <div>
          <img
            src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"
            alt="Contact Us"
            className="w-full rounded-xl shadow-lg"
          />
          <div className="mt-6 space-y-3 text-gray-700 text-lg">
            <p><strong>📍 Address:</strong> 123 Foodie's Street, Delhi, India</p>
            <p><strong>📧 Email:</strong> support@foodieshub.com</p>
            <p><strong>📞 Phone:</strong> +91 9876543210</p>
            <p><strong>⏰ Hours:</strong> Mon - Sun: 10 AM - 11 PM</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Send Us a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-3 rounded hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Contact;
