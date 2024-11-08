import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import Dataset from "../assets/Dataset.xlsx";
const useExcelData = (filePath) => {
  const [dataFromExcel, setDataFromExcel] = useState([]);

  useEffect(() => {
    const fetchExcelData = async () => {
      try {
        const response = await fetch(Dataset);
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setDataFromExcel(jsonData);
      } catch (error) {
        console.error("Error reading the Excel file:", error);
      }
    };

    fetchExcelData();
  }, [Dataset]);

  return dataFromExcel;
};

export default useExcelData;
