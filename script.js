class Applet{
    constructor(title , description , link , icon){
        this.title = title;
        this.description = description;
        this.link = link;
        this.icon = icon;
    }
    createCard(){
        const cardElement = document.createElement('div');
        cardElement.className = 'col-md-4';

        const card = document.createElement('div');
        card.className = 'card';
        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const iconElement = document.createElement('img');
        iconElement.src = this.icon; 
        iconElement.alt = this.title + " icon"; 
        iconElement.className = 'icon';

        const titleElement = document.createElement('h5');
        titleElement.className = 'applet-title';
        titleElement.innerText = this.title;

        const descElement = document.createElement('p');
        descElement.className = 'card-text';
        descElement.innerText = this.description;
    }
}