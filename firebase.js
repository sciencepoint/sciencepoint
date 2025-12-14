// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBIVoGtqCGOw6ZaMDOwUake-0MjijKUFYs",
    authDomain: "authentication-d9fdd.firebaseapp.com",
    projectId: "authentication-d9fdd",
    storageBucket: "authentication-d9fdd.firebasestorage.app",
    messagingSenderId: "685024899780",
    appId: "1:685024899780:web:00f000c3514d439b6b4f91",
    measurementId: "G-P5RDXYX1B2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
