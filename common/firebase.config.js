// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB_XTPdQTi9UrBw2ard1-YW1Mp9NrvV2w",
  authDomain: "ford-nmt.firebaseapp.com",
  databaseURL:
    "https://ford-nmt-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ford-nmt",
  storageBucket: "ford-nmt.appspot.com",
  messagingSenderId: "898819364033",
  appId: "1:898819364033:web:0c81b33b77ce4f7ee07040",
  measurementId: "G-N4F9R78B6Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);

export const dbCollection = {
  products: "products",
  news: "news",
};

export const dbProducts = collection(database, dbCollection.products);
export const dbNews = collection(database, dbCollection.news);
