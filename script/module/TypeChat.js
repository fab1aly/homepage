
export class TypeChat extends HTMLElement {

    constructor() {
        super();
        // créer l'élément

        this.delay = this.getAttribute('delay') || 1000;  // 1000ms par défaut
        // this.tick = this.getAttribute('tick'); //?? maybe tick config ??

        this.text = this.innerHTML;
        // console.log(this.text);
        this.textContent = ``;
    }

    connectedCallback() {
        // le navigateur appelle cette méthode lorsque l'élément est ajouté au document
        // elle peut-être appelé autant de fois que lélément est ajouté ou supprimé)
        // this.text = this.textContent;

        let self = this;
        let index = 0;
        let frame = 0;
        let text = this.text;
        let cache = "";
        let out_of_Bracket = true;

        function typeLetter() {
            if (index < text.length) {
                frame++;

                if (frame % 5 == 0) {
                    cache += text[index++];

                    if (text[index] == "<") {
                        out_of_Bracket = false;
                    }
                    if (text[index] == ">") {
                        out_of_Bracket = true;
                    }
                    if (out_of_Bracket) {
                        self.innerHTML = cache;
                    }

                }
                requestAnimationFrame(typeLetter);// Utilise requestAnimationFrame pour la prochaine lettre
            }
        }

        // Commence l'effet de frappe après un délai initial
        setTimeout(() => requestAnimationFrame(typeLetter), this.delay);

    }

    // disconnectedCallback() {
    //     // le navigateur appelle cette méthode lorsque l'élément est supprimé du document
    //     // elle peut-être appelé autant de fois que lélément est ajouté ou supprimé)

    //     // this.textContent = ``;
    // }

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