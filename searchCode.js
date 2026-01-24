"use strict";

// Obtains all instances of elements of certain classes
// page is the element that contains the button that links to other wiki pages
const page = document.querySelectorAll(".page");
// pageTitle is an element in page that is the title of the page
const pageTitle = document.querySelectorAll(".page-title");
// pageDescription is an element in page that is a short description of the page
const pageDescription = document.querySelectorAll(".page-description");

// Used when a user is redirected from a wiki page to the search page
// Obtains the 'search' parameter from the url
let params = new URLSearchParams(document.location.search);
let searchParameter = params.get("search");
// Enters the 'search' parameter into the search bar
document.getElementById('js-search').value = searchParameter;
// Runs the match() function
match();

// Function that filters pages based on the search bar
function match() {
    // Obtains the value of the search bar
    const matchParameter = document.getElementById('js-search').value;
    // Obtains the number of page elements and iterates through each of them
    for (let i = 0; i < pageTitle.length; i++) {
        // Obtains the title and description of each page, replacing all brackets and spaces for easier matching
        const matchTitle = pageTitle[i].innerHTML.replace(/[() ]/g,'').toUpperCase();
        const matchDescription = pageDescription[i].innerHTML.replace(/[() ]/g,'').toUpperCase();
        if (
            // Matches the search bar to both the title and description of each page
            matchTitle.indexOf(matchParameter.toUpperCase()) > -1 ||
            matchDescription.indexOf(matchParameter.toUpperCase()) > -1) {
                // If there is a match, sets that page element display to blank, making it visible
                page[i].style.display = "";
        }
        else {
            // If there is no match, sets that page element display to none to filter it out
            page[i].style.display = "none";
        }
    }
}

// To toggle between light and dark mode.

// Creates variable "displayTheme" that stores the current mode.
let displayTheme;
// Retrieves previously set mode.
displayTheme = localStorage.getItem('displayTheme');
// If no theme has been set, defaults to dark.
if (displayTheme === 'light') {
    executeLightMode();
} else {
    displayTheme = 'dark';
    executeDarkMode();
}

// Function toggleTheme toggles between modes.
function toggleTheme() {
    // If current mode is light, switches to dark mode.
    if (displayTheme === 'light') {
        executeDarkMode();
    }
    // If current mode is dark, switches to light mode. 
    else {
        executeLightMode();
    }
}

// Function executeLightMode switches to light mode.
function executeLightMode() {
    // Sets the colour themes for background, accent, visual, and texts to light mode.
    document.documentElement.style.setProperty('--bg-color', '#EBF1F4');
    document.documentElement.style.setProperty('--accent-color', '#324545');
    document.documentElement.style.setProperty('--visual-color', '#FFFFFF');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--subtext-color', '#5f5f5f');
    document.documentElement.style.setProperty('--link-color', '#574FFF');
    document.documentElement.style.setProperty('--command-color', '#B7BFC2');
    // Sets the theme logo to light mode variant.
    document.getElementById("js-theme-logo").src = "Logos/Theme Logo Light.svg";
    document.getElementById("js-theme-logo").style.width = "86%";
    document.getElementById("js-menu-theme-logo").src = "Logos/Theme Logo Light.svg";
    // Sets change theme text in menu to dark mode.
    document.getElementById("js-mode-text").innerHTML = "Dark Mode";
    // Sets the search logo to light mode variant.
    document.getElementById("js-search-logo").src = "Logos/Search Logo Light.svg";
    document.getElementById("js-home-logo").src = "Logos/Home Logo Light.svg";
    document.getElementById("js-menu-home-logo").src = "Logos/Home Logo Light.svg";
    // Sets the menu logo to light mode variant.
    document.getElementById("js-menu-logo").src = "Logos/Menu Logo Light.svg";
    document.getElementById("js-close-menu-logo").src = "Logos/Menu Logo Light.svg";
    // Sets light mode as the current mode in local storage, for reference when switching pages.
    localStorage.setItem('displayTheme', 'light');
    // Sets light mode as the current mode in JS.
    displayTheme = localStorage.getItem('displayTheme');
}

// Function executeDarkMode switches to dark mode.
function executeDarkMode() {
    // Sets the colour themes for background, accent, visual, and texts to dark mode.
    document.documentElement.style.setProperty('--bg-color', '#1C1E1C');
    document.documentElement.style.setProperty('--accent-color', '#FFFFFF');
    document.documentElement.style.setProperty('--visual-color', '#111211');
    document.documentElement.style.setProperty('--text-color', '#FFFFFF');
    document.documentElement.style.setProperty('--subtext-color', '#9F9F9F');
    document.documentElement.style.setProperty('--link-color', '#A59DF1');
    document.documentElement.style.setProperty('--command-color', '#3F4240');
    // Sets the theme logo to dark mode variant.
    document.getElementById("js-theme-logo").src = "Logos/Theme Logo Dark.svg";
    document.getElementById("js-theme-logo").style.width = "95%";
    document.getElementById("js-menu-theme-logo").src = "Logos/Theme Logo Dark.svg";
    // Sets change theme text in menu to light mode.
    document.getElementById("js-mode-text").innerHTML = "Light Mode";
    // Sets search logo to dark mode variant.
    document.getElementById("js-search-logo").src = "Logos/Search Logo Dark.svg";
    document.getElementById("js-home-logo").src = "Logos/Home Logo Dark.svg";
    document.getElementById("js-menu-home-logo").src = "Logos/Home Logo Dark.svg";
    // Sets menu logo to dark mode variant.
    document.getElementById("js-menu-logo").src = "Logos/Menu Logo Dark.svg";
    document.getElementById("js-close-menu-logo").src = "Logos/Menu Logo Dark.svg";
    // Sets toggler images to dark mode variant.
    // Sets dark mode as the current mode in local storage, for reference when switching pages.
    localStorage.setItem('displayTheme', 'dark');
    // Sets dark mode as the current mode in JS.
    displayTheme = localStorage.getItem('displayTheme');
}

// To open and close the menu.

// Function openMenu() opens the menu.
function openMenu() {
    // Makes menu and page cover visible.
    document.getElementById("js-page-cover").style.display = "block";
    document.getElementById("js-menu").style.display = "block";
    // Adds menu close function when escape is pressed while open.
    document.body.addEventListener('keydown', function(e) {
        if (e.key == "Escape") {
            if (document.getElementById("js-page-cover").style.display == "block") {
                closeMenu();
            }}})}

// Function closeMenu() closes the menu.
function closeMenu() {
    // Makes menu and page cover hidden.
    document.getElementById("js-page-cover").style.display = "none";
    document.getElementById("js-menu").style.display = "none";
}

// For tooltips.

tippy("[data-tippy-content]", {
    duration: [200, 50],
    delay: 500,
    animation: 'fade',
    arrow: true,
});

