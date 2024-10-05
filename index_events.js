var maincontainer = document.getElementById("main");
let username = localStorage.getItem("user-parser");
if (username == null) {
  window.location.href = "authentication.html";
} else {
  const functions_container = document.getElementById("functions_container");
  functions_container.style.display = "flex";

  maincontainer.style.display = "flex";
  //var lblusername = document.getElementById("lblUser");
  //lblusername.innerHTML = "You are currently logged in as: " + username;
}

function reviewreports() {
  const admin_lbl = document.getElementById("admin_lbl");
  admin_lbl.innerText = "Review Reports";

  //ACTIVE
  const reviewreports_container = document.getElementById(
    "reviewreports_container"
  );
  reviewreports_container.style.display = "flex";
  //NOT ACTIVE
  const reviewqueries_container = document.getElementById(
    "reviewqueries_container"
  );
  reviewqueries_container.style.display = "none";
  const addadmin_container = document.getElementById("addadmin_container");
  addadmin_container.style.display = "none";
  const addstudent_container = document.getElementById("addstudent_container");
  addstudent_container.style.display = "none";
  const functions_container = document.getElementById("functions_container");
  functions_container.style.display = "none";
}

function reviewqueries() {
  const admin_lbl = document.getElementById("admin_lbl");
  admin_lbl.innerText = "Review Queries";

  //ACTIVE
  const reviewqueries_container = document.getElementById(
    "reviewqueries_container"
  );
  reviewqueries_container.style.display = "flex";
  //NOT ACTIVE
  const reviewreports_container = document.getElementById(
    "reviewreports_container"
  );
  reviewreports_container.style.display = "none";
  const addadmin_container = document.getElementById("addadmin_container");
  addadmin_container.style.display = "none";
  const addstudent_container = document.getElementById("addstudent_container");
  addstudent_container.style.display = "none";
  const functions_container = document.getElementById("functions_container");
  functions_container.style.display = "none";
}

function addadmin() {
  const admin_lbl = document.getElementById("admin_lbl");
  admin_lbl.innerText = "Add Admin";

  //ACTIVE
  const addadmin_container = document.getElementById("addadmin_container");
  addadmin_container.style.display = "flex";
  //NOT ACTIVE
  const reviewreports_container = document.getElementById(
    "reviewreports_container"
  );
  reviewreports_container.style.display = "none";

  const reviewqueries_container = document.getElementById(
    "reviewqueries_container"
  );
  reviewqueries_container.style.display = "none";
  const addstudent_container = document.getElementById("addstudent_container");
  addstudent_container.style.display = "none";
  const functions_container = document.getElementById("functions_container");
  functions_container.style.display = "none";
}

function addstudent() {
  const admin_lbl = document.getElementById("admin_lbl");
  admin_lbl.innerText = "Add Student";

  //ACTIVE
  const addstudent_container = document.getElementById("addstudent_container");
  addstudent_container.style.display = "flex";
  //NOT ACTIVE
  const reviewreports_container = document.getElementById(
    "reviewreports_container"
  );
  reviewreports_container.style.display = "none";
  const addadmin_container = document.getElementById("addadmin_container");
  addadmin_container.style.display = "none";
  const reviewqueries_container = document.getElementById(
    "reviewqueries_container"
  );
  reviewqueries_container.style.display = "none";

  const functions_container = document.getElementById("functions_container");
  functions_container.style.display = "none";
}
