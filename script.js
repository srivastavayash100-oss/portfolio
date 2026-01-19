// Screen management logic
function resetScreens() {
  document.querySelectorAll(".screen, .sub-screen, .catalog-screen").forEach((s) => {
    s.classList.remove("active");
    s.style.display = "none";
  });

  // Screen change hote hi scroll band karein
  document.body.style.overflowY = "hidden";

  // Footer ko hide karne ke liye (Safety check ke saath)
  const footer = document.getElementById('home-footer');
  if (footer) {
    footer.style.display = "none";
  }
}

function openHomeHard() {
  // Global navStack reset (Ensure navStack is defined globally)
  if (typeof navStack !== 'undefined') {
    navStack = [];
  }
  
  resetScreens();
  
  const homeEl = document.getElementById("home-screen");
  if (homeEl) {
    homeEl.style.display = "block";
    homeEl.classList.add("active");
  }

  // Home par wapas aate hi scroll aur footer ON karein
  document.body.style.overflowY = "auto";
  
  const footer = document.getElementById('home-footer');
  if (footer) {
    footer.style.display = "block";
  }

  window.scrollTo(0, 0);

  // Navigation highlight function check
  if (typeof updateNavHighlight === 'function') {
    updateNavHighlight('Home');
  }
}
