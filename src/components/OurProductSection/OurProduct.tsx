import React from "react";
import { Box, Typography } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import image1 from "../../assets/Images/image1 .png";
import image2 from "../../assets/Images/image2.png";
import image3 from "../../assets/Images/image3.png";
import image4 from "../../assets/Images/image4.png";
import image5 from "../../assets/Images/image5.png";

function OurProduct() {
  // Converting Array of Objects into Typescript Array of Objects -

  // Creating the type of object -

  type objType = {
    id: number;
    src: string;
    alt: string;
    waterCanInfo: string;
    waterCanPrice: string;
  };

  // Images List -

  const imageList: Array<objType> = [
    {
      id: 1,
      src: image1,
      alt: "Image 1",
      waterCanInfo: "Waterbottle 5L",
      waterCanPrice: "25",
    },
    {
      id: 2,
      src: image2,
      alt: "Image 2",
      waterCanInfo: "Watercan 25L",
      waterCanPrice: "150",
    },
    {
      id: 3,
      src: image3,
      alt: "Image 3",
      waterCanInfo: "Watercan 50L",
      waterCanPrice: "260",
    },
    {
      id: 4,
      src: image4,
      alt: "Image 4",
      waterCanInfo: "Watercan 25L",
      waterCanPrice: "150",
    },
    {
      id: 5,
      src: image5,
      alt: "Image 5",
      waterCanInfo: "Watercan 25L",
      waterCanPrice: "150",
    },
  ];
  return (
    <Box
      sx={{
        marginTop: '525px',
        width: "80%",
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginLeft: "340px",
        backgroundColor: "#fff",
      }}
    >
      <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'start', borderLeft: '6px solid #0c8ce9', paddingLeft: '18px', marginBottom: '25px'}}>
        <Typography sx={{fontSize: '30px'}}>Our Product</Typography>
      </Box>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',textAlign: 'center', gap: '180px'}}>
        {/* Map the images with the data!! */}
        {imageList.map((image) => (
          <Box sx={{display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent:'center', gap: '12px',marginRight: '12px'}} >
            <img key={image.id} src={image.src} alt={image.alt} />
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant="h6" gutterBottom>{image.waterCanInfo}</Typography>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
              <Box sx={{fontSize: 'small', height: '25px', width: '25px'}}>
            <CurrencyRupeeIcon/  >

              </Box>
            <Typography variant="h6" gutterBottom>{image.waterCanPrice}</Typography>
            </Box>

            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default OurProduct;
