// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnsS9xqoxIXa1DrZKd2g0Xp1u6sQnlxek",
  authDomain: "credit-card-fraud-detect-59a76.firebaseapp.com",
  projectId: "credit-card-fraud-detect-59a76",
  storageBucket: "credit-card-fraud-detect-59a76.appspot.com",
  messagingSenderId: "606324308258",
  appId: "1:606324308258:web:4d7f18bcc78f08d43e0d7b",
  measurementId: "G-98MH1343MX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);