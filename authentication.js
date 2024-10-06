import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNN-CCOtBwaFjaOtZ36FPB2-bAsM4Nnpc",
  authDomain: "parseit-teamfive.firebaseapp.com",
  databaseURL:
    "https://parseit-teamfive-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "parseit-teamfive",
  storageBucket: "parseit-teamfive.appspot.com",
  messagingSenderId: "810867276473",
  appId: "1:810867276473:web:f5d8f25b1e810eb13db968",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Get modal elements
const modal = document.getElementById("errorModal");
const closeModal = document.getElementById("closeModal");
const errorMessage = document.getElementById("errorMessage");

// Function to show the error modal
function showError(message) {
    errorMessage.textContent = message; // Set the error message
    modal.style.display = "block"; // Show the modal
}

// Close the modal when the close button is clicked
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const signin = document.getElementById("signin_btn");
signin.addEventListener("click", (event) => {
  var email = document.getElementById("username_txt").value;
  var password = document.getElementById("password_txt").value;

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
    localStorage.setItem("user-parser", email);
    window.location.href = "index.html";
  }) .catch((error) => {
    // Handle Firebase error codes
    const errorCode = error.code;

    let message = ""; // Initialize message variable
    if (errorCode === "auth/missing-password") {
        message = "Please enter your password.";  // Show missing password error
    }
    else if (errorCode === "auth/invalid-email") {
        message = "The email address is not valid.";  // Show invalid email error
    }
    else if (errorCode === "auth/wrong-password" || errorCode === "auth/user-not-found") {
        message = "The email or password is incorrect.";  // Show credentials mismatch error
    }
    else if (errorCode === "auth/invalid-credential") {
        message = "Invalid credentials provided."; // Show invalid credentials error
    }

    if (message) {
        showError(message); // Show the error message in the modal
    }
  });
});
