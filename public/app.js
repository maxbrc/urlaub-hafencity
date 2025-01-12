const dropdownImg = document.querySelector("#dropdownImg");
const dropdown = document.querySelector("#dropdown");

dropdownImg.addEventListener("click", () => {
  dropdownImg.classList.toggle("rotated");
  dropdown.classList.toggle("hidden");
})