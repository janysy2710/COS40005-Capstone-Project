
import { useMemo, useState } from "react";


const products = [
  {
    id: 1,
    name: "Executive Leadership Workbook",
    type: "Physical",
    category: "Leadership",
    format: "Hardcover",
    details: "240 pages · Ships in 2–4 days",
    price: 48,
    rating: 4.9,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Coaching Conversation Card Deck",
    type: "Physical",
    category: "Coaching & Templates",
    format: "100 cards",
    details: "Matte box · Bulk orders available",
    price: 36,
    rating: 4.8,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Team Facilitation Starter Kit",
    type: "Physical",
    category: "Coaching & Templates",
    format: "Printed guide",
    details: "Workshop-ready",
    price: 89,
    rating: 4.7,
    reviews: 140,
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Executive Daily Planner",
    type: "Physical",
    category: "Stationery",
    format: "12 months",
    details: "Hardcover · Ribbon marker",
    price: 32,
    rating: 5.0,
    reviews: 42,
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Leadership Foundations Ebook",
    type: "Digital",
    category: "Leadership",
    format: "PDF",
    details: "Instant download · 128 pages",
    price: 24,
    rating: 4.9,
    reviews: 96,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Strategic Planning Template Pack",
    type: "Digital",
    category: "Coaching & Templates",
    format: "12 templates",
    details: "Google Slides + PDF · Editable",
    price: 39,
    rating: 4.8,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "Performance Review Toolkit",
    type: "Digital",
    category: "Leadership",
    format: "PDF + Excel",
    details: "8 tools · Manager-ready",
    price: 29,
    rating: 4.9,
    reviews: 54,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "Manager Onboarding Checklist",
    type: "Digital",
    category: "Personal Growth",
    format: "PDF",
    details: "30-day plan · Instant access",
    price: 19,
    rating: 4.8,
    reviews: 31,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    name: "Workshop Facilitation Guide",
    type: "Digital",
    category: "Coaching & Templates",
    format: "PDF",
    details: "60 pages · Print-ready",
    price: 34,
    rating: 4.9,
    reviews: 28,
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=80",
  },
  
  {
    id: 10,
    name: "Personal Growth Journal",
    type: "Physical",
    category: "Personal Growth",
    format: "Hardcover",
    details: "90-day journal · Daily reflection prompts",
    price: 28,
    rating: 4.8,
    reviews: 35,
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 11,
    name: "Leadership Meeting Templates",
    type: "Digital",
    category: "Coaching & Templates",
    format: "PDF + Slides",
    details: "15 templates · Instant download",
    price: 25,
    rating: 4.7,
    reviews: 19,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 12,
    name: "Leadership Starter Kit Bundle",
    type: "Digital",
    category: "Leadership",
    format: "Digital bundle",
    details: "Workbook and planning templates",
    price: 59,
    rating: 4.9,
    reviews: 27,
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
  },

];

const categories = [
  "Leadership",
  "Stationery",
  "Personal Growth",
  "Coaching & Templates",
];

const formats = [
  "Workbooks",
  "Card Decks",
  "Planners",
  "Ebooks",
  "Templates",
];

const categoryCounts = {
  Leadership: 8,
  Stationery: 10,
  "Personal Growth": 7,
  "Coaching & Templates": 13,
};

const formatCounts = {
  Workbooks: 6,
  "Card Decks": 4,
  Planners: 3,
  Ebooks: 5,
  Templates: 8,
};

function getFormatGroup(product) {
  const name = product.name.toLowerCase();

  if (name.includes("workbook")) return "Workbooks";
  if (name.includes("card deck")) return "Card Decks";
  if (name.includes("planner") || name.includes("journal")) {
    return "Planners";
  }
  if (name.includes("ebook")) return "Ebooks";

  return "Templates";
}

function Store() {
  const [search, setSearch] = useState("");
  const [productType, setProductType] = useState("All");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedFormats, setSelectedFormats] = useState([]);
  const [sortBy, setSortBy] = useState("featured");
  const [page, setPage] = useState(1);
  
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoMessage, setPromoMessage] = useState("");


  const pageSize = 6;

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        productType === "All" ||
        product.type === productType ||
        (productType === "Bundles" && product.name.includes("Kit"));

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const matchesFormat =
        selectedFormats.length === 0 ||
        selectedFormats.includes(getFormatGroup(product));

      return (
        matchesSearch &&
        matchesType &&
        matchesCategory &&
        matchesFormat
      );

    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, productType, selectedCategories,selectedFormats, sortBy]);

  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const visibleProducts = filteredProducts.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  function updateSearch(value) {
    setSearch(value);
    setPage(1);
  }

  function updateType(value) {
    setProductType(value);
    setPage(1);
  }

  function toggleCategory(category) {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
    setPage(1);
  }
  
function toggleFormat(format) {
  setSelectedFormats((current) =>
    current.includes(format)
      ? current.filter((item) => item !== format)
      : [...current, format]
  );
  setPage(1);
}


  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  }

  function resetFilters() {
    setSearch("");
    setProductType("All");
    setSelectedCategories([]);
    setSelectedFormats([]);
    setSortBy("featured");
    setPage(1);
  }
  
  function changeCartQuantity(productId, change) {
    setCart((current) =>
      current.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      )
    );
  }

  function removeFromCart(productId) {
    setCart((current) =>
      current.filter((item) => item.id !== productId)
    );
  }

  function applyPromoCode() {
    if (promoCode.trim().toUpperCase() === "MT10") {
      setPromoApplied(true);
      setPromoMessage("Promo code applied: 10% off.");
    } else {
      setPromoApplied(false);
      setPromoMessage("Invalid code. Try MT10 for this demo.");
    }
  }

  const cartItemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartSubtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartDiscount = promoApplied ? cartSubtotal * 0.1 : 0;
  const cartTotal = cartSubtotal - cartDiscount;


 
if (selectedProduct) {
  return (
    <main className="store-page product-detail-page">
      <nav className="product-breadcrumb" aria-label="Breadcrumb">
        <a href="#store" onClick={() => setSelectedProduct(null)}>
          Store
        </a>
        <span>›</span>
        <span>{selectedProduct.category}</span>
        <span>›</span>
        <span>{selectedProduct.name}</span>
      </nav>

      <section className="product-detail-layout">
        <div className="product-detail-main">
          <p className="store-eyebrow">{selectedProduct.category}</p>
          <h1>{selectedProduct.name}</h1>

          <p className="detail-rating">
            ★ {selectedProduct.rating.toFixed(1)} / 5
            <span> · </span>
            {selectedProduct.reviews} reviews
          </p>

          <div className="product-detail-image-wrap">
            <img
              className="product-detail-image"
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />
          </div>

          <section className="detail-content-section">
            <h2>Description</h2>
            <p>{selectedProduct.details}</p>
            <p>
              This product is designed to support leadership development,
              workplace performance, and practical professional growth.
            </p>
          </section>

          <section className="detail-content-section inside-section">
            <h2>What You'll Find Inside</h2>
            <ul>
              <li>Practical guidance and useful resources</li>
              <li>Tools to support planning and professional development</li>
              <li>Ideas that can be applied in everyday work</li>
              <li>Resources for personal and team growth</li>
            </ul>
          </section>

          <section className="detail-content-section">
            <h2>Specifications</h2>

            <details className="detail-accordion">
              <summary>Format &amp; Binding</summary>
              <p>
                {selectedProduct.format}. {selectedProduct.details}
              </p>
            </details>

            <details className="detail-accordion">
              <summary>Shipping &amp; Delivery</summary>
              <p>
                {selectedProduct.type === "Digital"
                  ? "Digital product. Download availability will depend on the final delivery setup."
                  : "Shipping details and estimated delivery will be confirmed at checkout."}
              </p>
            </details>
          </section>

          <section className="product-team-section">
            <h2>Product Design Team</h2>
            <p>
              Our team develops practical resources to support leadership,
              learning, and workplace performance.
            </p>
          </section>
        </div>

        <aside className="product-detail-info">
          <p className="detail-panel-heading">PRODUCT DETAILS</p>
          <p className="detail-price">
            MYR{selectedProduct.price.toFixed(2)}
            <span> / unit</span>
          </p>

          <label className="detail-field-label" htmlFor="product-format">
            FORMAT
          </label>
          <select
            id="product-format"
            className="detail-format-select"
            defaultValue={selectedProduct.format}
          >
            <option value={selectedProduct.format}>
              {selectedProduct.format}
            </option>
          </select>

          <div className="detail-quantity">
            <span>QUANTITY</span>
            <div className="quantity-controls">
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => Math.max(1, current - 1))
                }
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            className="store-action-button detail-add-button"
            onClick={() => {
              for (let i = 0; i < quantity; i += 1) {
                addToCart(selectedProduct);
              }
              setSelectedProduct(null);
              setQuantity(1);
              setShowCart(true);
            }}
          >
            Add to Cart
          </button>

          {selectedProduct.type === "Digital" && (
            <button
              type="button"
              className="detail-digital-button"
              onClick={() => alert("Digital edition preview is not available yet.")}
            >
              View Digital Edition
            </button>
          )}

          <div className="detail-shipping-info">
            <p>✓ Secure checkout</p>
            <p>
              ✓{" "}
              {selectedProduct.type === "Digital"
                ? "Digital delivery"
                : "Shipping information provided at checkout"}
            </p>
          </div>
        </aside>
            </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <strong>✦ MT Alchemy</strong>
            <p>
              Transforming corporate culture and workplace performance
              through human-centred leadership development and measurable
              training systems.
            </p>
          </div>

          <div className="footer-column">
            <h3>SOLUTIONS</h3>
            <a href="#programmes">Leadership Cohorts</a>
            <a href="#programmes">Performance Design</a>
            <a href="#programmes">Individual Mastery</a>
            <a href="#programmes">Executive Coaching</a>
          </div>

          <div className="footer-column">
            <h3>COMPANY</h3>
            <a href="#our-story">Our Story</a>
            <a href="#our-story">Careers at MT Alchemy</a>
            <a href="#contact">Client Outcomes</a>
            <a href="#contact">News & Insights</a>
          </div>

          <div className="footer-column">
            <h3>PORTALS</h3>
            <a href="#learning">Learning Dashboard</a>
            <a href="#store">Corporate Store</a>
            <a href="#contact">Partner Integration</a>
            <a href="#contact">System Status</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 MT Alchemy. All rights reserved.</span>

          <div>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#security">Trust & Security</a>
          </div>
        </div>
    

      </footer>

    </main>
  );
}
  



  if (showCart) {
    return (
      <main className="store-page product-detail-page">
        <button
          type="button"
          className="back-to-store"
          onClick={() => setShowCart(false)}
        >
          ← Continue Shopping
        </button>

        <section className="cart-page-header">
          <p className="store-eyebrow">YOUR SELECTION</p>
          <h1>Shopping Cart</h1>
          <p>Review your products before proceeding to checkout.</p>
        </section>

        {cart.length === 0 ? (
          <section className="cart-empty">
            <h2>Your cart is empty</h2>
            <p>Explore our store to find something useful for you.</p>
            <button
              type="button"
              className="store-action-button"
              onClick={() => setShowCart(false)}
            >
              Browse Products
            </button>
          </section>
        ) : (
          <section className="shopping-cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img
                    className="cart-item-image"
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-info">
                    <p className="cart-item-type">{item.type}</p>
                    <h2>{item.name}</h2>
                    <p>{item.format}</p>
                    <strong>${item.price.toFixed(2)}</strong>

                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button
                          type="button"
                          onClick={() =>
                            changeCartQuantity(item.id, -1)
                          }
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() =>
                            changeCartQuantity(item.id, 1)
                          }
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        className="cart-remove-button"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <strong className="cart-line-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </strong>
                </article>
              ))}
            </div>

            <aside className="cart-summary">
              <h2>Order Summary</h2>

              <div className="cart-summary-row">
                <span>Items ({cartItemCount})</span>
                <strong>${cartSubtotal.toFixed(2)}</strong>
              </div>

              <label className="promo-label" htmlFor="promo-code">
                Promo code
              </label>

              <div className="promo-input-row">
                <input
                  id="promo-code"
                  type="text"
                  placeholder="Enter code"
                  value={promoCode}
                  onChange={(event) => {
                    setPromoCode(event.target.value);
                    setPromoApplied(false);
                    setPromoMessage("");
                  }}
                />

                <button type="button" onClick={applyPromoCode}>
                  Apply
                </button>
              </div>

              {promoMessage && (
                <p
                  className={`promo-message ${
                    promoApplied ? "promo-success" : "promo-error"
                  }`}
                >
                  {promoMessage}
                </p>
              )}

              {promoApplied && (
                <div className="cart-summary-row">
                  <span>Discount (10%)</span>
                  <strong>-${cartDiscount.toFixed(2)}</strong>
                </div>
              )}

              <p className="cart-shipping-note">
                Shipping, if applicable, will be confirmed at checkout.
              </p>

              <div className="cart-summary-total">
                <span>Total</span>
                <strong>${cartTotal.toFixed(2)}</strong>
              </div>

              <p className="cart-checkout-note">
                Checkout will be connected in the next step.
              </p>
            </aside>
          </section>
        )}
      </main>
    );
  }

  return (
    <main className="store-page">
      <section className="store-hero">
        <p className="store-eyebrow">MT ALCHEMY PRODUCT CATALOG</p>
        <h1>
          Practical tools for leadership, teams, and{" "}
          <span>personal growth.</span>
        </h1>
        <p className="store-intro">
          Browse physical workbooks, coaching decks, facilitation kits,
          planners, ebooks, templates, and downloadable toolkits designed
          to support modern leadership and corporate training programs.
        </p>
      </section>

      <section className="store-catalog">
        
<aside className="store-filters">
  <div className="filter-heading">
    <h2>Filters</h2>
    <button type="button" onClick={resetFilters}>
      Reset All
    </button>
  </div>

  <div className="filter-group">
    <label htmlFor="product-search">Search Products</label>
    <input
      id="product-search"
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(event) => {
        setSearch(event.target.value);
        setPage(1);
      }}
    />
  </div>

  <fieldset className="filter-group">
    <legend>Product Type</legend>

    {[
      { value: "Physical", label: "Physical Products" },
      { value: "Digital", label: "Digital Downloads" },
      { value: "Bundles", label: "Bundles & Kits" },
    ].map((type) => (
      <label className="filter-option" key={type.value}>
        <input
          type="checkbox"
          checked={productType === type.value}
          onChange={() =>
            updateType(productType === type.value ? "All" : type.value)
          }
        />
        <span>
          {type.label} 
        </span>
      </label>
    ))}
  </fieldset>

  <fieldset className="filter-group">
    <legend>Category</legend>

    {categories.map((category) => (
      <label className="filter-option" key={category}>
        <input
          type="checkbox"
          checked={selectedCategories.includes(category)}
          onChange={() => toggleCategory(category)}
        />
        <span>
          {category} 
        </span>
      </label>
    ))}
  </fieldset>

  <fieldset className="filter-group">
    <legend>Format</legend>

     {formats.map((format) => (
    format === "Planners" ? (
      <div className="filter-option" key={format}>
        {format}
      </div>
    ) : (
      <label className="filter-option" key={format}>
        <input
          type="checkbox"
          checked={selectedFormats.includes(format)}
          onChange={() => toggleFormat(format)}
        />
        <span>{format}</span>
      </label>
    )
  ))}
</fieldset>
  
</aside>


        <div className="store-results">
          <div className="store-toolbar">
            <p>
              <strong>Showing {filteredProducts.length} products</strong>
              <span> across physical and digital collections</span>
            </p>

            <label className="sort-control">
              Sort by:
              <select
                value={sortBy}
                onChange={(event) => {
                  setSortBy(event.target.value);
                  setPage(1);
                }}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Highest rated</option>
              </select>
            </label>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="store-product-grid">
              {visibleProducts.map((product) => (
                <article className="store-product-card" key={product.id}>

                <button
                 type="button"
                 className="product-image-button"
                 onClick={() => {
                 setSelectedProduct(product);
                 setQuantity(1);
              }}
              aria-label={`View details for ${product.name}`}
             >
             <img
               className="store-product-image"
               src={product.image}
              alt={product.name}
               loading="lazy"
              />
             </button>

                  <div className="store-product-info">
                    <div className="product-meta">
                      <span>{product.type}</span>
                      <span className="product-rating">
                        ★ {product.rating.toFixed(1)} ({product.reviews} reviews)
                      </span>
                    </div>

                    
                          <h2>
                              <button
                                  type="button"
                                  className="product-title-button"
                                  onClick={() => {
                                      setSelectedProduct(product);
                                      setQuantity(1);
                                  }}
                              >
                                  {product.name}
                              </button>
                          </h2>

                    <p className="product-details">
                      {product.format} <span>•</span> {product.details}
                    </p>

                    <div className="product-card-bottom">
                      <strong>RM{product.price}</strong>
                      <button
                        type="button"
                        className="store-action-button"
                        onClick={() => {
                          addToCart(product);
                          setShowCart(true);
                        }}
                      >
                        {product.type === "Digital" ? "Download Now" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="store-empty-state">
              <h2>No products found</h2>
              <p>Try another search term or reset your filters.</p>
              <button
                type="button"
                className="store-action-button"
                onClick={resetFilters}
              >
                Reset filters
              </button>
            </div>
          )}

          {filteredProducts.length > pageSize && (
            <nav className="store-pagination" aria-label="Product pages">
              <button
                type="button"
                disabled={page === 1}
                onClick={() => setPage((current) => current - 1)}
                aria-label="Previous page"
              >
                ←
              </button>

              {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    type="button"
                    key={pageNumber}
                    className={page === pageNumber ? "selected" : ""}
                    aria-current={page === pageNumber ? "page" : undefined}
                    onClick={() => setPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                )
              )}

              <button
                type="button"
                disabled={page === pageCount}
                onClick={() => setPage((current) => current + 1)}
                aria-label="Next page"
              >
                →
              </button>
            </nav>
          )}
        </div>
      </section>
    
     {/* Footer */}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <strong>✦ MT Alchemy</strong>
            <p>
              Transforming corporate culture and workplace performance
              through human-centred leadership development and measurable
              training systems.
            </p>
          </div>

          <div className="footer-column">
            <h3>SOLUTIONS</h3>
            <a href="#programmes">Leadership Cohorts</a>
            <a href="#programmes">Performance Design</a>
            <a href="#programmes">Individual Mastery</a>
            <a href="#programmes">Executive Coaching</a>
          </div>

          <div className="footer-column">
            <h3>COMPANY</h3>
            <a href="#our-story">Our Story</a>
            <a href="#our-story">Careers at MT Alchemy</a>
            <a href="#contact">Client Outcomes</a>
            <a href="#contact">News & Insights</a>
          </div>

          <div className="footer-column">
            <h3>PORTALS</h3>
            <a href="#learning">Learning Dashboard</a>
            <a href="#store">Corporate Store</a>
            <a href="#contact">Partner Integration</a>
            <a href="#contact">System Status</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 MT Alchemy. All rights reserved.</span>

          <div>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#security">Trust & Security</a>
          </div>
        </div>
      </footer>

    </main>
  );
}

 

export default Store;
