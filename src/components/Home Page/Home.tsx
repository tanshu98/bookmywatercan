import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import headerimg from "../../assets/Images/headerimg.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import StarIcon from "@mui/icons-material/Star";
import image1 from "../../assets/Home Page Images/1.jpg";
import image2 from "../../assets/Home Page Images/2.png";
import image3 from "../../assets/Home Page Images/3.png";
import image4 from "../../assets/Home Page Images/4.png";
import image5 from "../../assets/Home Page Images/5.png";
import image6 from "../../assets/Home Page Images/6.png";
import image7 from "../../assets/Home Page Images/7.png";
import { Star } from "@mui/icons-material";

function Home() {
  // type objType = {
  //     id: number;
  //     src: string;
  //     alt: string;
  //     waterCanInfo: string;
  //     // waterCanPrice: string;
  //   };

  //   const imageList: Array<objType> = [
  //     {
  //         id: 1,
  //         src: image1,
  //         alt: 'Image 1',
  //         waterCanInfo: 'Shyamsheel Aqua Cool Water'
  //     }
  //   ]
  return (
    <Box>
      <Box><Sidebar /></Box>
      <Box
        sx={{
          display: "flex",
          width: "80%",
          marginLeft: "340px",
          marginTop: "60px",
          height: "90px",
          alignItems: "center",
          //   gap: '30px',
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", marginRight: "15px" }}>
            <LocationOnIcon sx={{ color: "#1C97FD" }} />
            <Typography
              sx={{ fontSize: "16px", fontWeight: "500", color: "#000620" }}
            >
              Nagpur, Maharashtra 441005
            </Typography>
            <ExpandMoreIcon />
          </Box>
          <Box sx={{ display: "flex", backgroundColor: "#F2F2F2" }}>
            <TextField
              sx={{ width: "500px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ mr: -1.5 }}>
                    <SearchIcon
                      sx={{
                        backgroundColor: "#1C97FD",
                        borderRadius: "0px 10px 10px 0px",
                        height: "55px",
                        width: "51px",
                        color: "#fff",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            >
              <Typography>Search...</Typography>
            </TextField>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <img src={headerimg} alt="" />
        </Box>
      </Box>
      <Box>
        <Navbar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          marginTop: "430px",
          marginLeft: "340px",
          width: "80%",
        }}
      >
        <Box sx={{ borderLeft: "3px solid #1C97FD",marginTop: '100px' }}>
          <Typography
            sx={{
              ml: 2,
              fontSize: "30px",
              fontWeight: "600",
              fontFamily: "Inter",
            }}
          >
            Shop Nearby
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: 'column', gap: '60px',  }}>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Box>
              <img src={image1} alt="" />
            </Box>
            <Box sx={{ marginBottom: "20px", gap: '10px' }}>
              <Typography sx={{ fontSize: "22px", fontWeight: "500px" }}>
                Shyamsheel Aqua Cool Water
              </Typography>
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <LocationOnIcon sx={{ color: "#1C97FD" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                      lineHeight: "20px",
                    }}
                  >
                    1.1 km
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px", ml: 5 }}>
                  <AccessTimeFilledIcon sx={{ color: "#1C97FD" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                    }}
                  >
                    Time: 24 h available
                  </Typography>
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                </Box>
              </Box>
                <Box>
                    <Typography sx={{color: '#A2A3A5', fontSize: '17px', lineHeight: '26px',fontWeight: '500', fontFamily: 'Inter', marginTop: '10px'}}>Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, <br /> Maharashtra 440017</Typography>
                </Box>
            </Box>
            <Box sx={{ml:10}}>
            <Button
              className="More-Details-btn"
              type="submit"
              sx={{
                padding: "21px",
                width: "100%",
                "&:hover": { backgroundColor: "#05ddee" },
                marginTop: "35px",
                fontWeight: "600",
                lineHeight: "24px",
                fontSize: "20px",
                color: "#fff",
                backgroundColor: "#0c8ce9",
                borderRadius: '5px',
                
                boxShadow: "2px 2px 25px 2px #49C2E985",
              }}
            >
              More Details
            </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Box>
              <img src={image2} alt="" />
            </Box>
            <Box sx={{ marginBottom: "20px", gap: '10px' }}>
              <Typography sx={{ fontSize: "22px", fontWeight: "500px" }}>
                Shyamsheel Aqua Cool Water
              </Typography>
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <LocationOnIcon sx={{ color: "#1C97FD" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                      lineHeight: "20px",
                    }}
                  >
                    1.1 km
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px", ml: 5 }}>
                  <AccessTimeFilledIcon sx={{ color: "#1C97FD" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                    }}
                  >
                    Time: 24 h available
                  </Typography>
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                </Box>
              </Box>
                <Box>
                    <Typography sx={{color: '#A2A3A5', fontSize: '17px', lineHeight: '26px',fontWeight: '500', fontFamily: 'Inter', marginTop: '10px'}}>Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, <br /> Maharashtra 440017</Typography>
                </Box>
            </Box>
            <Box sx={{ml:10}}>
            <Button
              className="More-Details-btn"
              type="submit"
              sx={{
                padding: "21px",
                width: "100%",
                "&:hover": { backgroundColor: "#05ddee" },
                marginTop: "35px",
                fontWeight: "600",
                lineHeight: "24px",
                fontSize: "20px",
                color: "#fff",
                backgroundColor: "#0c8ce9",
                borderRadius: '5px',
                
                boxShadow: "2px 2px 25px 2px #49C2E985",
              }}
            >
              More Details
            </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Box>
              <img src={image3} alt="" />
            </Box>
            <Box sx={{ marginBottom: "20px", gap: '10px' }}>
              <Typography sx={{ fontSize: "22px", fontWeight: "500px" }}>
                Shyamsheel Aqua Cool Water
              </Typography>
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <LocationOnIcon sx={{ color: "#1C97FD" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                      lineHeight: "20px",
                    }}
                  >
                    1.1 km
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px", ml: 5 }}>
                  <AccessTimeFilledIcon sx={{ color: "#1C97FD" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                    }}
                  >
                    Time: 24 h available
                  </Typography>
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                </Box>
              </Box>
                <Box>
                    <Typography sx={{color: '#A2A3A5', fontSize: '17px', lineHeight: '26px',fontWeight: '500', fontFamily: 'Inter', marginTop: '10px'}}>Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, <br /> Maharashtra 440017</Typography>
                </Box>
            </Box>
            <Box sx={{ml:10}}>
            <Button
              className="More-Details-btn"
              type="submit"
              sx={{
                padding: "21px",
                width: "100%",
                "&:hover": { backgroundColor: "#05ddee" },
                marginTop: "35px",
                fontWeight: "600",
                lineHeight: "24px",
                fontSize: "20px",
                color: "#fff",
                backgroundColor: "#0c8ce9",
                borderRadius: '5px',
                
                boxShadow: "2px 2px 25px 2px #49C2E985",
              }}
            >
              More Details
            </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Box>
              <img src={image4} alt="" />
            </Box>
            <Box sx={{ marginBottom: "20px", gap: '10px' }}>
              <Typography sx={{ fontSize: "22px", fontWeight: "500px" }}>
                Shyamsheel Aqua Cool Water
              </Typography>
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <LocationOnIcon sx={{ color: "#1C97FD" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                      lineHeight: "20px",
                    }}
                  >
                    1.1 km
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px", ml: 5 }}>
                  <AccessTimeFilledIcon sx={{ color: "#1C97FD" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                    }}
                  >
                    Time: 24 h available
                  </Typography>
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                </Box>
              </Box>
                <Box>
                    <Typography sx={{color: '#A2A3A5', fontSize: '17px', lineHeight: '26px',fontWeight: '500', fontFamily: 'Inter', marginTop: '10px'}}>Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, <br /> Maharashtra 440017</Typography>
                </Box>
            </Box>
            <Box sx={{ml:10}}>
            <Button
              className="More-Details-btn"
              type="submit"
              sx={{
                padding: "21px",
                width: "100%",
                "&:hover": { backgroundColor: "#05ddee" },
                marginTop: "35px",
                fontWeight: "600",
                lineHeight: "24px",
                fontSize: "20px",
                color: "#fff",
                backgroundColor: "#0c8ce9",
                borderRadius: '5px',
                
                boxShadow: "2px 2px 25px 2px #49C2E985",
              }}
            >
              More Details
            </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Box>
              <img src={image5} alt="" />
            </Box>
            <Box sx={{ marginBottom: "20px", gap: '10px' }}>
              <Typography sx={{ fontSize: "22px", fontWeight: "500px" }}>
                Shyamsheel Aqua Cool Water
              </Typography>
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <LocationOnIcon sx={{ color: "#1C97FD" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                      lineHeight: "20px",
                    }}
                  >
                    1.1 km
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px", ml: 5 }}>
                  <AccessTimeFilledIcon sx={{ color: "#1C97FD" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                    }}
                  >
                    Time: 24 h available
                  </Typography>
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                </Box>
              </Box>
                <Box>
                    <Typography sx={{color: '#A2A3A5', fontSize: '17px', lineHeight: '26px',fontWeight: '500', fontFamily: 'Inter', marginTop: '10px'}}>Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, <br /> Maharashtra 440017</Typography>
                </Box>
            </Box>
            <Box sx={{ml:10}}>
            <Button
              className="More-Details-btn"
              type="submit"
              sx={{
                padding: "21px",
                width: "100%",
                "&:hover": { backgroundColor: "#05ddee" },
                marginTop: "35px",
                fontWeight: "600",
                lineHeight: "24px",
                fontSize: "20px",
                color: "#fff",
                backgroundColor: "#0c8ce9",
                borderRadius: '5px',
                
                boxShadow: "2px 2px 25px 2px #49C2E985",
              }}
            >
              More Details
            </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Box>
              <img src={image6} alt="" />
            </Box>
            <Box sx={{ marginBottom: "20px", gap: '10px' }}>
              <Typography sx={{ fontSize: "22px", fontWeight: "500px" }}>
                Shyamsheel Aqua Cool Water
              </Typography>
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <LocationOnIcon sx={{ color: "#1C97FD" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                      lineHeight: "20px",
                    }}
                  >
                    1.1 km
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px", ml: 5 }}>
                  <AccessTimeFilledIcon sx={{ color: "#1C97FD" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                    }}
                  >
                    Time: 24 h available
                  </Typography>
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                </Box>
              </Box>
                <Box>
                    <Typography sx={{color: '#A2A3A5', fontSize: '17px', lineHeight: '26px',fontWeight: '500', fontFamily: 'Inter', marginTop: '10px'}}>Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, <br /> Maharashtra 440017</Typography>
                </Box>
            </Box>
            <Box sx={{ml:10}}>
            <Button
              className="More-Details-btn"
              type="submit"
              sx={{
                padding: "21px",
                width: "100%",
                "&:hover": { backgroundColor: "#05ddee" },
                marginTop: "35px",
                fontWeight: "600",
                lineHeight: "24px",
                fontSize: "20px",
                color: "#fff",
                backgroundColor: "#0c8ce9",
                borderRadius: '5px',
                
                boxShadow: "2px 2px 25px 2px #49C2E985",
              }}
            >
              More Details
            </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Box>
              <img src={image7} alt="" />
            </Box>
            <Box sx={{ marginBottom: "20px", gap: '10px' }}>
              <Typography sx={{ fontSize: "22px", fontWeight: "500px" }}>
                Shyamsheel Aqua Cool Water
              </Typography>
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <LocationOnIcon sx={{ color: "#1C97FD" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                      lineHeight: "20px",
                    }}
                  >
                    1.1 km
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px", ml: 5 }}>
                  <AccessTimeFilledIcon sx={{ color: "#1C97FD" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                    }}
                  >
                    Time: 24 h available
                  </Typography>
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                  <Star sx={{ color: "#FFD200" }} />
                </Box>
              </Box>
                <Box>
                    <Typography sx={{color: '#A2A3A5', fontSize: '17px', lineHeight: '26px',fontWeight: '500', fontFamily: 'Inter', marginTop: '10px'}}>Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, <br /> Maharashtra 440017</Typography>
                </Box>
            </Box>
            <Box sx={{ml:10}}>
            <Button
              className="More-Details-btn"
              type="submit"
              sx={{
                padding: "21px",
                width: "100%",
                "&:hover": { backgroundColor: "#05ddee" },
                marginTop: "35px",
                fontWeight: "600",
                lineHeight: "24px",
                fontSize: "20px",
                color: "#fff",
                backgroundColor: "#0c8ce9",
                borderRadius: '5px',
                
                boxShadow: "2px 2px 25px 2px #49C2E985",
              }}
            >
              More Details
            </Button>
            </Box>
          </Box>
          
        </Box>
      </Box>
      <Box sx={{
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#010411',
          
          // flexDirection: "column",
          gap: "40px",
          marginTop: "100px",
          marginLeft: "340px",
          width: "85%",
          color: '#fff'
        }}>
          <Typography sx={{fontSize: '20px', lineHeight: '27px',fontWeight: '600', textAlign: 'center', height: '100px', marginTop: '60px'}}>
          © 2022 watercan Shop | All Rights Reserved
          </Typography>
      </Box>
    </Box>
  );
}

export default Home;
