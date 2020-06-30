
  // Look for .hamburger
  const hamburger = document.querySelector(".hamburger");
  const header = document.querySelector("header");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    let menu = document.getElementsByClassName("nav-pages");
    for (let i = 0; i < menu.length; i++) {
    if (hamburger.classList.contains("is-active") && menu[i].style.display === "none") {
      menu[i].style.display = "block"; 
    } else {
      menu[i].style.display = "none"; 
    }}
  });


// Why do I have to clik the hambuger twice before the list appears?
