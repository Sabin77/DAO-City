// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceCard from './Components/ServiceCard';
import ServiceDetails from './Components/ServiceDetails'; 
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

function App() {
  // Home component for the '/' route
  const Home = () => (
    <div className="service-cards">
      <div className="our-services">
        <h2>Our Services:</h2>
      </div>
      <ServiceCard title="Clothing Store" imageUrl="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?cs=srgb&dl=pexels-willo-m-3768005.jpg&fm=jpg" body="This is the best clothing store in the entire world" />
      <ServiceCard title="Barber" imageUrl="https://thumbs.dreamstime.com/z/barbershop-logo-design-barbershop-logo-design-vintage-lettering-illustration-dark-background-all-objects-text-119717931.jpg" body="Indulge in a grooming experience like no other at our modern Barber Shop. Our skilled barbers provide precision haircuts and grooming services in a welcoming environment. Elevate your style and leave feeling confident and refreshed." />
      <ServiceCard title="Restaurant" imageUrl="https://media.timeout.com/images/106000654/image.jpg" body="Savor the finest culinary delights at our Restaurant. Immerse yourself in a gastronomic journey with our diverse menu featuring fresh, locally sourced ingredients. From casual lunches to intimate dinners, each dish is crafted to delight your taste buds." />
      <ServiceCard title="Coffee Shop" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalGD1dUAVYzRgCEJC0hYKl4mNBp8turgFfA&usqp=CAU" body="Awaken your senses at our cozy Coffee Shop. We're passionate about brewing the perfect cup of coffee, using carefully selected beans for a rich and aromatic experience. Enjoy a moment of relaxation in our inviting space, perfect for coffee enthusiasts." />
      <ServiceCard title="Jewellery" imageUrl="https://i.pinimg.com/originals/93/63/b1/9363b10f9cc1f276aeee7c5f35e31ae5.jpg" body="Discover timeless elegance at our Jewelry Shop. Each piece in our collection is meticulously crafted to capture the essence of beauty and sophistication. From exquisite diamonds to unique designs, find the perfect expression of your style and individuality." />
      {/* Add more service cards as needed */}
    </div>
  );

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service-details/:title" element={<ServiceDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
