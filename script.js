// Загрузка товаров
async function loadProducts() {
    const response = await fetch('products.json');
    const products = await response.json();
    const grid = document.getElementById('products-grid');
    
    products.forEach(product => {
        grid.innerHTML += `
            <div class="product-card">
                <h3>${product.name}</h3>
                <p>💵 Цена: $${product.price}</p>
                <p>📦 Осталось: ${product.quantity}</p>
                <button onclick="buyItem('${product.id}')">Купить через Telegram</button>
            </div>
        `;
    });
}

// Покупка через бота
function buyItem(productId) {
    const botUrl = `https://t.me/YourBotName?start=product_${productId}`;
    window.open(botUrl, '_blank');
}

// Инициализация
document.addEventListener('DOMContentLoaded', loadProducts);
