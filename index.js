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
  createUserWithEmailAndPassword,
  sendEmailVerification,
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

function signout() {
  localStorage.removeItem("user-parser");
  window.location.href = "authentication.html";
}
const addstudent_btn = document.getElementById("addstudent_btn");
addstudent_btn.addEventListener("click", (event) => {
  var email = document.getElementById("email_txt").value;
  var fullname = document.getElementById("fullname_txt").value;
  var id = document.getElementById("id_txt").value;

  set(ref(database, "PARSEIT/STUDENTS/USERS/" + id), {
    email: email,
    id: id,
    fullname: fullname,
    birthday: "",
    username: username,
    verified: false,
  });

  var email = (document.getElementById("email_txt").value = "");
  var fullname = (document.getElementById("fullname_txt").value = "");
  var id = (document.getElementById("id_txt").value = "");
});
