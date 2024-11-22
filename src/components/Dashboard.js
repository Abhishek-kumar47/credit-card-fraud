import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as XLSX from "xlsx";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // Automatically register all charts

const Dashboard = () => {
  const location = useLocation();
  const { formData } = location.state;
  const [excelData, setExcelData] = useState([]);
  const ci_lower = 0;
  const ci_upper = 8;
  
  const weights = {
    Amount: 0.4,
    CardBalance: 0.4,
    Merchant: 0.04,
    Category: 0.04,
    State: 0.04,
    Job: 0.04,
    Gender: 0.04,
  };
  
  const fetchData = async () => {
    try {
      const response = await fetch("../assets/Dataset.xlsx");
      const data = await response.arrayBuffer();
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setExcelData(jsonData);
    } catch (error) {
      console.error("Error reading excel file", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const computeProbability = () => {
    let totalWeight = 0;

    if (ci_lower <= formData.amount && formData.amount <= ci_upper) {
      totalWeight += weights.Amount;
    }

    if (formData.cardBalance <= formData.amount) {
      totalWeight += weights.CardBalance;
    }

    const categoricalMatch = ["Merchant", "Category", "State", "Job", "Gender"];
    categoricalMatch.forEach((col) => {
      if (excelData.some((row) => row[col] === formData[col.toLowerCase()])) {
        totalWeight += weights[col];
      }
    });

    return Math.min(totalWeight * 100, 100);
  };

  const fraudProbability = computeProbability();
  const isFraud = fraudProbability >= 50;

  const barData = {
    labels: ["Amount", "Card Balance"],
    datasets: [
      {
        label: "Amount",
        data: [formData.amount],
        backgroundColor: "orange",
      },
      {
        label: "Card Balance",
        data: [formData.cardBalance],
        backgroundColor: formData.cardBalance < formData.amount ? "red" : "green",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Fraud Prediction Dashboard</h2>

      <div className="mb-8">
        <p className="text-lg">Fraud Probability: {fraudProbability.toFixed(2)}%</p>
        <p className="text-lg">
          Fraud Prediction: {isFraud ? "Fraud Detected" : "No Fraud Detected"}
        </p>
      </div>

      <div className="flex flex-wrap gap-8">
        <div className="w-full md:w-1/2 p-4 bg-gray-800 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-center">Amount vs Card Balance</h3>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
