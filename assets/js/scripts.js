"use strict";

// show password login
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
