export default class UploadInput{

    constructor(element){

        this.$ = {};

        this._bindDom(element);
        this._bindEvents();
    }

    _bindDom(element){

        this.$.wrapper = element;
        this.$.input = this.$.wrapper.querySelector('input[type="file"]');
        this.$.customBtn = document.createElement('div');
        this.$.customBtn.classList.add('js-upload-input__wrap');
        this.$.customBtn.innerHTML = this._buildTemplate();
        this.$.wrapper.appendChild(this.$.customBtn);
        this.$.customBtnFilename = this.$.customBtn.querySelector('.js-upload-input__wrap__right');
    }

    _bindEvents(){
        this.$.customBtn.addEventListener('click', () => {
            this.$.input.click();
        });

        this.$.input.addEventListener('change', this._updateTemplate.bind(this));
    }

    _buildTemplate(){
        return `
                <div class="js-upload-input__wrap__left">Choisir un ficher</div>
                <div class="js-upload-input__wrap__right">Aucun fichier choisi...</div>
        `
    }

    _updateTemplate(){
        let filename = this.$.input.value;
        filename = filename.replace(/^.*\\/, ""); // Remove fakepath
        filename = filename != '' ? filename : 'Aucun fichier choisi...';

        this.$.customBtnFilename.innerText = filename;
    }

}
