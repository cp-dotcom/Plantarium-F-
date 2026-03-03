// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDqyuR9gQhEXxm7L1KC34XBNetYnZOYOcw",
    authDomain: "plantarium-23eb8.firebaseapp.com",
    projectId: "plantarium-23eb8",
    storageBucket: "plantarium-23eb8.firebasestorage.app",
    messagingSenderId: "34552125248",
    appId: "1:34552125248:web:2c699fee8d3cdfa0eb0ca5",
    measurementId: "G-ZV9F0TJVEF"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);