import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChXyd3NA3o_FHjB1REpYJC5q86I8r48Vk",
  authDomain: "eccomerse-a1ad6.firebaseapp.com",
  projectId: "eccomerse-a1ad6",
  storageBucket: "eccomerse-a1ad6.appspot.com",
  messagingSenderId: "689958605570",
  appId: "1:689958605570:web:fe6c0559fb07b59a6be81b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
