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

const signin = document.getElementById("signin_btn");
signin.addEventListener("click", (event) => {
  var email = document.getElementById("username_txt").value;
  var password = document.getElementById("password_txt").value;

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
    localStorage.setItem("user-parser", email);
    window.location.href = "index.html";
  });
});
