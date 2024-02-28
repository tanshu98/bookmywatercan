import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import navbg from "../../assets/Images/navbarbg.jpg";


function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  
  return (
    <Box sx={{ width: "80%", marginLeft: "340px", marginBottom: "100px" }}>
    <Slider {...settings}>
      <Box sx={{ width: "100%", bgcolor: "lightblue" }}>
        <Box component="img" src={navbg} sx={{ width: "100%" }} />
      </Box>
      <Box sx={{ width: "100%", bgcolor: "lightblue" }}>
        <Box component="img" src={navbg} sx={{ width: "100%" }} />
      </Box>
      <Box sx={{ width: "100%", bgcolor: "lightblue" }}>
        <Box component="img" src={navbg} sx={{ width: "100%" }} />
      </Box>
    </Slider>
  </Box>
  );
}

export default SimpleSlider;