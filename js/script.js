const btnThemeSwitch = document.getElementById("theme-switch");
const themeSwitcherDiv = document.querySelector(".theme-switcher");
const themeSwitcherIcon = themeSwitcherDiv.querySelector("i");
const body = document.body;

function loadLocalStorageData() {
    const themeSwitcherIconClass = themeSwitcherIcon.classList[1];
    const theme = localStorage.getItem("theme");
    const isLightMode = theme === "light-theme" || !theme;
    body.classList.toggle("light-theme", isLightMode);
    themeSwitcherIcon.classList.replace(
        themeSwitcherIconClass,
        isLightMode ? "bx-moon" : "bx-sun"
    );
}

loadLocalStorageData();

btnThemeSwitch.addEventListener("click", () => {
    const themeSwitcherIconClass = themeSwitcherIcon.classList[1];
    localStorage.setItem(
        "theme",
        body.classList.contains("light-theme") ? "dark-theme" : "light-theme"
    );
    const isLightMode = body.classList.toggle("light-theme");
    themeSwitcherIcon.classList.replace(
        themeSwitcherIconClass,
        isLightMode ? "bx-moon" : "bx-sun"
    );
});
