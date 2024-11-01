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
    }
}