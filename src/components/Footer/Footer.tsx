import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import map from "../../assets/Images/map.png";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Call } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "100px",
        marginLeft: "340px",
        backgroundColor: "#000620",
        height: "520px",
        flexDirection: 'column'
      }}
    >
      <Box sx={{ display: "flex", }}>
        <Box sx={{ padding: "60px" }}>
          <img src={map} alt="" />
        </Box>
        <Box sx={{ margin: "113px 19px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <Avatar
              sx={{ bgcolor: "#0c8ce9", height: "48px", width: "48px" }}
              variant="square"
            >
              <CallIcon />
            </Avatar>
            <Typography
              sx={{
                color: "#99959E",
                fontWeight: "600",
                lineHeight: "28px",
                fontSize: "16px",
              }}
            >
              1234567890 / 9876543210
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <Avatar
              sx={{ bgcolor: "#0c8ce9", height: "48px", width: "48px" }}
              variant="square"
            >
              <MailIcon />
            </Avatar>
            <Typography
              sx={{
                color: "#99959E",
                fontWeight: "600",
                lineHeight: "28px",
                fontSize: "16px",
              }}
            >
              1234567890 / 9876543210
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <Avatar
              sx={{ bgcolor: "#0c8ce9", height: "48px", width: "48px" }}
              variant="square"
            >
              <LocationOnIcon />
            </Avatar>
            <Typography
              sx={{
                color: "#99959E",
                fontWeight: "600",
                lineHeight: "28px",
                fontSize: "16px",
              }}
            >
              1234567890 / 9876543210
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{display: 'flex',color: '#fff',alignItems: 'center', justifyContent: 'center',height: '100px'}}>
              <Typography>
              © 2022 watercan Shop | All Rights Reserved
              </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
