


// const element = document.querySelector('#home p');

// const phrase = "Web developer";

// let memo = "";


// for (let i = 0; i < phrase.length; i++) {

//     memo = memo + phrase[i]

//     element.textContent = memo;
// }
// // const intervalID = setInterval(myCallback, 500,);

// // function chatType(phrase) {

// //     memo = memo + phrase[i]

// //     element.textContent = i;
// // }
const element = document.querySelector('#about p');
const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, sequi, cupiditate deleniti temporibus ratione placeat autem fugiat nihil voluptatum nesciunt architecto.\nVitae saepe dolores earum dignissimos impedit numquam quas asperiores! Expedita vel commodi eos magnam nemo pariatur ?";
// document.addEventListener('DOMContentLoaded', () => {
// const element = document.querySelector('#home p');
// const text = "Web developer";
let memo = "";
let index = 0;
let time = 0;

function typeLetter() {
    if (index < text.length) {
        time++
        if (time % 5 == 0) {
            memo += text[index++];
            element.textContent = memo;
            // Utilise requestAnimationFrame pour la prochaine lettre
        }
        requestAnimationFrame(typeLetter);
    }
}

// Commence l'effet de frappe après un délai initial
setTimeout(() => requestAnimationFrame(typeLetter), 1000);
// })






// function displayHome() {

//     const home_link = document.querySelector('.nav-home');
//     home_link.innerHTML = "&#x25CF;";
//     const about_link = document.querySelector('.nav-about');
//     about_link.textContent = "About";
//     const project_link = document.querySelector('.nav-project');
//     project_link.textContent = "Project";
//     const contact_link = document.querySelector('.nav-contact');
//     contact_link.textContent = "Contact";

//     const about_article = document.querySelector('#about');
//     about_article.style.display = "none";
//     const project_article = document.querySelector('#project');
//     project_article.style.display = "none";
//     const contact_article = document.querySelector('#contact');
//     contact_article.style.display = "none";
// }

function displayAbout() {

    // const home_link = document.querySelector('.nav-home');
    // home_link.textContent = "Home";
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

    // const home_link = document.querySelector('.nav-home');
    // home_link.textContent = "Home";
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

function displayContact() {

    // const home_link = document.querySelector('.nav-home');
    // home_link.textContent = "Home";
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