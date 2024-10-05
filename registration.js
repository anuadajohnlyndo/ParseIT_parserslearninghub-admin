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

// FOR EMAIL VERIFICATION
(function () {
  emailjs.init({
    publicKey: "8FZVk4TobsyaJxcCJ",
  });
})();

//Sign up admin account
const next = document.getElementById("next_btn");
next.addEventListener("click", (event) => {
  var id = document.getElementById("username_txt").value;
  var email = document.getElementById("email_txt").value;

  function generateUniqueID() {
    return Math.random().toString(36).substr(2, 5); // Example: user_x1kz9g23f
  }
  var code = generateUniqueID();

  set(ref(database, "PARSEIT/ADMINS/USERS/" + id), {
    userid: id,
    email: email,
    verificationcode: code,
  });

  // FOR EMAIL VERIFICATION
  emailjs.send("service_g8cli5d", "template_b0rhzue", {
    message: code,
    email_id: email,
    to_name: email,
  });

  document.getElementById("current_verify_email").innerHTML = email;
  document.getElementById("current_confirm_email").innerHTML = email;

  const div_signup_container = document.getElementById("div_signup_container");
  div_signup_container.style.display = "none";
  const div_verify_container = document.getElementById("div_verify_container");
  div_verify_container.style.display = "flex";
});

const next1 = document.getElementById("next1_btn");
next1.addEventListener("click", (event) => {
  const dbRef = ref(database);
  var id = document.getElementById("username_txt").value;
  get(child(dbRef, "PARSEIT/ADMINS/USERS/" + id)).then((snapshot) => {
    if (snapshot.exists()) {
      if (snapshot.val().verificationcode == null) {
      } else {
        const input_code = document.getElementById("verification_txt").value;
        if (input_code == snapshot.val().verificationcode) {
          const div_signup_container = document.getElementById(
            "div_signup_container"
          );
          div_signup_container.style.display = "none";
          const div_verify_container = document.getElementById(
            "div_verify_container"
          );
          div_verify_container.style.display = "none";
          const div_fillout_container = document.getElementById(
            "div_fillout_container"
          );
          div_fillout_container.style.display = "flex";

          const step1_cont = document.getElementById("step1_cont");
          step1_cont.style.display = "block";
          const step1_circle = document.getElementById("step1_circle");
          step1_circle.style.backgroundColor = "#007AFF";
          step1_circle.style.color = "#fefefe";
        } else {
        }
      }
    }
  });
});

const step5_btn = document.getElementById("step5_btn");
step5_btn.addEventListener("click", (event) => {
  var email = document.getElementById("email_txt").value;
  var fullname =
    document.getElementById("txtfirstname").value +
    " " +
    document.getElementById("txtmidname").value +
    " " +
    document.getElementById("txtlastname").value +
    " " +
    document.getElementById("txtsuffixname").value;
  var birthday =
    document.getElementById("txtbirthmonth").value +
    " " +
    document.getElementById("txtbirthday").value +
    " " +
    document.getElementById("txtbirthyear").value;
  var username = document.getElementById("txtusername").value;
  var password = document.getElementById("txtpassword").value;
  var id = document.getElementById("username_txt").value;

  set(ref(database, "PARSEIT/ADMINS/USERS/" + id), {
    email: email,
    id: id,
    fullname: fullname,
    birthday: birthday,
    username: username,
    verified: true,
  });
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredentials) => {
      window.location.href = "index.html";
    }
  );
});
