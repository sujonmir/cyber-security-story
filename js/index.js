const saveName = document.getElementById("saveName");
const yourName = document.getElementById("yourName");
const greeting = document.getElementById("greeting");
function saveNameToLocalStorage() {
  const name = yourName.value;
  localStorage.setItem("name", name);
}
saveName.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission
  saveNameToLocalStorage();
  const name = localStorage.getItem("name");
  if (name) {
    showName.innerHTML = name;
  } else {
    showName.innerHTML = "Alex Carter";
  }
  greeting.textContent = `Welcome, ${name}! Get ready for the adventure ahead.`;
});
