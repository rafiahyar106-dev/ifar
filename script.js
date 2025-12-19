// Custom JavaScript untuk interaktivitas
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".buy-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Terima kasih telah memilih parfum YSL: " + btn.parentElement.querySelector(".card-title").innerText);
    });
  });
});