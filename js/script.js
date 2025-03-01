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

// Responsive nav links menu
const hamburgerBtn = document.getElementById("hamburger-btn");
const hamburgerBtnIcon = hamburgerBtn.querySelector("i");
const mobileMenu = document.getElementById("responsive-nav-links");
mobileMenu.style.display = 'none';

hamburgerBtn.addEventListener("click", () => {
    const hamburgerBtnIconClass = hamburgerBtnIcon.classList[1];

    if (mobileMenu.style.display == '' || mobileMenu.style.display == 'none') {
        mobileMenu.style.display = 'flex';
        hamburgerBtnIcon.classList.replace(
            hamburgerBtnIconClass,
            'bx-x'
        );
    } else {
        mobileMenu.style.display = 'none';
        hamburgerBtnIcon.classList.replace(
            hamburgerBtnIconClass,
            'bx-menu'
        );
    }
})


function printRecipe() {
    /**
     * Prints the recipe header and instructions.
     */

    const recipeHeaderDiv = document.querySelector('.recipe-header').cloneNode(true);
    const recipeInstructionsDiv = document.querySelector('.recipe-instructions').cloneNode(true);

    // Remove buttons before printing
    const actionsDiv = recipeHeaderDiv.querySelector('.actions');
    if (actionsDiv) actionsDiv.remove();

    const printContent = recipeHeaderDiv.outerHTML + recipeInstructionsDiv.outerHTML;

    // Print window
    const printWindow = window.open('', '', 'width=800,height=600');
    let printWindowHTML = `
        <html>
        <head>
            <title>Odin Recipes</title>
            <style>
                body {
                    font-family: Roboto, Verdana, sans-serif;
                    color: black;
                    background-color: white;
                }
                h1, h2 {
                    color: black;
                }
                img {
                    max-width: 100%;
                    height: auto;
                }
            </style>
        </head>
        <body>
            ${printContent}
        </body>
        </html>
    `;
    printWindow.document.write(printWindowHTML);
    printWindow.document.close();
    printWindow.addEventListener('load', () => {
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    });
}
