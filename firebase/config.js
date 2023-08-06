// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDaGmbCXOnpseGkGibqw3GoJCmrqBrBL7o",
  authDomain: "postsapp-cf0f9.firebaseapp.com",
  databaseURL: "https://postsapp-cf0f9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "postsapp-cf0f9",
  storageBucket: "postsapp-cf0f9.appspot.com",
  messagingSenderId: "462405307578",
  appId: "1:462405307578:web:d5e6a620b090a59fe50683",
  measurementId: "G-Z17QLLMSF7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);