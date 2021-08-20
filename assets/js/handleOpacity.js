var input = document.getElementById("menu-btn");

/* Handles Main Opacity if input is checked */
function handleOpacity() {
  let main = document.querySelector("main")
  input.checked ? main.classList.toggle("main") : main.classList.toggle("main")
}

