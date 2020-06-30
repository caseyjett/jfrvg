
  // Look for .hamburger
  const hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    let menu = document.querySelector(".nav-pages");
    if (hamburger.classList.contains("is-active") && menu.style.display === "none") {
      menu.style.display = "block"; 
    } else {
      menu.style.display = "none"; 
    }
  });



