class CardSearch {
    constructor(searchInputId, cardContainerId) {
        this.searchInput = document.getElementById(searchInputId);
        this.cardContainer = document.getElementById(cardContainerId);
        this.cards = this.cardContainer.querySelectorAll('.col-md-4');
        this.init();
}
init() {
    this.searchInput.addEventListener('input', () => {
        this.filterCards(this.searchInput.value);
    });
}
filterCards(query) {
        
    const searchTerm = query.toLowerCase();

    this.cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const text = card.querySelector('.card-text').textContent.toLowerCase();

        if (title.includes(searchTerm) || text.includes(searchTerm)) {
            card.style.display = ''; 
        } else {
            card.style.display = 'none'; 
        }
    });
}

}

document.addEventListener('DOMContentLoaded', () => {
    new CardSearch('cardSearch', 'cardContainer'); 
});