// "use strict";

// show hide login password
const passWordAccess = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass);
  const iconEye = document.getElementById(loginEye);

  iconEye.addEventListener("click", () => {
    // change Password to text
    input.type === "password"
      ? (input.type = "text")
      : (input.type = "password");

    // icon change
    iconEye.classList.toggle("ri-eye-fill");
    iconEye.classList.toggle("ri-eye-off-fill");
  });
};

// call function
passWordAccess("password", "loginPassword");

// show hide Register password
const passWordRegister = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass);
  const iconEye = document.getElementById(loginEye);

  iconEye.addEventListener("click", () => {
    // change Password to text
    input.type === "password"
      ? (input.type = "text")
      : (input.type = "password");

    // icon change
    iconEye.classList.toggle("ri-eye-fill");
    iconEye.classList.toggle("ri-eye-off-fill");
  });
};

// call function
passWordRegister("passwordCreate", "loginPasswordCreate");

// // show hide login & create account
const loginAccessRegister = document.getElementById("loginAccessRegister");
const buttonRegister = document.getElementById("loginButtonRegister");
const buttonAccess = document.getElementById("loginButtonAccess");

buttonRegister.addEventListener("click", function () {
  loginAccessRegister.classList.add("active");
  console.log("button clicked");
});

buttonAccess.addEventListener("click", function () {
  loginAccessRegister.classList.remove("active");
});
