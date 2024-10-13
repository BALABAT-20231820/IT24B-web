class DataLogger {
    constructor(buttonId, cardContainerId, clearButtonId, logCountId) {
        this.logButton = document.getElementById(buttonId);
        this.cardContainer = document.getElementById(cardContainerId);
        this.clearButton = document.getElementById(clearButtonId);
        this.logCountElement = document.getElementById(logCountId);
        this.loggedData = [];

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.logButton.onclick = () => this.handleLogData();
        this.clearButton.onclick = () => this.handleClearLogs();
    }

    handleLogData() {
        const newLog = this.createLogEntry();
        this.loggedData.push(newLog);
        this.refreshUI();
    }

    handleClearLogs() {
        this.loggedData = [];
        this.refreshUI();
    }

    createLogEntry() {
        return new Date().toLocaleString();
    }

    refreshUI() {
        this.renderLogCards();
        this.updateLogCount();
    }

    renderLogCards() {
        this.cardContainer.innerHTML = this.loggedData.map(log => this.createCardMarkup(log)).join('');
    }

    createCardMarkup(log) {
        return `
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">Logged Data</h5>
                    <p class="card-text">${log}</p>
                </div>
            </div>
        `;
    }

    updateLogCount() {
        this.logCountElement.innerHTML = `<p>Total Logs: ${this.loggedData.length}</p>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DataLogger('logButton', 'cardContainer', 'clearButton', 'logCount');
});
