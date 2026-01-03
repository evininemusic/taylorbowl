"use strict";

// To toggle between light and dark mode.

// Creates variable "displayTheme" that stores the current mode.
let displayTheme;
// Retrieves previously set mode.
displayTheme = localStorage.getItem('displayTheme');
// If no theme has been set, defaults to dark.
if (displayTheme === 'light') {
    executeLightMode();
} else {
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
    document.getElementById("js-new-search-logo").src = "Logos/Search Logo Light.svg";
    document.getElementById("js-menu-search-logo").src = "Logos/Search Logo Light.svg";
    // Sets the menu logo to light mode variant.
    document.getElementById("js-menu-logo").src = "Logos/Menu Logo Light.svg";
    document.getElementById("js-close-menu-logo").src = "Logos/Menu Logo Light.svg";
    // Sets toggler images to light mode variant.
    let togglerImages = document.getElementsByClassName("toggler-image");
    for (let i = 0; i < togglerImages.length; i+= 1) {
        togglerImages[i].src = "Logos/Mobile Toggler Light.svg";
    }
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
    document.getElementById("js-new-search-logo").src = "Logos/Search Logo Dark.svg";
    document.getElementById("js-menu-search-logo").src = "Logos/Search Logo Dark.svg";
    // Sets menu logo to dark mode variant.
    document.getElementById("js-menu-logo").src = "Logos/Menu Logo Dark.svg";
    document.getElementById("js-close-menu-logo").src = "Logos/Menu Logo Dark.svg";
    // Sets toggler images to dark mode variant.
    let togglerImages = document.getElementsByClassName("toggler-image");
    for (let i = 0; i < togglerImages.length; i+= 1) {
        togglerImages[i].src = "Logos/Mobile Toggler Dark.svg";
    }
    // Sets dark mode as the current mode in local storage, for reference when switching pages.
    localStorage.setItem('displayTheme', 'dark');
    // Sets dark mode as the current mode in JS.
    displayTheme = localStorage.getItem('displayTheme');
}

// To add functions for the header. Opens and closes the search bar, processes search queries, and opens and closes the menu.

// Function openSearch opens the search bar when the toggle search button is pressed.
function openSearch() {
    // Hides the TaylorBowl logo.
    document.getElementById("js-taylorbowl-logo").style.display = "none";
    // Hides the toggle search button.
    document.getElementById("js-lg-open-search-button").style.display = "none";
    // Hides the theme button.
    document.getElementById("js-lg-theme-button").style.display = "none";
    // Hides the menu button.
    document.getElementById("js-open-menu-button").style.display = "none";
    // Unhides the search bar.
    document.getElementById("js-lg-search-input").style.display = "inline";
    // Unhides the input search button.
    document.getElementById("js-lg-enter-search-button").style.display = "inline";
    // Automatically focuses the user on the search bar.
    document.getElementById("js-lg-search-input").focus();
    // Adds search bar close function when escape is pressed while open.
    document.body.addEventListener('keydown', function(e) {
        if (e.key == "Escape") {
            if (document.getElementById("js-lg-search-input").style.display == "inline") {
                closeSearch();
            }}})
}

// Function closeSearch closes the search bar when the search bar is unfocused or the user presses escape while there is no text.
function closeSearch() {
    // Unhides the TaylorBowl logo.
    document.getElementById("js-taylorbowl-logo").style.display = "flex";
    // Unhides the toggle search button.
    document.getElementById("js-lg-open-search-button").style.display = "inline";
    // Unhides the theme button.
    document.getElementById("js-lg-theme-button").style.display = "inline";
    document.getElementById("js-open-menu-button").style.display = "inline";
    // Hides the search bar.
    document.getElementById("js-lg-search-input").style.display = "none";
    // Hides the input search button.
    document.getElementById("js-lg-enter-search-button").style.display = "none";
}

// Creates variable "searchQuery" that processes user inputs in the search bar.
let searchQuery = "";
// Function processQuery redirects users or closes the search bar, depending on input.
function processQuery() {
    // Sets searchQuery as user input in the search bar.
    searchQuery = document.getElementById('js-lg-search-input').value;
    // If the user presses escape while there is no text, closes the search bar.
    if (event.key === "Escape" && searchQuery.length === 0) {
        closeSearch();
    }
    // If the user presses enter while there is text, redirects the user to the search page.
    if (event.key === "Enter") {
        redirect();
    }
}
    
// Function redirect() redirects the user based on search bar input.
function redirect() {
    // If there is no content in the search bar, alert the user that an input is necessary.
    if (searchQuery.trim().length === 0) {
        alert("Please input a search.");
    }
    // If there is content in the search bar, redirect the user to the search page.
    else {
        // Sets searchQuery as the search bar input.
        searchQuery = document.getElementById('js-lg-search-input').value;
        // Creates constant "redirectLink" that is the link for the search page with query parameter "search" set to search bar input.
        const redirectLink = "https://taylorbowl.wiki/search?search=" + searchQuery.trim();
        // Redirects the user to the link stored in redirectLink.
        window.location.href = redirectLink;
    }
}

// To hide and unhide content.

// Function toggleContent(section) toggles visibility of a section. Parameter "section" identifies the section to be toggled.
function toggleContent(section) {
    // Variables "sectionID" and "togglerID" give the IDs of the sections to be toggled and the toggler image to be modified.
    let sectionID = "js-toggle-content-" + section;
    let togglerID = "js-toggler-" + section;
    // Variable "sectionStatus" checks the current visibility of the section.
    let sectionStatus = window.getComputedStyle(document.getElementById(togglerID)).getPropertyValue("transform");
    // If the section is not visible, make it visible.
    if (sectionStatus == "none") {
        showContent(sectionID, togglerID);
    }
    // If the section is visible, make it invisible.
    else {
        hideContent(sectionID, togglerID);
    }
}
// Function showContent(sectionID, togglerID) changes display properties of the section and toggler image.
function showContent(sectionID, togglerID) {
    // Makes section visible.
    document.getElementById(sectionID).style.display = "block";
    // Makes toggler image upside down.
    document.getElementById(togglerID).style.transform = "rotate(180deg)";
}
// Fcuntion hideContent(sectionID, togglerID) changes display properties of the section and toggler image.
function hideContent(sectionID, togglerID) {
    // Makes section invisible.
    document.getElementById(sectionID).style.display = "none";
    // Makes toggler image right side up.
    document.getElementById(togglerID).style.transform = "none";
}
// Function toggleMenuContent() toggles visibility of a section in the contents page.
function toggleMenuContent(section) {
    // Variable "sectionStatus" checks the current visibility of the section.
    let togglerID = "js-toggler-" + section;
    let sectionStatus = window.getComputedStyle(document.getElementById(togglerID)).getPropertyValue("transform");
    // If the section is not visible, make it visible.
    if (sectionStatus == "none") {
        hideMenuContent();
    }
    // If the section is visible, make it invisible.
    else {
        showMenuContent();
    }
}
// Function showContent(sectionID, togglerID) changes display properties of the section and toggler image.
function showMenuContent() {
document.getElementById("js-toggle-contents-page").style.display = "inline";
}
// Fcuntion hideContent(sectionID, togglerID) changes display properties of the section and toggler image.
function hideMenuContent() {
document.getElementById("js-toggle-contents-page").style.display = "none";
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

// For Kofi.
window.onload = function() {
    let newSession = sessionStorage.getItem("status")
    if (newSession != "true") {
        setTimeout(openKofi, 1500)
        this.sessionStorage.setItem("status", "true")
    }
}

function openKofi() {
    document.getElementById("js-page-cover-kofi").style.display = "block";
    document.getElementById("js-kofi").style.display = "block";
    document.body.addEventListener('keydown', function(e) {
        if (e.key == "Escape") {
            if (document.getElementById("js-page-cover-kofi").style.display == "block") {
                closeAdvertisement();
            }}})
}

function closeKofi() {
    document.getElementById("js-page-cover-kofi").style.display = "none";
    document.getElementById("js-kofi").style.display = "none";
}

