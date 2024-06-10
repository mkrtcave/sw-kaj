import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './css/reset.css';
import './css/App.css';
import './css/header.css';
import './css/house.css';
import './css/home.css';
import './css/footer.css';
import './css/onsale.css';
// import 'react-slideshow-image/dist/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from "./pages/AboutUs";
import OnSale from "./pages/OnSale";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route exact path="/" element={<Home />}></Route>
                  <Route exact path="/about-us" element={<AboutUs />}></Route>
                  <Route exact path="/on-sale" element={<OnSale />}></Route>
              </Routes>
              <Footer />
          </BrowserRouter>
      </div>
  );
}

export default App;
