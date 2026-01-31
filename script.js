


let navStack = [];


function unlockAndPlay() {
    const audio = document.getElementById("tudum");
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Sound blocked by browser:", e));
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const profileCard = document.getElementById("profile-card");
    if (profileCard) {
        profileCard.onclick = () => {
            unlockAndPlay(); // Awaaz bajao
            openHomeHard();  // Home par le jao
        };
    }
});


function resetScreens() {
    document.querySelectorAll(".screen, .sub-screen, .catalog-screen").forEach((s) => {
        s.classList.remove("active");
        s.style.display = "none";
    });

    document.body.style.overflowY = "hidden";

    const footer = document.getElementById('home-footer');
    if (footer) {
        footer.style.display = "none";
    }
}


function openHomeHard() {
    navStack = []; 
    resetScreens();
    
    const homeEl = document.getElementById("home-screen");
    if (homeEl) {
        homeEl.style.display = "block";
        homeEl.classList.add("active");
    }

    document.body.style.overflowY = "auto";
    
    const footer = document.getElementById('home-footer');
    if (footer) {
        footer.style.display = "block";
    }

    window.scrollTo(0, 0);

    if (typeof updateNavHighlight === 'function') {
        updateNavHighlight('Home');
    }
}


const home = document.getElementById("home-screen");
if (home) {
    home.onscroll = () => {
        const nav = document.getElementById("navbar");
        if (home.scrollTop > 50) {
            nav.classList.add("scrolled-nav");
        } else {
            nav.classList.remove("scrolled-nav");
        }
    };
}
