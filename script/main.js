
function displayAbout() {

    const about_link = document.querySelector('.nav-about');
    about_link.innerHTML = "&#x25CF;";
    const project_link = document.querySelector('.nav-project');
    project_link.textContent = "Project";
    const contact_link = document.querySelector('.nav-contact');
    contact_link.textContent = "Contact";

    const about_article = document.querySelector('#about');
    about_article.style.display = "flex";
    const project_article = document.querySelector('#project');
    project_article.style.display = "none";
    const contact_article = document.querySelector('#contact');
    contact_article.style.display = "none";
}

function displayProject() {

    const about_link = document.querySelector('.nav-about');
    about_link.textContent = "About";
    const project_link = document.querySelector('.nav-project');
    project_link.innerHTML = "&#x25CF;";
    const contact_link = document.querySelector('.nav-contact');
    contact_link.textContent = "Contact";

    const about_article = document.querySelector('#about');
    about_article.style.display = "none";
    const project_article = document.querySelector('#project');
    project_article.style.display = "flex";
    const contact_article = document.querySelector('#contact');
    contact_article.style.display = "none";
}

const displayContact = function () {

    const about_link = document.querySelector('.nav-about');
    about_link.textContent = "About";
    const project_link = document.querySelector('.nav-project');
    project_link.textContent = "Project";
    const contact_link = document.querySelector('.nav-contact');
    contact_link.innerHTML = "&#x25CF;";

    const about_article = document.querySelector('#about');
    about_article.style.display = "none";
    const project_article = document.querySelector('#project');
    project_article.style.display = "none";
    const contact_article = document.querySelector('#contact');
    contact_article.style.display = "flex";
}