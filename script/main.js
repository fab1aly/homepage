


// const stateObj = { foo: "bar" };

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

function disableAbout() {
    const about_link = document.querySelector('.nav-about');
    about_link.textContent = "About";
    about_link.classList.remove("selected");

    const about_article = document.querySelector('#about');
    about_article.style.display = "none";
}

function disableProject() {
    const project_link = document.querySelector('.nav-project');
    project_link.textContent = "Project";
    project_link.classList.remove("selected")

    const project_article = document.querySelector('#project');
    project_article.style.display = "none";
}

function disableContact() {
    const contact_link = document.querySelector('.nav-contact');
    contact_link.textContent = "Contact";
    contact_link.classList.remove("selected")

    const contact_article = document.querySelector('#contact');
    contact_article.style.display = "none";
}



function displayAbout() {
    const about_link = document.querySelector('.nav-about');
    about_link.innerHTML = "&#x25CF;";
    about_link.classList.add("selected");

    const about_article = document.querySelector('#about');
    about_article.style.display = "flex";

    disableProject();
    disableContact();

    history.replaceState("null", "", "#about");
}

function displayProject() {
    const project_link = document.querySelector('.nav-project');
    project_link.innerHTML = "&#x25CF;";
    project_link.classList.add("selected");

    const project_article = document.querySelector('#project');
    project_article.style.display = "flex";

    disableAbout();
    disableContact();

    history.replaceState("null", "", "#project");
}

function displayContact() {
    const contact_link = document.querySelector('.nav-contact');
    contact_link.innerHTML = "&#x25CF;";
    contact_link.classList.add("selected");

    const contact_article = document.querySelector('#contact');
    contact_article.style.display = "flex";

    disableAbout();
    disableProject();

    history.replaceState("null", "", "#contact");
}