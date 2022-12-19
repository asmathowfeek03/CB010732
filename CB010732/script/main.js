/*logo*/
const text = document.querySelector('.name h1')
text.innerHTML = text.innerText.split("").map(
  (char, i) =>
  `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
).join("")



// HAMBURGER MENU
const hamburger = document.querySelector(".mob-menu");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// }))


function showMessage(){
  document.getElementById('showAlert').style.display = "block";
  document.getElementById('formBoooking').reset();
  return false;
}
