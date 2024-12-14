// News Data
const newsData = [
    {
        id: 1,
        title: 'S2P Valorant Team Wins Major Championship',
        category: 'tournaments',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        excerpt: 'Our Valorant team showcased exceptional skill and teamwork...',
        date: '2024-03-10'
    },
    // Add more news articles...
];

// Filter News Articles
function filterNews(category) {
    const articles = document.querySelectorAll('.news-article');
    articles.forEach(article => {
        if (category === 'all' || article.dataset.category === category) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

// Render News Articles
function renderNews() {
    const newsGrid = document.querySelector('.news-grid');
    
    newsData.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.className = 'news-article';
        articleElement.dataset.category = article.category;
        
        articleElement.innerHTML = `
            <div class="article-image">
                <img src="${article.image}" alt="${article.title}">
            </div>
            <div class="article-content">
                <div class="article-category">${article.category}</div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <a href="#" class="read-more">
                    Read More <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        newsGrid.appendChild(articleElement);
    });
}

// Initialize News Page
document.addEventListener('DOMContentLoaded', () => {
    renderNews();
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterNews(button.dataset.filter);
        });
    });
});