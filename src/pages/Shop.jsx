import React, { useState } from 'react';

function KidsShop() {
  const [cartItems, setCartItems] = useState([]);
  
  const featuredProducts = [
    {
      id: 1,
      name: "Educational Laptop",
      description: "Interactive learning computer with 50+ educational activities for kids ages 3-8.",
      price: 49.99,
      image: "https://images-na.ssl-images-amazon.com/images/I/71LHL64mt7L._UL500_.jpg"
    },
    {
      id: 2,
      name: "Remote Control Car",
      description: "2.4GHz RC car with 30m range, rechargeable battery, and LED lights.",
      price: 29.99,
      image: "https://www.patoys.in/cdn/shop/files/patoys-kids-electric-toy-big-size-benz-vintage-car-with-remote-control-636855.jpg?v=1742744611&width=1946"
    },
    {
      id: 3,
      name: "Kids Learning Tablet",
      description: "7\" Android tablet with parental controls and preloaded educational apps.",
      price: 79.99,
      image: "https://sc04.alicdn.com/kf/Hdd3221e090f44e5492605b85f1cbf955C.jpg"
    },
    {
      id: 4,
      name: "Pull Back Toy Cars (Set of 3)",
      description: "Durable plastic cars with pull-back action, no batteries needed.",
      price: 14.99,
      image: "https://i5.walmartimages.com/seo/PENGXIANG-Diecast-Metal-Pullback-Cars-Friction-Powered-Toy-Kids-8Pack-Mini-Car-Set-Ages-3-Older-Toddler-Toys-Die-Cast_d089ad43-78c6-47c8-8f5b-7e8805654776.d860226801bea1d2f3b90ab0bac02ea0.jpeg"
    },
    {
      id: 5,
      name: "Coding Robot for Kids",
      description: "Introduce programming basics with this fun, interactive robot.",
      price: 59.99,
      image: "https://stemeducationguide.com/wp-content/uploads/2019/06/lego-coding-bots-1.jpg"
    },
    {
      id: 6,
      name: "Race Track Set",
      description: "Complete race track with 2 cars, loops and boosters.",
      price: 39.99,
      image: "https://m.media-amazon.com/images/I/91LOU+sd1oL._AC_SL1500_.jpg"
    }
  ];

  const benefits = [
    {
      icon: "bi-shield-check",
      title: "Safe Materials",
      description: "All products made with non-toxic, child-safe materials"
    },
    {
      icon: "bi-mortarboard",
      title: "Educational Value",
      description: "Designed to develop skills while having fun"
    },
    {
      icon: "bi-award",
      title: "Quality Guarantee",
      description: "Durable products that withstand kids' play"
    }
  ];

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
      // Item already exists, update quantity
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      // Add new item
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const cartTotal = cartItems.reduce((total, item) => 
    total + (item.price * item.quantity), 0
  ).toFixed(2);

  // Cart component to reuse in multiple sections
  const ShoppingCart = () => (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">
          <i className="bi bi-cart3 me-2"></i>
          Your Shopping Cart
        </h5>
      </div>
      <div className="card-body p-0">
        {cartItems.length === 0 ? (
          <div className="p-4 text-center text-muted">
            <i className="bi bi-cart-x fs-1"></i>
            <p className="mt-2">Your cart is empty</p>
          </div>
        ) : (
          <ul className="list-group list-group-flush">
            {cartItems.map(item => (
              <li key={item.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="rounded" 
                      style={{ width: "40px", height: "40px", objectFit: "cover" }}
                    />
                    <div className="ms-2">
                      <h6 className="mb-0 fw-semibold">{item.name}</h6>
                      <small className="text-muted">${item.price.toFixed(2)}</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="input-group input-group-sm" style={{ width: "100px" }}>
                      <button 
                        className="btn btn-outline-secondary" 
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <input 
                        type="text" 
                        className="form-control text-center" 
                        value={item.quantity}
                        readOnly
                      />
                      <button 
                        className="btn btn-outline-secondary" 
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      className="btn btn-sm btn-link text-danger ms-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="card-footer">
          <div className="d-flex justify-content-between align-items-center fw-bold">
            <span>Total:</span>
            <span>${cartTotal}</span>
          </div>
          <button className="btn btn-primary w-100 mt-3">
            <i className="bi bi-credit-card me-2"></i>Checkout
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Hero Section with cart */}
      <div className="bg-primary bg-gradient text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 text-center text-lg-start mb-4 mb-lg-0">
              <h1 className="display-5 fw-bold mb-3">Kids Learning & Fun Products</h1>
              <p className="fs-4 mb-4">Quality educational computers and toy cars for children</p>
            </div>
            <div className="col-lg-4">
              {/* <ShoppingCart /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Products Section with cart sticky on the right */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="fw-bold text-center mb-5">Featured Products</h2>
              
              <div className="row row-cols-1 row-cols-md-2 g-4">
                {featuredProducts.map((product) => (
                  <div key={product.id} className="col">
                    <div className="card h-100 shadow-sm overflow-hidden transition-all hover-shadow">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="card-img-top" 
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{product.name}</h5>
                        <p className="card-text text-muted">{product.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fw-bold text-primary fs-5">${product.price.toFixed(2)}</span>
                          <button 
                            className="btn btn-primary"
                            onClick={() => addToCart(product)}
                          >
                            <i className="bi bi-cart-plus me-1"></i>
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/*cart on right side */}
            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="" style={{ marginTop: "85px" }}>
                <ShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Why Choose Our Kids Products?</h2>
          
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="col">
                <div className="card h-100 shadow-sm text-center p-4">
                  <div className="mb-4">
                    <i className={`${benefit.icon} text-primary fs-1`}></i>
                  </div>
                  <h4 className="card-title fw-bold">{benefit.title}</h4>
                  <p className="card-text text-muted">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default KidsShop;