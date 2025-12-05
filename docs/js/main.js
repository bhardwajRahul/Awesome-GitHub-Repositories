let allRepos = [];

// Load repositories from JSON
async function loadRepositories() {
    try {
        const response = await fetch('../data/repositories.json');
        if (!response.ok) throw new Error('Failed to fetch repositories');
        allRepos = await response.json();
        
        // Parse URL parameters for category
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category');
        
        if (category) {
            document.getElementById('categoryFilter').value = category;
            displayRepositories(allRepos.filter(r => r.category === category));
        } else {
            displayRepositories(allRepos);
        }
    } catch (error) {
        console.error('Error loading repositories:', error);
        const reposList = document.getElementById('reposList');
        if (reposList) {
            reposList.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Error loading repositories.</p>';
        }
    }
}

// Display repositories
function displayRepositories(repos) {
    const reposList = document.getElementById('reposList');
    if (!reposList) return;
    
    if (repos.length === 0) {
        reposList.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No repositories found. Try adjusting your search or filters.</p>';
        return;
    }

    reposList.innerHTML = repos.map(repo => `
        <div class="repo-card">
            <h3>${escapeHtml(repo.name)}</h3>
            <div class="repo-owner">by ${escapeHtml(repo.owner)}</div>
            <p class="repo-description">${escapeHtml(repo.description)}</p>
            <div class="repo-meta">
                <span class="repo-category">${escapeHtml(repo.category)}</span>
                <span>⭐ ${repo.stars || 0}</span>
            </div>
            <div class="repo-meta">
                <span>${escapeHtml(repo.language || 'N/A')}</span>
            </div>
            <a href="${repo.url}" target="_blank" class="repo-link">View on GitHub →</a>
        </div>
    `).join('');
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const categoryFilter = document.getElementById('categoryFilter');
        const selectedCategory = categoryFilter ? categoryFilter.value : '';
        
        let filtered = allRepos.filter(repo =>
            repo.name.toLowerCase().includes(query) ||
            repo.description.toLowerCase().includes(query) ||
            repo.owner.toLowerCase().includes(query)
        );
        
        if (selectedCategory) {
            filtered = filtered.filter(repo => repo.category === selectedCategory);
        }
        
        displayRepositories(filtered);
    });
}

// Filter by category
function setupFilter() {
    const categoryFilter = document.getElementById('categoryFilter');
    if (!categoryFilter) return;

    categoryFilter.addEventListener('change', (e) => {
        const category = e.target.value;
        const searchInput = document.getElementById('searchInput');
        const query = searchInput ? searchInput.value.toLowerCase() : '';
        
        let filtered = allRepos;
        
        if (category) {
            filtered = filtered.filter(repo => repo.category === category);
        }
        
        if (query) {
            filtered = filtered.filter(repo =>
                repo.name.toLowerCase().includes(query) ||
                repo.description.toLowerCase().includes(query) ||
                repo.owner.toLowerCase().includes(query)
            );
        }
        
        displayRepositories(filtered);
    });
}

// Reset filters
function setupReset() {
    const resetBtn = document.getElementById('resetBtn');
    if (!resetBtn) return;

    resetBtn.addEventListener('click', () => {
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('categoryFilter');
        
        if (searchInput) searchInput.value = '';
        if (categoryFilter) categoryFilter.value = '';
        
        displayRepositories(allRepos);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('reposList')) {
        loadRepositories();
        setupSearch();
        setupFilter();
        setupReset();
    }
});
