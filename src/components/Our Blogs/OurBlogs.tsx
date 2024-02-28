import { Box, Typography } from '@mui/material'
import React from 'react';
import image18 from '../../assets/Images/Image18.png';
import image19 from '../../assets/Images/Image19.png';
import image20 from '../../assets/Images/Image20.png';

function OurBlogs() {
  return (
    <Box sx={{marginTop: '150px', marginLeft: "340px" }}>
    <Box>
        <Typography sx={{fontSize: '30px', fontWeight: '600', color: '#000620'}}>Our Blogs</Typography>
    </Box>
    <Box sx={{display: 'flex', gap: '10px', marginTop: '10px'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <img src={image19} />
            <Typography sx={{fontSize: '22px', lineHeight: '27px', fontWeight: '600'}} >Blog title here 1</Typography>
            <Typography sx={{color: '#99959E', fontSize: '17px', lineHeight: '27px', fontWeight: '500'}} >There are many variations of passages of <br />Lorem Ipsum available, but the majority <br /> have suffered</Typography>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <img src={image20} />
            <Typography sx={{fontSize: '22px', lineHeight: '27px', fontWeight: '600', color: '#1C97FD'}} >Blog title here 2</Typography>
            <Typography sx={{color: '#99959E', fontSize: '17px', lineHeight: '27px', fontWeight: '500'}} >It is a long established fact that a reader <br /> will be distracted by the readable <br /> content of a page when looking at its</Typography>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <img src={image18} />
            <Typography sx={{fontSize: '22px', lineHeight: '27px', fontWeight: '600'}} >Blog title here 1</Typography>
            <Typography sx={{color: '#99959E', fontSize: '17px', lineHeight: '27px', fontWeight: '500'}} >The standard chunk of Lorem Ipsum used <br /> since the 1500s is reproduced below for <br /> those interested.</Typography>
        </Box>
    </Box>
    </Box>
  )
}

export default OurBlogs