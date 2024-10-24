class CardSearch {
    constructor(searchInputId, cardContainerId) {
        this.searchInput = document.getElementById(searchInputId);
        this.cardContainer = document.getElementById(cardContainerId);
        this.cards = this.cardContainer.querySelectorAll('.col-md-4');
        this.init();
}
}