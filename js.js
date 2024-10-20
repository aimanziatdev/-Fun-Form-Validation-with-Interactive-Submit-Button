let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("pass");
let submitbtn = document.getElementById("submit");
let messageRef = document.getElementById("message-ref");

let isUsernameValid = () => {
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{4,32}/gi;
  return usernameRegex.test(usernameRef.value);
};

let isPasswordValid = () => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/gm;
  return passwordRegex.test(passwordRef.value);
};

usernameRef.addEventListener("input", () => {
  if (!isUsernameValid()) {
    messageRef.style.visibility = "hidden";
    usernameRef.style.cssText =
      "border_color: #fe2e2e; background-color: #ffc2c2;";
  } else {
    usernameRef.style.cssText =
      "border_color: #34bd34; background-color: #c2ffc2;";
  }
});

passwordRef.addEventListener("input", () => {
  if (!isPasswordValid()) {
    messageRef.style.visibility = "hidden";
    passwordRef.style.cssText =
      "border_color: #fe2e2e; background-color: #ffc2c2;";
  } else {
    passwordRef.style.cssText =
      "border_color: #34bd34; background-color: #c2ffc2;";
  }
});

submitbtn.addEventListener("mouseover", () => {
  if (!isUsernameValid() || !isPasswordValid()) {
    let containerRect = document.querySelector(".container").getBoundingClientRect();
    let submitRect = submitbtn.getBoundingClientRect();
    let offset = submitRect.left - containerRect.left;

    if (offset <= 100) {
      submitbtn.style.transform = "translateX(16.25em)";
    } else {
      submitbtn.style.transform = "translateX(0)";
    }
  }
});

submitbtn.addEventListener("click", () => {
  messageRef.style.visibility = "visible";
});
