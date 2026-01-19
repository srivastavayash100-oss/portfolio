/* --- YASH'S MASTERPIECE JS: FINAL STABLE VER. --- */

// 1. Global Navigation Stack
let navStack = [];

// 2. Audio System Unlock (Forced for Profiles)
function unlockAndPlay() {
    const audio = document.getElementById("tudum");
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Sound blocked by browser:", e));
    }
}

// 3. Profile Card Click - Isse sound unlock aur play dono hoga
document.addEventListener('DOMContentLoaded', () => {
    const profileCard = document.getElementById("profile-card");
    if (profileCard) {
        profileCard.onclick = () => {
            unlockAndPlay(); // Awaaz bajao
            openHomeHard();  // Home par le jao
        };
    }
});

// 4. Screen Management Logic
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

// 5. Hard Reset to Home
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

// 6. Scroll Visibility Logic
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
