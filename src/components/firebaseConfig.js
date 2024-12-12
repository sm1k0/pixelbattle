import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Импорт для работы с базой данных
import { getAnalytics } from "firebase/analytics"; // Импорт для работы с аналитикой

const firebaseConfig = {
  apiKey: "AIzaSyD4tLwmYTqcFYejtRSTcwLX5qcJNReQBaw",
  authDomain: "pixelbattle-79451.firebaseapp.com",
  databaseURL: "https://pixelbattle-79451-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "pixelbattle-79451",
  storageBucket: "pixelbattle-79451.firebasestorage.app",
  messagingSenderId: "743570256301",
  appId: "1:743570256301:web:186aa44a9f6ef4d838f124",
  measurementId: "G-281V14THKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Инициализация базы данных
const database = getDatabase(app);

// Инициализация аналитики
const analytics = getAnalytics(app);

export { app, database, analytics };
