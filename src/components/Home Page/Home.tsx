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
  useMediaQuery,
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
import banner from "../../assets/Home Page Images/Banner.png";

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

  // const matches = useMediaQuery('(min-width:600px)');
  return (
    <Box>
      <Box>
        <Sidebar />
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: { xs: "45px", sm: "25px" } }}
      >
        {/* Header */}
        <Grid
          item
          sx={{
            display: "flex",
            width: "80%",
            marginLeft: { xs: "10px", sm: "340px" },
            flexDirection: {
              xs: "column-reverse",
              md: "column-reverse",
              lg: "row",
            },
            marginTop: { xs: "25px", sm: "60px" },
            height: "90px",
            alignItems: "center",
            gap: "30px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: '22px'
            }}
          >
            <Grid sx={{ display: {xs: 'none', sm: 'flex'}, marginRight: "15px" }}>
              <LocationOnIcon sx={{ color: "#1C97FD" }} />
              <Typography
                sx={{ fontSize: "16px", fontWeight: "500", color: "#000620" }}
              >
                Nagpur, Maharashtra 441005
              </Typography>
              <ExpandMoreIcon />
            </Grid>
            <Grid sx={{ display: "flex", backgroundColor: "#F2F2F2" }}>
              <TextField
                sx={{ width: "100%" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ mr: -1.5 }}>
                      <Grid sx={{ display: {xs: 'flex', sm: 'none'}, marginRight: "15px" }}>
                        <LocationOnIcon sx={{ color: "#1C97FD" }} />
                        <Typography
                          sx={{
                            fontSize: "16px",
                            fontWeight: "500",
                            color: "#000620",
                          }}
                        >
                          Nagpur, Maharashtra 441005
                        </Typography>
                        <ExpandMoreIcon />
                      </Grid>
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
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              // gap: "5px",
              alignItems: "center",
              justifyContent: "space-between",
              // marginRight: {xs: '180px', sm: '40px'}
              ml: {xs: 14},
              mb: 2
            }}
          >
            <Typography
              sx={{
                display: { xs: "block", sm: "none" },
                fontWeight: "600",
                fontSize: "22px",
                fontFamily: "Inter",
                color: "#09112B",
              }}
            >
              Menu
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ml: 15,
                // mt: 1
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
        </Grid>
      </Grid>
      {/* Display Navbar based on a conditon */}

      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Navbar />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" }, ml:1, mt: 3 }}>
        <img src={banner} alt="" width={300}/>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          marginTop: { sm: "100px", md: "340px" },
          marginLeft: { xs: "10px", sm: "100px", md: "340px" },
          width: { sm: "20%", md: "60%" },
        }}
      >
        <Box sx={{ borderLeft: "3px solid #1C97FD", marginTop: {xs: '0px', sm: '100px'} }}>
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box>
              <img src={image1} alt="" width={300} />
            </Box>
            <Box sx={{ marginBottom: "20px", gap: "10px" }}>
              <Typography sx={{ fontSize: "22px", fontWeight: "500px" }}>
                Shyamsheel Aqua Cool Water
              </Typography>
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Box>
                  <Box sx={{ display: "flex", marginBottom: "10px" }}>
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
                    </Box>
                  </Box>
                  <Box>
                    <Star sx={{ color: "#FFD200" }} />
                    <Star sx={{ color: "#FFD200" }} />
                    <Star sx={{ color: "#FFD200" }} />
                    <Star sx={{ color: "#FFD200" }} />
                    <Star sx={{ color: "#FFD200" }} />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#A2A3A5",
                    fontSize: "17px",
                    lineHeight: "26px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                    marginTop: "10px",
                  }}
                >
                  Address: Rani durgawati chowk, 17, behind the puspanjali hall,
                  Nagpur, <br /> Maharashtra 440017
                </Typography>
              </Box>
            </Box>
            <Box sx={{}}>
              <Button
                className="More-Details-btn"
                type="submit"
                sx={{
                  padding: "21px",
                  width: { xs: "75%", sm: "100%" },
                  "&:hover": { backgroundColor: "#05ddee" },
                  marginTop: { sm: "35px" },
                  fontWeight: "600",
                  lineHeight: "24px",
                  fontSize: "20px",
                  color: "#fff",
                  backgroundColor: "#0c8ce9",
                  borderRadius: "5px",

                  boxShadow: "2px 2px 25px 2px #49C2E985",
                }}
              >
                More Details
              </Button>
            </Box>
          </Box>
          
        </Box>
      </Box>

      {/* Footer! */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#010411",

          // flexDirection: "column",
          gap: "40px",
          ml:1,
          marginTop: {xs:'30px', sm: "100px", md: "340px" },
          marginLeft: { xs: "10px", sm: "100px", md: "340px" },
          width: {xs: '97%', sm: "20%", md: "60%" },
          color: "#fff",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "27px",
            fontWeight: "600",
            textAlign: "center",
            height: "100px",
            marginTop: "60px",
          }}
        >
          © 2022 watercan Shop | All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
