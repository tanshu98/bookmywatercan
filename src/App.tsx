import React from "react";
import "./App.css";
import Home from "./components/Home Page/Home";
import LandingPage from "./components/Landing Page/LandingPage";
import SignUp from "./components/Sign Up/SignUp";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import OurProduct from "./components/OurProductSection/OurProduct";
import AboutUs from "./components/About Us/AboutUs";
import Galary from "./components/Galary/Galary";
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import OurBlogs from "./components/Our Blogs/OurBlogs";
import Footer from "./components/Footer/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<OurProduct />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/galary" element={<Galary />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<OurBlogs />} />
          <Route path="/contactus" element={<Footer />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
