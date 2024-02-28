import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import './SignUp.css'
import image29 from "../../assets/SIgn Up Page Images/image29.png";
import PersonIcon from "@mui/icons-material/Person";
import indianFlag from "../../assets/SIgn Up Page Images/indianflag.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CheckBox, Email } from "@mui/icons-material";
import image26 from "../../assets/SIgn Up Page Images/image26.png";
import image22 from '../../assets/SIgn Up Page Images/image22.png'
import image27 from '../../assets/SIgn Up Page Images/image27.png'
import image28 from '../../assets/SIgn Up Page Images/image28.png'
import image30 from '../../assets/SIgn Up Page Images/image30.png'
import image31 from '../../assets/SIgn Up Page Images/image31.png'
import { useNavigate } from "react-router-dom";



function SignUp() {
   const navigate = useNavigate();
  const [age, setAge] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // Fetch Form Data - 

  const [name, setName] = useState('');
  const [nineOne, setNineOne] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [passcode1, setPasscode1] = useState('');
  const [passcode2, setPasscode2] = useState('');
  const [passcode3, setPasscode3] = useState('');
  const [passcode4, setPasscode4] = useState('');
  const [passcode5, setPasscode5] = useState('');
  const [passcode6, setPasscode6] = useState('');
  const [confirmPasscode1, setConfirmPasscode1] = useState('');
  const [confirmPasscode2, setConfirmPasscode2] = useState('');
  const [confirmPasscode3, setConfirmPasscode3] = useState('');
  const [confirmPasscode4, setConfirmPasscode4] = useState('');
  const [confirmPasscode5, setConfirmPasscode5] = useState('');
  const [confirmPasscode6, setConfirmPasscode6] = useState('');
  const [stateName, setStateName] = useState('');

  
  // Submit Form Data -
  
  const submitName = (e: React.ChangeEvent<HTMLInputElement>)=> {
      setName(e.target.value);
  }
  const submitNineOne = (e: React.ChangeEvent<HTMLInputElement>) => {
   setNineOne(e.target.value);
  }
  const submitPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
   setPhoneNumber(e.target.value);
  }

  const submitEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
   setEmail(e.target.value);
  }
  const submitPasscode1 = (e: React.ChangeEvent<HTMLInputElement>) => {
   setPasscode1(e.target.value);
  }
  const submitPasscode2 = (e: React.ChangeEvent<HTMLInputElement>) => {
   setPasscode2(e.target.value);
  }
  const submitPasscode3 = (e: React.ChangeEvent<HTMLInputElement>) => {
   setPasscode3(e.target.value);
  }
  const submitPasscode4 = (e: React.ChangeEvent<HTMLInputElement>) => {
   setPasscode4(e.target.value);
  }
  const submitPasscode5 = (e: React.ChangeEvent<HTMLInputElement>) => {
   setPasscode5(e.target.value);
  }
  const submitPasscode6 = (e: React.ChangeEvent<HTMLInputElement>) => {
   setPasscode6(e.target.value);
  }
  const submitConfirmPasscode1 = (e: React.ChangeEvent<HTMLInputElement>) => {
   setConfirmPasscode1(e.target.value);
  }
  const submitConfirmPasscode2 = (e: React.ChangeEvent<HTMLInputElement>) => {
   setConfirmPasscode2(e.target.value);
  }
  const submitConfirmPasscode3 = (e: React.ChangeEvent<HTMLInputElement>) => {
   setConfirmPasscode3(e.target.value);
  }
  const submitConfirmPasscode4 = (e: React.ChangeEvent<HTMLInputElement>) => {
   setConfirmPasscode4(e.target.value);
  }
  const submitConfirmPasscode5 = (e: React.ChangeEvent<HTMLInputElement>) => {
   setConfirmPasscode5(e.target.value);
  }
  const submitConfirmPasscode6 = (e: React.ChangeEvent<HTMLInputElement>) => {
   setConfirmPasscode6(e.target.value);
  }


  const submitStateName = (e: React.ChangeEvent<HTMLInputElement>) => {
   setStateName(e.target.value);
  }


  function submitFormData(e:React.FormEvent<HTMLFormElement>) {
   e.preventDefault();
   navigate('/login');
   console.log(e);
   const submittedData = {
      name,
      nineOne,
      phoneNumber,
      email,
      passcode1,
      passcode2,
      passcode3,
      passcode4,
      passcode5,
      passcode6,
      confirmPasscode1,
      confirmPasscode2,
      confirmPasscode3,
      confirmPasscode4,
      confirmPasscode5,
      confirmPasscode6,
      stateName
   }

   const setData = localStorage.setItem('Dataobj', JSON.stringify(submittedData));
   console.log(setData);
   
   // console.log(name, phoneNumber, email, passcode1, passcode2, confirmPasscode1, stateName);
   
   
  }
  return (
    <Box sx={{ display: "flex", width: "100%", backgroundColor: "#F2F2F2" }}>
      <Box
        sx={{
          height: "100vh",
          //  background: "#01E9EB",
          backgroundImage: `url(${image29})`,
          backgroundRepeat: "no-repeat",
          borderRadius: "5px",
          backgroundSize: "cover",
          width: "30%",
        }}
      >
         <Box sx={{display: 'flex', flexDirection: 'column',marginTop: '100px', marginLeft: '60px', width: '75%', gap: '20px'}}>

        <img src={image22} alt="" />
        <img src={image31} alt="" />
        <img src={image30} alt="" />
         </Box>
      </Box>
      <Box sx={{ width: "30%", marginLeft: "100px", marginTop: "60px" }}>
        <form onSubmit={submitFormData}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "26px",
              fontFamily: "Inter",
              marginBottom: "35px",
            }}
          >
            Register Now
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              width: "80%",
            }}
          >
            <TextField
              sx={{
                backgroundColor: "#fff",
                border: "transparent",
                outline: "none",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              placeholder="name"
              value={name}
              onChange={submitName}
            />
            <Box sx={{ display: "flex" }}>
              <TextField
                sx={{
                  backgroundColor: "#fff",
                  border: "transparent",
                  outline: "none",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={indianFlag} />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                placeholder="+91"
                value={nineOne}
                onChange={submitNineOne}
              />
              <TextField
                sx={{
                  backgroundColor: "#fff",
                  border: "transparent",
                  outline: "none",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                placeholder="Phone No"
                value={phoneNumber}
                onChange={submitPhoneNumber}
              />
            </Box>
            <TextField
              sx={{
                backgroundColor: "#fff",
                border: "transparent",
                outline: "none",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              placeholder="email"
              value={email}
              onChange={submitEmail}
            />
            <Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                  fontFamily: "Inter",
                  marginBottom: "10px",
                }}
              >
                Passcode
              </Typography>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    border: "transparent",
                    outline: "none",
                  }}
                  type={"password"}
                  variant="outlined"
                  value={passcode1}
                  onChange={submitPasscode1}
                />
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    border: "transparent",
                    outline: "none",
                  }}
                  type={"password"}
                  variant="outlined"
                  value={passcode2}
                  onChange={submitPasscode2}

                />
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    border: "transparent",
                    outline: "none",
                  }}
                  type={"password"}
                  variant="outlined"
                  value={passcode3}
                  onChange={submitPasscode3}

                />
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    border: "transparent",
                    outline: "none",
                  }}
                  type={"password"}
                  variant="outlined"
                  value={passcode4}
                  onChange={submitPasscode4}

                />
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    border: "transparent",
                    outline: "none",
                  }}
                  type={"password"}
                  variant="outlined"
                  value={passcode5}
                  onChange={submitPasscode5}

                />
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    border: "transparent",
                    outline: "none",
                  }}
                  type={"password"}
                  variant="outlined"
                  value={passcode6}
                  onChange={submitPasscode6}

                />
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                  fontFamily: "Inter",
                  marginBottom: "10px",
                }}
              >
                Confirm Passcode
              </Typography>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    border: "transparent",
                    outline: "none",
                  }}
                  type={"password"}
                  variant="outlined"
                  value={confirmPasscode1}
                  onChange={submitConfirmPasscode1}

                />
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    border: "transparent",
                    outline: "none",
                  }}
                  type={"password"}
                  variant="outlined"
                  value={confirmPasscode2}
                  onChange={submitConfirmPasscode2}

                />
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    border: "transparent",
                    outline: "none",
                  }}
                  type={"password"}
                  variant="outlined"
                  value={confirmPasscode3}
                  onChange={submitConfirmPasscode3}


                />
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    border: "transparent",
                    outline: "none",
                  }}
                  type={"password"}
                  variant="outlined"
                  value={confirmPasscode4}
                  onChange={submitConfirmPasscode4}


                />
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    border: "transparent",
                    outline: "none",
                  }}
                  type={"password"}
                  variant="outlined"
                  value={confirmPasscode5}
                  onChange={submitConfirmPasscode5}


                />
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    border: "transparent",
                    outline: "none",
                  }}
                  type={"password"}
                  variant="outlined"
                  value={confirmPasscode6}
                  onChange={submitConfirmPasscode6}


                />
              </Box>
            </Box>
            <TextField
              sx={{
                backgroundColor: "#fff",
                border: "transparent",
                outline: "none",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              placeholder="State"
              value={stateName}
              onChange={submitStateName}
            />
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  marginBottom: "30px",
                }}
              >
                {/* <FormControlLabel required control={<Checkbox />} label="" /> */}
                <Checkbox {...label} />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    lineHeight: "30px",
                  }}
                >
                  Agree Terms & Conditions
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button
            className="Register-btn"
            type="submit"
            sx={{
              padding: "21px",
              width: "81%",
              "&:hover": { backgroundColor: "#05ddee" },
              marginTop: "10px",
              fontWeight: "600",
              lineHeight: "24px",
              fontSize: "20px",
              color: "#fff",
              backgroundColor: "#0c8ce9",
              boxShadow: "2px 2px 25px 2px #49C2E985",
            }}
          >
            Register 
          </Button>
        </form>
      </Box>
      <Box sx={{marginLeft: '180px', maxHeight: '100vh'}}>
        <img className="image-section" src={image26} alt="" width={540} height={850} />
      </Box>
    </Box>
  );
}

export default SignUp;
