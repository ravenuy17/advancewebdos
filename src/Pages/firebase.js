// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRZHUc8cYHlj8LxRSy0ooe6Zs79S3LmAk",
  authDomain: "advancewebdos.firebaseapp.com",
  projectId: "advancewebdos",
  storageBucket: "advancewebdos.appspot.com",
  messagingSenderId: "290583264091",
  appId: "1:290583264091:web:b2786e33a0d7845b97787e",
  measurementId: "G-QEFPXRK4SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default storage;