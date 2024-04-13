
function openMenu() {
    var nav = document.getElementById("main-nav");
    nav.classList.add("open");
}
  
function closeMenu() {
    var nav = document.getElementById("main-nav");
    nav.classList.remove("open");
}
  
document.getElementById("nav-toggle").addEventListener("mouseenter", function() {
    openMenu();
});
  
document.getElementById("main-nav").addEventListener("mouseleave", function() {
    closeMenu();
});
  
document.addEventListener("click", function(event) {
    var nav = document.getElementById("main-nav");
    if (!nav.contains(event.target)) {
      closeMenu();
    }
});

// Function to check if an element is in viewport
function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to add effect to Filmotika heading when in viewport
function addEffectToFilmotika() {
    var filmotikaHeading = document.querySelector('#section2 h2');
    if (isInViewport(filmotikaHeading)) {
        filmotikaHeading.classList.add('filmotika-effect');
    } else {
        filmotikaHeading.classList.remove('filmotika-effect');
    }
}

// Event listener for scroll event
window.addEventListener('scroll', function() {
    addEffectToFilmotika();
});

// Call the function on page load
window.addEventListener('load', function() {
    addEffectToFilmotika();
});

  