import { Box, Typography } from "@mui/material";
import React from "react";
import image14 from "../../assets/Images/Image14.jpg";
import image16 from "../../assets/Images/Image16.png";
import image17 from "../../assets/Images/Image17.png";

function Team() {
  return (
    <Box sx={{ marginTop: "90px", marginLeft: "340px" }}>
      <Typography
        sx={{
          marginBottom: "20px",
          fontSize: "30px",
          fontWeight: "600px",
          lineHeight: "36.31px",
          color: "#000620",
        }}
      >
        Best Team Member
      </Typography>
      <Box sx={{display: 'flex', gap: '55px'}}>
        <img src={image14} alt="" />
        <img src={image16} alt="" />
        <img src={image17} alt="" />
      </Box>
    </Box>
  );
}

export default Team;
