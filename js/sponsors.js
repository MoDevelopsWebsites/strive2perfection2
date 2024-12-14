// Sponsors Data
const sponsorsData = [
    {
        name: 'Tech Gear Pro',
        description: 'Premium gaming peripherals for professional players.',
        icon: 'fas fa-keyboard'
    },
    // Add more sponsors...
];

// Render Partner Sponsors
function renderSponsors() {
    const sponsorsGrid = document.querySelector('.sponsors-grid');
    
    sponsorsData.forEach(sponsor => {
        const sponsorCard = document.createElement('div');
        sponsorCard.className = 'sponsor-card';
        
        sponsorCard.innerHTML = `
            <div class="sponsor-logo">
                <i class="${sponsor.icon}"></i>
                <h3>${sponsor.name}</h3>
            </div>
            <p class="sponsor-description">${sponsor.description}</p>
            <a href="#" class="sponsor-link">Learn More</a>
        `;
        
        sponsorsGrid.appendChild(sponsorCard);
    });
}

// Initialize Sponsors Page
document.addEventListener('DOMContentLoaded', renderSponsors);