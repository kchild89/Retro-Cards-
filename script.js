document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("card-container");
  const cartCount = document.getElementById("cart-count");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Sample card data
  const cards = [
    {
      id: 1,
      name: "Cyber Phoenix",
      price: 10,
      img: "Images/cyber-phoenix.png",
    },
    {
      id: 2,
      name: "Neon Dragon",
      price: 15,
      img: "Images/neon-dragon.png",
    },
    {
      id: 3,
      name: "Retro Warrior",
      price: 20,
      img: "Images/retro-warrior.png",
    },
    {
      id: 4,
      name: "Synth Ninja",
      price: 25,
      img: "Images/synth-ninja.png",
    },
    {
      id: 5,
      name: "Laser Valkyrie",
      price: 30,
      img: "Images/laser-valkyrie.png",
    },
    {
      id: 6,
      name: "Holo Golem",
      price: 35,
      img: "Images/holo-golem.png",
    },
  ];

  function updateCartCount() {
    cartCount.textContent = cart.length;
  }

  function addToCart(card) {
    cart.push(card);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }

  function loadStore() {
    if (!cardContainer) return;

    cardContainer.innerHTML = "";
    cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.innerHTML = `
                <img src="${card.img}" alt="${card.name}">
                <h3>${card.name}</h3>
                <p>$${card.price}</p>
                <button class="buy-btn" data-id="${card.id}">Add to Cart</button>
            `;
      cardContainer.appendChild(cardElement);
    });

    document.querySelectorAll(".buy-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const cardId = parseInt(e.target.dataset.id);
        const selectedCard = cards.find((c) => c.id === cardId);
        addToCart(selectedCard);
      });
    });
  }

  updateCartCount();
  loadStore();
});
