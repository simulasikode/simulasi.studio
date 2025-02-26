// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// create .env.local
const firebaseConfig = {
  apiKey: "AIzaSyBOP3UhZ2B-7naisuTn1JDfqHGbZ8HmzM8",
  authDomain: "studios-9c34c.firebaseapp.com",
  projectId: "studios-9c34c",
  storageBucket: "studios-9c34c.firebasestorage.app",
  messagingSenderId: "228696722817",
  appId: "1:228696722817:web:72d572a227fd49fb40ec80",
  measurementId: "G-5D5QGRPLJV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics = null; // Initialize to null

if (process.env.NODE_ENV === "production") {
  analytics = getAnalytics(app);
} else {
  console.log("Firebase Analytics disabled in development.");
}

// Example of using analytics (check if it's initialized)
if (analytics) {
  // Assuming you have logEvent defined somewhere
  logEvent(analytics, "page_view", { page_title: document.title });
}
