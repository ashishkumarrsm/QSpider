const productContainer = document.getElementById("products");
const loadingElement = document.getElementById("loading");
const errorElement = document.getElementById("errorMessage");
const searchInput = document.getElementById("searchInput");

let allProducts = [];

const apiCall = async () => {
  try {
    loadingElement.style.display = "flex";
    errorElement.style.display = "none";
    
    const response = await fetch("https://fakestoreapi.com/products");
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    allProducts = data;
    
    loadingElement.style.display = "none";
    data.forEach((element) => {
      createCardData(element);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    loadingElement.style.display = "none";
    errorElement.style.display = "block";
  }
};

const createCardData = (data) => {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  card.innerHTML = `
    <div class="image-container">
      <img src='${data.image}' alt='${data.title}' />
      <div class="product-badge">${data.category}</div>
    </div>
    <div class="card-content">
      <h3 class="product-title">${data.title}</h3>
      <p class="product-category">${data.category}</p>
      <div class="rating">
        <span class="stars">${'⭐'.repeat(Math.floor(data.rating.rate))}</span>
        <span class="rating-text">(${data.rating.count})</span>
      </div>
      <p class="price">$${data.price}</p>
      <div class="button-group">
        <button class="btn btn-primary" onclick="addToCart(${data.id})">
          🛒 Add to Cart
        </button>
        <button class="btn btn-secondary" onclick="buyNow(${data.id})">
          💳 Buy Now
        </button>
      </div>
    </div>
  `;
  productContainer.appendChild(card);
};

// Search functionality
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  productContainer.innerHTML = "";
  
  if (searchTerm === "") {
    allProducts.forEach(product => createCardData(product));
  } else {
    const filteredProducts = allProducts.filter(product => 
      product.title.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
    filteredProducts.forEach(product => createCardData(product));
  }
});

// Cart and Buy Now functions
const addToCart = (productId) => {
  const product = allProducts.find(p => p.id === productId);
  alert(`Added "${product.title}" to cart!`);
};

const buyNow = (productId) => {
  const product = allProducts.find(p => p.id === productId);
  alert(`Redirecting to checkout for "${product.title}"...`);
};

// Initialize the app
apiCall();



