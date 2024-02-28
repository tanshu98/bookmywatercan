import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import image1 from "../../assets/Images/1.png";
import image8 from "../../assets/Images/Image8.png";
import image9 from "../../assets/Images/Image9.png";
import image12 from "../../assets/Images/Image12.jpg";
import image11 from "../../assets/Images/Image11.jpg";
import image10 from "../../assets/Images/Image10.png";
function Galary() {
  return (
    <Box sx={{ marginTop: "90px", marginLeft: "340px" }}>
      <Typography>Our Galary</Typography>
      <Box sx={{ width: '98%', display: 'flex', flexDirection: 'column', gap: '12px', padding: '10px', marginTop: '10px'}}>
      <Box sx={{display: 'flex', gap: '20px', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
        <img src={image1} alt="" />
        <img src={image8} alt="" />
        <img src={image9} alt="" />
      </Box>
      <Box sx={{display: 'flex', gap: '20px', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
        <img src={image12} />
        <img src={image11} alt="" />
        <img src={image10} alt="" />  
      </Box>
    </Box>


      </Box>
  );
}

export default Galary;
