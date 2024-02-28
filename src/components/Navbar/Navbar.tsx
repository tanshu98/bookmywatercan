import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import navbg from "../../assets/Images/navbarbg.jpg";
import { Box, Button, Typography } from "@mui/material";
import image21 from '../../assets/Images/image21.png';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  
 let handleLogin = (e:React.MouseEvent<HTMLElement>)=> {
   navigate('/login');
 }
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | null
        | undefined
    ) => (
      <div>
        <ul
          style={{
            margin: "-24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {dots}
        </ul>
        <li style={{ marginRight: "30px" }}></li>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          position: 'relative',
          width: "11px",
          height: "11px",
          backgroundColor: "gray",
          border: "2px gray solid",
          borderRadius: "50%",
        }}
      >
        {/* {i + 1} */}
      </div>
    ),
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <Box
      sx={{
        width: "80%",
        marginLeft: "340px",
        marginBottom: "150px",
        marginTop: "60px",
        height: "100px",
      }}
    >
      <Slider {...settings}>
        <Box sx={{ position: "relative", width: "100%" }}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "30%",
              textAlign: "center",
              transform: "translate(-50%, -50%)",
              color: "red",
            }}
          >
            <Typography
              sx={{
                color: "#1C97FD",
                fontSize: "34px",
                lineHeight: "40px",
                fontWeight: "400",
                fontFamily: "Praise",
                letter: '2%'
              }}
            >
              Welcome to Watercan Shop
            </Typography>
            <Typography sx={{color: '#fff', fontSize: '50px', fontWeight: '700', lineHeight: '60px',fontFamily: 'Inter'}}>
              We Have Best <br /> Child Water
            </Typography>
            <Button onClick={handleLogin} className="Login-btn" sx={{"&:hover": {backgroundColor: "#05ddee" },
             marginTop: '10px',fontWeight: '600', lineHeight: '24px', fontSize: '20px', color: '#fff', backgroundColor: '#0c8ce9', boxShadow: '2px 2px 25px 2px #49C2E985'}} >Login Account</Button >
          </Box>
          <Box component="img"
            src={image21}
            width={286}
            height={405}
            sx={{position: 'absolute', top: '25%', left: '70%'}}
            
            >

          </Box>
          <Box
            component="img"
            src={navbg}
            sx={{ display: "block", width: "100%" }}
          />
        </Box>
        <Box sx={{ position: "relative", width: "100%" }}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "30%",
              textAlign: "center",
              transform: "translate(-50%, -50%)",
              color: "red",
            }}
          >
            <Typography
              sx={{
                color: "#1C97FD",
                fontSize: "34px",
                lineHeight: "40px",
                fontWeight: "400",
                fontFamily: "Praise",
                letter: '2%'
              }}
            >
              Welcome to Watercan Shop
            </Typography>
            <Typography sx={{color: '#fff', fontSize: '50px', fontWeight: '700', lineHeight: '60px',fontFamily: 'Inter'}}>
              We Have Best <br /> Child Water
            </Typography>
            <Button className="Login-btn" sx={{"&:hover": {backgroundColor: "#05ddee" },
             marginTop: '10px',fontWeight: '600', lineHeight: '24px', fontSize: '20px', color: '#fff', backgroundColor: '#0c8ce9', boxShadow: '2px 2px 25px 2px #49C2E985'}} >Login Account</Button >
          </Box>
          <Box component="img"
            src={image21}
            width={286}
            height={405}
            sx={{position: 'absolute', top: '25%', left: '70%'}}
            
            >

          </Box>
          <Box
            component="img"
            src={navbg}
            sx={{ display: "block", width: "100%" }}
          />
        </Box>
        <Box sx={{ position: "relative", width: "100%" }}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "30%",
              textAlign: "center",
              transform: "translate(-50%, -50%)",
              color: "red",
            }}
          >
            <Typography
              sx={{
                color: "#1C97FD",
                fontSize: "34px",
                lineHeight: "40px",
                fontWeight: "400",
                fontFamily: "Praise",
                letter: '2%'
              }}
            >
              Welcome to Watercan Shop
            </Typography>
            <Typography sx={{color: '#fff', fontSize: '50px', fontWeight: '700', lineHeight: '60px',fontFamily: 'Inter'}}>
              We Have Best <br /> Child Water
            </Typography>
            <Button className="Login-btn" sx={{"&:hover": {backgroundColor: "#05ddee" },
             marginTop: '10px',fontWeight: '600', lineHeight: '24px', fontSize: '20px', color: '#fff', backgroundColor: '#0c8ce9', boxShadow: '2px 2px 25px 2px #49C2E985'}} >Login Account</Button >
          </Box>
          <Box component="img"
            src={image21}
            width={286}
            height={405}
            sx={{position: 'absolute', top: '25%', left: '70%'}}
            
            >

          </Box>
          <Box
            component="img"
            src={navbg}
            sx={{ display: "block", width: "100%" }}
          />
        </Box>
      </Slider>
    </Box>
  );
}
