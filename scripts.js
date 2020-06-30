
  // Look for .hamburger
  const hamburger = document.querySelector(".hamburger");
  const header = document.querySelector("header");
  const menu = document.getElementsByClassName("nav-pages");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    
    let windowWidth = window.innerWidth; 
    for (let i = 0; i < menu.length; i++) {
      
      if (hamburger.classList.contains("is-active") && windowWidth < 992) {
        menu[i].style.display = "block"; 
      } else {
        menu[i].style.display = "none"; 
      }
  }
  });

  window.addEventListener('resize', function (e) {
    var currentWidth = window.innerWidth;
    for (let i = 0; i < menu.length; i++) {
    if (currentWidth >= 992) { 
      menu[i].style.display = "block"; 
    } else {
      menu[i].style.display = "none"; 
    }
  }});



