import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import image6 from "../../assets/Images/Image6.png";
import image7 from "../../assets/Images/Image7.png";
import CallSharpIcon from "@mui/icons-material/CallSharp";

function AboutUs() {
  return (
    <Box
      sx={{
        width: "80%",
        height: '415px',
        display: "flex",
        marginTop: "98px",
        marginBottom: '20px',
        // height: '100px',
        // alignItems: "center",
        justifyContent: "center",
        // flexDirection: "column",
        marginLeft: "340px",
        font: "Inter",
        // backgroundColor: "blue",
      }}
    >
      <Box
        sx={{
          display: "flex",
          bgcolor: "#edf7ff",
          borderRadius: "25px",
          marginRight: "10px",
        }}
      >
        <Box sx={{width: '40%'}}>
          <Box sx={{ marginBottom: "30px" }}>
            <Typography sx={{ fontSize: "28px", lineHeight: "27px" }}>
              Welcome to Watercan Shop
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "30px",
              color: "#99959E",
            //   maxHeight: '210px',
            //   maxWidth: '500px'
            //   width: "50%",
            }}
          >
            With every professional WordPress theme you at least get 1 skin to
            change the pattern as well as background, colors and look and feel
            of your theme. <br />
            <br /> This serves as an added benefit. So in case you don't want to
            waste too much time adjusting and setting up color schemes for your
            theme just pick up the
          </Typography>
        </Box>
        <Box>
        <img  src={image6} width={'372px'} height={'411px'} />
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "25px" }}>
        <Box
          sx={{
            background: "#01E9EB",
            backgroundImage: `url(${image7})`,
            backgroundRepeat: "no-repeat",
            borderRadius: "5px",
            backgroundSize: "cover",
            height: "400px",
            width: "430px",
          }}
        >
          <Box>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "52px",
                marginBottom: "10px",
                color: "#fff",
                fontSize: "24px",
                lineHeight: "27px",
              }}
            >
              Timing
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: "17px",
                lineHeight: "31px",
                font: "Inter",
                color: "#fff",
                gap: "15px",
              }}
            >
              <Box>
                {" "}
                Mon-Sat <br /> Sunday
              </Box>
              <Box>
                {" "}
                8:00am-10:00am <br /> 8:00am-07:30pm
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Avatar sx={{ bgcolor: "#fff", width: "76px", height: "76px" }}>
                <CallSharpIcon sx={{ color: "#000" }} />
              </Avatar>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "45px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "31px",
                letterSpacing: "2%",
                color: "#fff",
              }}
            >
              For any Query
            </Typography>
            <Typography
              sx={{
                fontWeight: "700px",
                fontSize: "30px",
                lineHeight: "27px",
                color: "#fff",
              }}
            >
              91+9876543210
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUs;
