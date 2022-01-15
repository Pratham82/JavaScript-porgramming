const toastBtn = document.querySelector(".toast-btn");
const toastDiv = document.querySelector(".toast");

toastBtn.addEventListener("click", () => {
  let totalTime = 3;
  toastDiv.style.display = "block";
  setInterval(() => {
    toastDiv.textContent = `Time left ${totalTime} seconds`;
    totalTime -= 1;
  }, 1000);

  setTimeout(() => {
    toastDiv.style.display = "none";
    console.log("closed on timer");
  }, 4000);
});

toastDiv.addEventListener("click", () => {
  toastDiv.style.display = "none";
  console.log("closed manually");
});
