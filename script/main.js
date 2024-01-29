

// Theme Mode
function darkMode() {
    const body = document.body;
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");

    body.classList.remove("green-mode");

    const dark_element = document.querySelector("#footer-darkMode");
    dark_element.hidden = true;

    const light_element = document.querySelector("#footer-lightMode");
    light_element.hidden = false;
}
function lightMode() {
    const body = document.body;
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");

    body.classList.remove("green-mode");

    const dark_element = document.querySelector("#footer-darkMode");
    dark_element.hidden = false;

    const light_element = document.querySelector("#footer-lightMode");
    light_element.hidden = true;
}
function greenMode() {
    const body = document.body;
    body.classList.remove("dark-mode");
    body.classList.remove("light-mode");
    body.classList.add("green-mode");

    const dark_element = document.querySelector("#footer-darkMode");
    dark_element.hidden = true;
    const light_element = document.querySelector("#footer-lightMode");
    light_element.hidden = true;

    const green_element = document.querySelector("#footer-greenMode");
    green_element.hidden = false;
}

// Check to see if Media-Queries are supported
if (window.matchMedia) {
    // Check if the dark-mode Media-Query matches
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Dark
        darkMode()
    } else {
        // Light
        lightMode()
    }
} else {
    // Default (when Media-Queries are not supported)
    greenMode()
}

// Circle Element for Nav link
const circle_element = '<span style="font-size: 1.4rem;">&#x25CF;</span>'

/******************************************************************/
function disableAbout() {
    const about_link = document.querySelector('#nav-about');
    about_link.textContent = "About";
    about_link.classList.remove("selected");

    const about_article = document.querySelector('#about');
    about_article.style.display = "none";
}
function disableProject() {
    const project_link = document.querySelector('#nav-project');
    project_link.textContent = "Project";
    project_link.classList.remove("selected")

    const project_article = document.querySelector('#project');
    project_article.style.display = "none";
}
function disableContact() {
    const contact_link = document.querySelector('#nav-contact');
    contact_link.textContent = "Contact";
    contact_link.classList.remove("selected")

    const contact_article = document.querySelector('#contact');
    contact_article.style.display = "none";
}
/******************************************************************/
function displayAbout() {
    const about_link = document.querySelector('#nav-about');
    about_link.innerHTML = circle_element;
    about_link.classList.add("selected");

    const about_article = document.querySelector('#about');
    about_article.style.display = "flex";

    disableProject();
    disableContact();

    history.replaceState("null", "", "#about");
}
function displayProject() {
    const project_link = document.querySelector('#nav-project');
    project_link.innerHTML = circle_element;
    project_link.classList.add("selected");

    const project_article = document.querySelector('#project');
    project_article.style.display = "flex";

    disableAbout();
    disableContact();

    history.replaceState("null", "", "#project");
}
function displayContact() {
    const contact_link = document.querySelector('#nav-contact');
    contact_link.innerHTML = circle_element;
    contact_link.classList.add("selected");

    const contact_article = document.querySelector('#contact');
    contact_article.style.display = "flex";

    disableAbout();
    disableProject();

    history.replaceState("null", "", "#contact");
}
/******************************************************************/

// Hash in URL
const hash = window.location.hash;
// console.log(hash)
switch (hash) {
    case "#about":
        displayAbout();
        break;
    case "#project":
        displayProject();
        break;
    case "#contact":
        displayContact();
        break;

    default:
        displayAbout();
        break;
}
/******************************************************************/