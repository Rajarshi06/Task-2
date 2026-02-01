document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: "Gaming Laptop", price: 86000, rating: 4.8, category: "Electronics"},
        { name: "Wireless Mouse", price: 200, rating: 4.2, category: "Electronics" },
        { name: "Mechanical Keyboard", price: 900, rating: 4.6, category: "Electronics" },
        { name: "Monitor 24 inch", price: 2500, rating: 4.4, category: "Electronics" },
        { name: "60W C-TYPE Charger", price: 650, rating: 4.1, category: "Electronics" },
        { name: "Cotton T-Shirt", price: 450, rating: 3.9, category: "Fashion" },
        { name: "Leather Jacket", price: 2000, rating: 4.5, category: "Fashion" },
        { name: "Running Shoes", price: 3500, rating: 4.3, category: "Fashion" },
        { name: "Denim Jeans", price: 2500, rating: 4.0, category: "Fashion" },
        { name: "Winter Beanie", price: 300, rating: 4.7, category: "Fashion" },
        { name: "Coffee Maker", price: 3500, rating: 4.0, category: "Home" },
        { name: "Desk Lamp", price: 800, rating: 4.2, category: "Home" },
        { name: "Memory Foam Pillow", price: 500, rating: 4.5, category: "Home" },
        { name: "Air Purifier", price: 1500, rating: 4.6, category: "Home" },
        { name: "Electric Kettle", price: 2500, rating: 4.1, category: "Home" },
        { name: "Coding for Dummies", price: 550, rating: 4.9, category: "Books" },
        { name: "Mystery Novel", price: 350, rating: 4.3, category: "Books" },
        { name: "Cookbook", price: 399, rating: 4.5, category: "Books" },
        { name: "Sci-Fi Anthology", price: 480, rating: 4.7, category: "Books" },
        { name: "JavaScript Guide", price: 600, rating: 5.0, category: "Books" }
    ];
    const grid = document.getElementById('productGrid');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortOptions = document.getElementById('sortOptions');

    function displayProducts(data) {
    grid.innerHTML = data.map(p => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}" class="product-img">
            <span class="category">${p.category}</span>
            <h3>${p.name}</h3>
            <p class="price">₹${p.price.toLocaleString('en-IN')}</p>
            <p class="rating">⭐ ${p.rating}</p>
        </div>
    `).join('');
}
    function updateDisplay() {
        let filtered = [...products];

        const category = categoryFilter.value;
        if (category !== 'all') {
            filtered = filtered.filter(p => p.category === category);
        }
        const sortVal = sortOptions.value;
        if (sortVal === 'price-asc') filtered.sort((a, b) => a.price - b.price);
        else if (sortVal === 'price-desc') filtered.sort((a, b) => b.price - a.price);
        else if (sortVal === 'name-asc') filtered.sort((a, b) => a.name.localeCompare(b.name));
        else if (sortVal === 'name-desc') filtered.sort((a, b) => b.name.localeCompare(a.name));
        else if (sortVal === 'rating-desc') filtered.sort((a, b) => b.rating - a.rating);

        displayProducts(filtered);
    }
    categoryFilter.addEventListener('change', updateDisplay);
    sortOptions.addEventListener('change', updateDisplay);
    displayProducts(products);
});