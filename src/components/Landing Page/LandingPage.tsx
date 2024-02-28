import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from "../Navbar/Navbar";
import OurProduct from "../OurProductSection/OurProduct";
import AboutUs from "../About Us/AboutUs";
import Galary from "../Galary/Galary";
import Team from "../Team/Team";
import Testimonials from "../Testimonials/Testimonials";
import OurBlogs from "../Our Blogs/OurBlogs";
import Footer from "../Footer/Footer";
import { Box } from '@mui/material';

function Home() {
  return (
    <Box>
     <Navbar />
      <Sidebar />
      <OurProduct />
      <AboutUs />
      <Galary />
      <Team />
      <Testimonials />
      <OurBlogs />
      <Footer />
    </Box>
  )
}

export default Home