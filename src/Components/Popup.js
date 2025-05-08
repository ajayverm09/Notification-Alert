import React from "react";

function Popup({ formData, handleInputChange, handleSubmit, onClose, show }) {
  if (!show) return null;

  return (
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
              onClick={onClose}
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
  );
}

export default Popup;
