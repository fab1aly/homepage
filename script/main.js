

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


/***************************************************************************** */


class PChat extends HTMLElement {
    constructor() {
        super();
        // créer l'élément

        this.delay = this.getAttribute('delay') || 1000;  // 1000ms par défaut
        this.tick = this.getAttribute('tick');

        this.text = this.innerHTML;
        // console.log(this.text);
        this.textContent = ``;
    }

    connectedCallback() {
        // le navigateur appelle cette méthode lorsque l'élément est ajouté au document
        // elle peut-être appelé autant de fois que lélément est ajouté ou supprimé)
        // this.text = this.textContent;

        let memo = "";
        let index = 0;
        let time = 0;
        let text = this.text;
        let self = this;

        function typeLetter() {
            if (index < text.length) {
                time++;
                if (time % 5 == 0) {
                    memo += text[index++];
                    self.innerHTML = memo;

                }
                requestAnimationFrame(typeLetter);// Utilise requestAnimationFrame pour la prochaine lettre
            }
        }

        // Commence l'effet de frappe après un délai initial
        setTimeout(() => requestAnimationFrame(typeLetter), this.delay);

    }

    disconnectedCallback() {
        // le navigateur appelle cette méthode lorsque l'élément est supprimé du document
        // elle peut-être appelé autant de fois que lélément est ajouté ou supprimé)
        this.textContent = ``;
    }

    // static get observedAttributes() {
    //     return [/* tableau listant les attributs dont les changements sont à surveiller */];
    // }

    // attributeChangedCallback(name, oldValue, newValue) {
    //     // appelé lorsque l'un des attributs listé par la méthode ci-dessus est modifié
    // }

    // adoptedCallback() {
    //     // méthode appelé lorsque l'élément est envoyé vers un nouveau document
    //     // (utilisé très rarement avec document.adoptNode)
    // }

    // vous pouvez ajouter d'autres méthodes ou propriétées
}

// let the browser know that <my-element> is served by our new class
customElements.define("p-chat", PChat);

