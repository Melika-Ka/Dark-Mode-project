let changeModeBtn = document.querySelector("#changeMode");
let html = document.getElementsByTagName("html")[0];
const changeModeHandler = () => {
  html.classList.toggle("dark");
  changeModeBtn.classList.toggle("translate-x-9");
};
