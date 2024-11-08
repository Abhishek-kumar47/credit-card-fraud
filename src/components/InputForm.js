import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function InputForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    amount: "",
    cardBalance: "",
    merchant: "",
    category: "",
    state: "",
    job: "",
    gender: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard", { state: { formData } });
  };

  return (
    <div>
      <Header/>
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-700 text-center">Input Form</h2>
      
      <div>
        <label className="block text-gray-600 mb-1">Amount</label>
        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-600 mb-1">Card Balance</label>
        <input
          type="number"
          name="cardBalance"
          placeholder="Enter card balance"
          value={formData.cardBalance}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-600 mb-1">Merchant</label>
        <input
          type="text"
          name="merchant"
          placeholder="Enter merchant name"
          value={formData.merchant}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-600 mb-1">Category</label>
        <input
          type="text"
          name="category"
          placeholder="Enter category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-600 mb-1">State</label>
        <input
          type="text"
          name="state"
          placeholder="Enter state"
          value={formData.state}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-600 mb-1">Job</label>
        <input
          type="text"
          name="job"
          placeholder="Enter job title"
          value={formData.job}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-600 mb-1">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
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
