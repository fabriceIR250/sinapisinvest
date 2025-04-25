import React from 'react';

function Food() {
  return (
    <main className="flex-grow">
      <div className="bg-light py-5">
        <div className="container">
          <h1 className="display-4 text-center text-dark">Food & Drinks</h1>
          <div className="w-25 mx-auto border-top border-primary border-3 my-4"></div>
        </div>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img 
                src="https://images.unsplash.com/photo-1626200711570-ea66d2226668" 
                alt="Food Services" 
                className="img-fluid rounded shadow" 
              />
            </div>
            <div className="col-md-6">
              <h2 className="h1 mb-4 text-dark">Fresh and Tasty Food Every Day</h2>
              <p className="lead mb-4">
                We cook fresh and tasty food for you every day. Whether you want a full meal or just a snack, 
                we are here to serve you. We also offer drinks and catering for events.
              </p>
              <p className="lead mb-4">
                Our experienced chefs prepare delicious meals using quality ingredients. From local dishes to 
                international cuisine, we have options to satisfy every palate.
              </p>
              <div className="bg-info bg-opacity-10 p-4 rounded border border-info">
                <h3 className="h4 text-info mb-3">Food Service Hours</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">Breakfast: 7:00 AM - 10:00 AM</li>
                  <li className="mb-2">Lunch: 12:00 PM - 3:00 PM</li>
                  <li className="mb-2">Dinner: 6:00 PM - 9:00 PM</li>
                  <li>Snacks & Drinks: Available all day</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="display-4 text-center text-dark mb-5">What We Offer</h2>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm text-center p-4">
                <div className="bg-primary text-white rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                  </svg>
                </div>
                <h3 className="h4 mb-3 text-dark">Local & International Food</h3>
                <p>
                  A variety of dishes from Rwandan cuisine to international favorites.
                </p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm text-center p-4">
                <div className="bg-primary text-white rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </div>
                <h3 className="h4 mb-3 text-dark">Snacks & Fast Food</h3>
                <p>
                  Quick bites and fast food options for when you're on the go.
                </p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm text-center p-4">
                <div className="bg-primary text-white rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                  </svg>
                </div>
                <h3 className="h4 mb-3 text-dark">Soft Drinks & Juice</h3>
                <p>
                  Refreshing beverages including soft drinks, fresh juices, and more.
                </p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm text-center p-4">
                <div className="bg-primary text-white rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                  </svg>
                </div>
                <h3 className="h4 mb-3 text-dark">Event Food Services</h3>
                <p>
                  Catering services for special events, meetings, and celebrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="display-4 text-center text-dark mb-5">Our Food Gallery</h2>
          
          <div className="row g-4">
            <div className="col-md-4">
              <img 
                src="https://novoxinc.com/cdn/shop/articles/elevate-your-hotel-restaurant-experience-with-designer-buffet-table-top-food-display-ware_hero_image_1024x576px_1024x.jpg?v=1693563963" 
                alt="Food Display" 
                className="img-fluid rounded shadow" 
                style={{height: '256px', width: '100%', objectFit: 'cover'}}
              />
            </div>
            <div className="col-md-4">
              <img 
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/31/ec/37/k-e-catering-services.jpg?w=800&h=500&s=1" 
                alt="Catering Service" 
                className="img-fluid rounded shadow" 
                style={{height: '256px', width: '100%', objectFit: 'cover'}}
              />
            </div>
            <div className="col-md-4">
              <img 
                src="https://easyfoodhandlers.com/wp-content/uploads/2024/04/Why-Its-So-Important-To-Properly-Prep-Food.png" 
                alt="Food Preparation" 
                className="img-fluid rounded shadow" 
                style={{height: '256px', width: '100%', objectFit: 'cover'}}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-4 text-center mb-5">Catering Services</h2>
              
              <div className="bg-info bg-opacity-25 p-5 rounded shadow-lg mb-5">
                <h3 className="h2 text-center mb-4">Let Us Cater Your Next Event</h3>
                <p className="lead mb-5 text-center">
                  From small gatherings to large celebrations, we offer catering services tailored to your needs. 
                  Our experienced team will work with you to create a menu that suits your event and budget.
                </p>
                
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="text-warning me-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="h5 mb-2">Corporate Events</h4>
                        <p>Business meetings, conferences, and office celebrations.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="text-warning me-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="h5 mb-2">Private Celebrations</h4>
                        <p>Birthdays, anniversaries, and family gatherings.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="text-warning me-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="h5 mb-2">Weddings</h4>
                        <p>From intimate ceremonies to large receptions.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="text-warning me-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="h5 mb-2">Community Events</h4>
                        <p>Local gatherings, fundraisers, and cultural celebrations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <a href="/contact" className="btn btn-warning btn-lg px-5 py-3">Request Catering Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Food;