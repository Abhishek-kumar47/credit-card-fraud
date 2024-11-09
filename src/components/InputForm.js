import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useExcelData from "../utils/useExcelData";
import Header from "./Header";

function InputForm() {
  const navigate = useNavigate();
  const dataFromExcel = useExcelData("../assets/Dataset.xlsx"); // Replace with the actual path

  const [formData, setFormData] = useState({
    amount: "",
    cardBalance: "",
    merchant: "",
    category: "",
    state: "",
    job: "",
    gender: "",
    cardNumber: "" // Updated to cardNumber
  });

  const [error, setError] = useState(""); // State to hold the error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateCardNumber = (cardNumber) => {
    // Check if the card number is between 9 to 16 digits
    const regex = /^[0-9]{9,16}$/;
    return regex.test(cardNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the card number
    if (!validateCardNumber(formData.cardNumber)) {
      setError("Card number must be between 9 and 16 digits.");
      return;
    }

    // Clear any previous error
    setError("");

    // Navigate to the dashboard page with formData as state
    navigate("/dashboard", { state: { formData } });
  };

  return (
    <div className="h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
      <Header />
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-lg rounded-lg space-y-6 mt-12"
      >
        <h2 className="text-2xl font-semibold text-white text-center">Input Form</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 mb-1">Amount</label>
            <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Card Balance</label>
            <input
              type="number"
              name="cardBalance"
              placeholder="Enter card balance"
              value={formData.cardBalance}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Merchant</label>
            <input
              type="text"
              name="merchant"
              placeholder="Enter merchant name"
              value={formData.merchant}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Enter category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">State</label>
            <input
              type="text"
              name="state"
              placeholder="Enter state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Job</label>
            <input
              type="text"
              name="job"
              placeholder="Enter job title"
              value={formData.job}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="Enter card number"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-600 text-white"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-600 text-white"
          >
            <option value="">Select Gender</option>
            <option value="M">M</option>
            <option value="F">F</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputForm;
