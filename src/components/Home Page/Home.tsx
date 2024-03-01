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
import Paper from "@mui/material/Paper";
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
        sx={{ marginTop: { xs: "45px", sm: "12px",md: '12px' } }}
      >
        {/* Header */}
        <Grid
          item
          sx={{
            display: "flex",
            width: "100%",
            marginLeft: { sm: '200px', md: "220px" },
            flexDirection: {
              xs: "column-reverse",
              sm: 'row',
              // md: "row",
              // lg: "row",
            },
            marginTop: { xs: "18px", sm: "10px", md: '-10px' },
            height: "90px",
            alignItems: "center",
            gap: "30px",
            justifyContent: "space-between",
            boxShadow: "2px 2px 25px 2px #49C2E985",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: { sm: '50px'},
              marginRight: {xs: '4px'}
            }}
          >
            <Grid
              sx={{ display: { xs: "none", sm: "flex" }, marginRight: "15px"}}
            >
              <LocationOnIcon sx={{ color: "#1C97FD" }} />
              <Typography
                sx={{ fontSize: "16px", fontWeight: "500", color: "#000620" }}
              >
                Nagpur, Maharashtra 441005
              </Typography>
              <ExpandMoreIcon />
            </Grid>
            <Grid sx={{ display: "flex", backgroundColor: "#F2F2F2" }}>
              {/* <TextField
                sx={{ width: "100%" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ mr: -1.5 }}>
                      <Grid
                        sx={{
                          display: { xs: "flex", sm: "none" },
                          // marginRight: "15px",
                        }}
                      >
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
              </TextField> */}
               <TextField sx={{width: {md: '100%'}}} variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ mr: -1.5 }}>
                      <Grid
                        sx={{
                          display: { xs: "flex", sm: "none" },
                          // marginRight: "15px",
                        }}
                      >
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
               
               />
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              // gap: "5px",
              alignItems: "center",
              justifyContent: "space-between",
              // marginRight: {xs: '180px', sm: '40px'}
              ml: { xs: 8 },
              marginBottom: {xs:'10px'}
              // mb: {xs: 1},
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
                ml: {xs: 10, sm: 15},
                marginRight: {md: '80px'}
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

      <Box sx={{ display: { xs: "none", md: "block" }, mb: 5 }}>
        <Navbar />
      </Box>
      <Box
        component="img"
        sx={{
          display: { xs: "block", md: "none" },
          ml: { xs: 1, sm: 35 },
          mt: 3,
          width: {xs: 300, sm: 465}
        }}
        alt="Banner Image"
        src={banner}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          marginTop: { sm: "100px", md: "340px" },
          marginLeft: { xs: "10px", sm: "100px", md: "340px" },
          width: { sm: "20%", md: "80%" },
        }}
      >
        <Box
          sx={{
            borderLeft: "3px solid #1C97FD",
            marginTop: { xs: "0px", sm: "100px" },
          }}
        >
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
        {/* Display item cards */}
        {/* <Paper>
          
        </Paper> */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "60px",   boxShadow: "2px 2px 40px 2px #49C2E985", padding: '20px'}}>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box>
              <img src={image1} alt="" width={270} />
            </Box>
            <Box sx={{ marginBottom: "20px", gap: "5px" }}>
              <Typography sx={{ fontSize: {xs: '19px', md: '22px'}, fontWeight: "500px" }}>
                Shyamsheel Aqua Cool Water
              </Typography>
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                  <Box sx={{ display: "flex",  alignItems: 'center', justifyContent: 'center', marginTop: {md: '12px'}, marginRight: {md: '10px'} }}>
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
                    <Box sx={{ display: "flex", gap: "10px", ml: 2.5, alignItems: {xs: 'center'}, justifyContent: {xs: 'center'}}}>
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
                  <Box sx={{marginRight: {xs: '150px'}, marginTop: {xs: '15px'}}}>
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
            {/* Button */}
            <Box sx={{marginLeft: {xs: '0px', md: '200px'}}}>
              <Button
                className="More-Details-btn"
                type="submit"
                sx={{
                  padding: "21px",
                  width: { xs: "98%", sm: "100%" },
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "60px",   boxShadow: "2px 2px 40px 2px #49C2E985", padding: '20px'}}>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box>
              <img src={image2} alt="" width={270} />
            </Box>
            <Box sx={{ marginBottom: "20px", gap: "5px" }}>
              <Typography sx={{ fontSize: {xs: '19px', md: '22px'}, fontWeight: "500px" }}>
                Shyamsheel Aqua Cool Water
              </Typography>
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                  <Box sx={{ display: "flex",  alignItems: 'center', justifyContent: 'center', marginTop: {md: '12px'}, marginRight: {md: '10px'} }}>
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
                    <Box sx={{ display: "flex", gap: "10px", ml: 2.5, alignItems: {xs: 'center'}, justifyContent: {xs: 'center'}}}>
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
                  <Box sx={{marginRight: {xs: '150px'}, marginTop: {xs: '15px'}}}>
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
            {/* Button */}
            <Box sx={{marginLeft: {xs: '0px', md: '200px'}}}>
              <Button
                className="More-Details-btn"
                type="submit"
                sx={{
                  padding: "21px",
                  width: { xs: "98%", sm: "100%" },
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "60px",   boxShadow: "2px 2px 40px 2px #49C2E985", padding: '20px'}}>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box>
              <img src={image3} alt="" width={270} />
            </Box>
            <Box sx={{ marginBottom: "20px", gap: "5px" }}>
              <Typography sx={{ fontSize: {xs: '19px', md: '22px'}, fontWeight: "500px" }}>
                Shyamsheel Aqua Cool Water
              </Typography>
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                  <Box sx={{ display: "flex",  alignItems: 'center', justifyContent: 'center', marginTop: {md: '12px'}, marginRight: {md: '10px'} }}>
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
                    <Box sx={{ display: "flex", gap: "10px", ml: 2.5, alignItems: {xs: 'center'}, justifyContent: {xs: 'center'}}}>
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
                  <Box sx={{marginRight: {xs: '150px'}, marginTop: {xs: '15px'}}}>
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
            {/* Button */}
            <Box sx={{marginLeft: {xs: '0px', md: '200px'}}}>
              <Button
                className="More-Details-btn"
                type="submit"
                sx={{
                  padding: "21px",
                  width: { xs: "98%", sm: "100%" },
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "60px",   boxShadow: "2px 2px 40px 2px #49C2E985", padding: '20px'}}>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box>
              <img src={image4} alt="" width={270} />
            </Box>
            <Box sx={{ marginBottom: "20px", gap: "5px" }}>
              <Typography sx={{ fontSize: {xs: '19px', md: '22px'}, fontWeight: "500px" }}>
                Shyamsheel Aqua Cool Water
              </Typography>
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                  <Box sx={{ display: "flex",  alignItems: 'center', justifyContent: 'center', marginTop: {md: '12px'}, marginRight: {md: '10px'} }}>
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
                    <Box sx={{ display: "flex", gap: "10px", ml: 2.5, alignItems: {xs: 'center'}, justifyContent: {xs: 'center'}}}>
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
                  <Box sx={{marginRight: {xs: '150px'}, marginTop: {xs: '15px'}}}>
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
            {/* Button */}
            <Box sx={{marginLeft: {xs: '0px', md: '200px'}}}>
              <Button
                className="More-Details-btn"
                type="submit"
                sx={{
                  padding: "21px",
                  width: { xs: "98%", sm: "100%" },
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "60px",   boxShadow: "2px 2px 40px 2px #49C2E985", padding: '20px'}}>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box>
              <img src={image5} alt="" width={270} />
            </Box>
            <Box sx={{ marginBottom: "20px", gap: "5px" }}>
              <Typography sx={{ fontSize: {xs: '19px', md: '22px'}, fontWeight: "500px" }}>
                Shyamsheel Aqua Cool Water
              </Typography>
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                  <Box sx={{ display: "flex",  alignItems: 'center', justifyContent: 'center', marginTop: {md: '12px'}, marginRight: {md: '10px'} }}>
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
                    <Box sx={{ display: "flex", gap: "10px", ml: 2.5, alignItems: {xs: 'center'}, justifyContent: {xs: 'center'}}}>
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
                  <Box sx={{marginRight: {xs: '150px'}, marginTop: {xs: '15px'}}}>
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
            {/* Button */}
            <Box sx={{marginLeft: {xs: '0px', md: '200px'}}}>
              <Button
                className="More-Details-btn"
                type="submit"
                sx={{
                  padding: "21px",
                  width: { xs: "98%", sm: "100%" },
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "60px",   boxShadow: "2px 2px 40px 2px #49C2E985", padding: '20px'}}>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box>
              <img src={image6} alt="" width={270} />
            </Box>
            <Box sx={{ marginBottom: "20px", gap: "5px" }}>
              <Typography sx={{ fontSize: {xs: '19px', md: '22px'}, fontWeight: "500px" }}>
                Shyamsheel Aqua Cool Water
              </Typography>
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                  <Box sx={{ display: "flex",  alignItems: 'center', justifyContent: 'center', marginTop: {md: '12px'}, marginRight: {md: '10px'} }}>
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
                    <Box sx={{ display: "flex", gap: "10px", ml: 2.5, alignItems: {xs: 'center'}, justifyContent: {xs: 'center'}}}>
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
                  <Box sx={{marginRight: {xs: '150px'}, marginTop: {xs: '15px'}}}>
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
            {/* Button */}
            <Box sx={{marginLeft: {xs: '0px', md: '200px'}}}>
              <Button
                className="More-Details-btn"
                type="submit"
                sx={{
                  padding: "21px",
                  width: { xs: "98%", sm: "100%" },
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "60px",   boxShadow: "2px 2px 40px 2px #49C2E985", padding: '20px'}}>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box>
              <img src={image7} alt="" width={270} />
            </Box>
            <Box sx={{ marginBottom: "20px", gap: "5px" }}>
              <Typography sx={{ fontSize: {xs: '19px', md: '22px'}, fontWeight: "500px" }}>
                Shyamsheel Aqua Cool Water
              </Typography>
              <Box sx={{ display: "flex", marginTop: "15px" }}>
                <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                  <Box sx={{ display: "flex",  alignItems: 'center', justifyContent: 'center', marginTop: {md: '12px'}, marginRight: {md: '10px'} }}>
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
                    <Box sx={{ display: "flex", gap: "10px", ml: 2.5, alignItems: {xs: 'center'}, justifyContent: {xs: 'center'}}}>
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
                  <Box sx={{marginRight: {xs: '150px'}, marginTop: {xs: '15px'}}}>
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
            {/* Button */}
            <Box sx={{marginLeft: {xs: '0px', md: '200px'}}}>
              <Button
                className="More-Details-btn"
                type="submit"
                sx={{
                  padding: "21px",
                  width: { xs: "98%", sm: "100%" },
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
          // ml: 1,
          marginTop: { xs: "30px", sm: "100px", md: "150px" },
          marginLeft: { xs: "0px", sm: "100px", md: "241px" },
          width: { xs: "100%", sm: "20%", md: "86.8%" },
          color: "#fff",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "27px",
            fontWeight: "600",
            textAlign: "center",
            height: "90px",
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
