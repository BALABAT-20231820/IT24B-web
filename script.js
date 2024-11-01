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

        const linkElement = document.createElement('a');
        linkElement.href = this.link;
        linkElement.className = 'btn btn-primary';
        linkElement.innerText = 'Launch Applet';

        cardBody.appendChild(iconElement); 
        cardBody.appendChild(titleElement);
        cardBody.appendChild(descElement);
        cardBody.appendChild(linkElement);
        card.appendChild(cardBody);
        cardElement.appendChild(card);

        return cardElement;
    }
}

class AppletManager{
    constructor(containerId , searchInpitId){
        this.container = document.getElementById(containerId);
        this.searchInput = document.getElementById(searchInputId);
        this.appletList = [];
        this.filteredList = [];

        this.searchInput.addEventListener('input', () => this.filterApplets());
    }
    async loadAppletData(url){
        try{
            const response = await fetch(url);  
            this.appletList = await response.json();
            this.filteredList = this.appletList;
            this.displayApplets(this.filteredList);
        }
        catch(wrror){
            console.error('Error loading applet data:', error);
        }
    }
    displayApplets(appletData) {
        this.container.innerHTML = '';
        appletData.forEach(applet => {
            const appletCard = new Applet(applet.title , applet.description , applet.link , applet.icon);
        });
    }
}