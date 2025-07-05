// ============ CONFIGURACIÓN ============ //
const API_URL = "data/products.json";  // JSON local con tus blends
const LS_KEY  = "aroma_cart";

// ============ STATE ============ //
let cart = JSON.parse(localStorage.getItem(LS_KEY)) || [];

// ============ FETCH & RENDER PRODUCTS ============ //
async function fetchProducts() {
  try {
    const res  = await fetch(API_URL);
    const data = await res.json();
    renderProducts(data);
  } catch (err) {
    console.error("Error al cargar productos:", err);
  }
}

function renderProducts(products) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach(prod => {
    const card = document.createElement("article");
    card.className = "card blend-card";
    card.style.maxWidth = "280px";
    card.innerHTML = `
      <img src="${prod.image}" class="card-img-top" alt="${prod.title}">
      <div class="card-body d-flex flex-column">
        <h3 class="card-title fs-6">${prod.title}</h3>
        <p class="small mb-1">${prod.description}</p>
        <p class="price mb-2">$${prod.price}</p>
        <button class="btn btn-accent mt-auto" data-id="${prod.id}">Agregar</button>
      </div>`;
    container.appendChild(card);
  });

  container.querySelectorAll("button[data-id]").forEach(btn =>
    btn.addEventListener("click", () => addToCart(+btn.dataset.id, products))
  );
}

// ============ CART LOGIC ============ //
function addToCart(id, products) {
  const item = cart.find(it => it.id === id);
  if (item) item.qty++;
  else {
    const prod = products.find(p => p.id === id);
    cart.push({ ...prod, qty: 1 });
  }
  persistCart();
  renderCart();
}

function persistCart() {
  localStorage.setItem(LS_KEY, JSON.stringify(cart));
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  persistCart();
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeItem(id);
  else {
    persistCart();
    renderCart();
  }
}

// ============ RENDER CART ============ //
function renderCart() {
  const list  = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  const count = document.getElementById("cart-count");

  list.innerHTML = "";
  let sum = 0, items = 0;

  cart.forEach(({ id, title, price, qty, image }) => {
    sum   += price * qty;
    items += qty;

    const li = document.createElement("li");
    li.className = "list-group-item d-flex align-items-center gap-2";
    li.innerHTML = `
      <img src="${image}" alt="${title}" width="40" height="40">
      <span class="flex-grow-1 small">${title}</span>
      <div class="btn-group btn-group-sm" role="group">
        <button class="btn btn-outline-secondary" data-action="dec" data-id="${id}">-</button>
        <span class="px-2">${qty}</span>
        <button class="btn btn-outline-secondary" data-action="inc" data-id="${id}">+</button>
      </div>
      <span class="ms-2 small fw-bold">$${(price * qty).toLocaleString()}</span>
      <button class="btn btn-sm btn-danger ms-2" data-action="del" data-id="${id}">&times;</button>
    `;
    list.appendChild(li);
  });

  list.querySelectorAll("button").forEach(btn => {
    const id  = +btn.dataset.id;
    const act = btn.dataset.action;
    btn.addEventListener("click", () => {
      if (act === "inc") changeQty(id,  1);
      if (act === "dec") changeQty(id, -1);
      if (act === "del") removeItem(id);
    });
  });

  total.textContent  = sum.toLocaleString();
  count.textContent  = items;
}

// ============ CHECKOUT ============
function checkoutCart() {
  if (cart.length === 0) {
    Swal.fire("Tu carrito está vacío", "", "info");
    return;
  }

  Swal.fire({
    title: "¿Confirmar compra?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Sí, comprar",
    cancelButtonText: "Cancelar"
  }).then(res => {
    if (res.isConfirmed) {
      cart = [];
      persistCart();
      renderCart();

      Swal.fire("¡Compra realizada!", "Gracias por confiar en Aroma Café ☕️", "success");
      bootstrap.Offcanvas.getOrCreateInstance(document.getElementById("carrito")).hide();
    }
  });
}

// ============ FORM VALIDATION (Bootstrap) ============ //
(() => {
  const forms = document.querySelectorAll('.needs-validation');
  forms.forEach(f =>
    f.addEventListener('submit', ev => {
      if (!f.checkValidity()) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      f.classList.add('was-validated');
    })
  );
})();

// ============ INIT ============ //
fetchProducts();
renderCart();
document.getElementById("checkout").addEventListener("click", checkoutCart);

