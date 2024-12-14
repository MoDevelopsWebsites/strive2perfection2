// Team Data
const teamData = {
    valorant: [
        {
            name: 'Phoenix',
            role: 'Entry Fragger',
            image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            stats: {
                matches: 150,
                winRate: '68%'
            }
        },
        // Add more players...
    ],
    cs2: [
        {
            name: 'Shadow',
            role: 'IGL',
            image: 'https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            stats: {
                matches: 200,
                winRate: '72%'
            }
        },
        // Add more players...
    ],
    rocketLeague: [
        {
            name: 'Boost',
            role: 'Striker',
            image: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            stats: {
                matches: 180,
                winRate: '75%'
            }
        },
        // Add more players...
    ]
};

// Render Player Cards
function renderPlayerCards() {
    const divisions = ['valorant', 'cs2', 'rocketLeague'];
    
    divisions.forEach(division => {
        const playersGrid = document.querySelector(`#${division}Players`);
        if (!playersGrid) return;

        teamData[division].forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.className = 'player-card';
            playerCard.innerHTML = `
                <div class="player-image">
                    <img src="${player.image}" alt="${player.name}">
                </div>
                <div class="player-info">
                    <h3>${player.name}</h3>
                    <p class="player-role">${player.role}</p>
                    <div class="player-stats">
                        <div class="stat">
                            <div class="stat-value">${player.stats.matches}</div>
                            <div class="stat-label">Matches</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${player.stats.winRate}</div>
                            <div class="stat-label">Win Rate</div>
                        </div>
                    </div>
                </div>
            `;
            playersGrid.appendChild(playerCard);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderPlayerCards);