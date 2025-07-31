// Load dark mode theme
function applyDarkModeFromStorage() {
    const isDark = localStorage.getItem("darkMode") === "true";
    document.documentElement.classList.toggle("dark", isDark);
    setDarkModeButton(isDark);
    fillSignatureCanvasBg();
}

// Toggle dark mode
function toggleDarkMode() {
    const isDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("darkMode", isDark);
    setDarkModeButton(isDark);
    fillSignatureCanvasBg();
}

// Cheap hack for some better looking toggle icons
function setDarkModeButton(isDark) {
    const icon = document.getElementById("darkModeIcon");
    const text = document.getElementById("darkModeText");
    if (icon) {
        icon.innerHTML = isDark

            ? `<svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <circle cx="12" cy="12" r="5"/>
                  <g>
                      <rect x="11" y="1" width="2" height="4"/>
                      <rect x="11" y="19" width="2" height="4"/>
                      <rect x="1" y="11" width="4" height="2"/>
                      <rect x="19" y="11" width="4" height="2"/>
                      <rect x="4.22" y="4.22" width="2" height="4" transform="rotate(-45 5.22 6.22)"/>
                      <rect x="17.78" y="17.78" width="2" height="4" transform="rotate(-45 18.78 19.78)"/>
                      <rect x="4.22" y="17.78" width="2" height="4" transform="rotate(45 5.22 19.78)"/>
                      <rect x="17.78" y="4.22" width="2" height="4" transform="rotate(45 18.78 6.22)"/>
                  </g>
                </svg>`

            : `<svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z"/>
               </svg>`;
    }
    if (text) {
        text.textContent = isDark ? "Mod luminos" : "Mod întunecat";
    }
}

// Update signature canvas to match theme switch
function fillSignatureCanvasBg() {
    const canvas = document.getElementById("signature-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const isDark = document.documentElement.classList.contains("dark");
    ctx.fillStyle = isDark ? "#18181b" : "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}

// Register even for dark mode toggle
document.addEventListener("DOMContentLoaded", function () {
    applyDarkModeFromStorage();
    fillSignatureCanvasBg();
    const btn = document.getElementById("darkModeToggle");
    if (btn) {
        btn.addEventListener("click", toggleDarkMode);
    }
});