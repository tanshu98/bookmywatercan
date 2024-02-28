import {
  Avatar,
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import image29 from "../../assets/SIgn Up Page Images/image29.png";
import image22 from "../../assets/SIgn Up Page Images/image22.png";
import image30 from "../../assets/SIgn Up Page Images/image30.png";
import image31 from "../../assets/SIgn Up Page Images/image31.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import logo from "../../assets/Images/logo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import indianFlag from "../../assets/SIgn Up Page Images/indianflag.png";
import image34 from "../../assets/Images/Image34.png";

// Idea -
// Register Page -> Left Side
// Login Page -> Middle
// Image of Bottle -> Right Side

function Login() {
  const navigate = useNavigate();

  const [nineOne, setNineOne] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [passcode1, setPasscode1] = useState("");
  const [passcode2, setPasscode2] = useState("");
  const [passcode3, setPasscode3] = useState("");
  const [passcode4, setPasscode4] = useState("");
  const [passcode5, setPasscode5] = useState("");
  const [passcode6, setPasscode6] = useState("");

  const submitNineOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNineOne(e.target.value);
  };
  const submitPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  const submitPasscode1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasscode1(e.target.value);
  };
  const submitPasscode2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasscode2(e.target.value);
  };
  const submitPasscode3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasscode3(e.target.value);
  };
  const submitPasscode4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasscode4(e.target.value);
  };
  const submitPasscode5 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasscode5(e.target.value);
  };
  const submitPasscode6 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasscode6(e.target.value);
  };

  const handleRegister = ()=> {
      console.log('Register btn is clicked');
      navigate('/signup')
      
  }

  let loginFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const storedData = localStorage.getItem("Dataobj");

    if (storedData !== null) {
      // Parse JSON Data
      const getSignUpData = JSON.parse(storedData);
      console.log(getSignUpData);

      // Compare Local storage Data with the resp input field data -

      if (
        getSignUpData.nineOne === nineOne &&
        getSignUpData.phoneNumber === phoneNumber &&
        getSignUpData.passcode1 === passcode1 &&
        getSignUpData.passcode2 === passcode2 &&
        getSignUpData.passcode3 === passcode3 &&
        getSignUpData.passcode4 === passcode4 &&
        getSignUpData.passcode5 === passcode5 &&
        getSignUpData.passcode6 === passcode6
      ) {
        console.log("Data matches with Local Storage!");
        alert("Login Successfull");
        navigate("/home");
      } else {
        alert("Please Login with Correct Credentials");
      }
    } else {
      console.error('Data with key "Dataobj" not found in localStorage.');
    }

    console.log("Login Form button is clicked!");
    console.log(e);
  };
  return (
    <Grid container direction={'row'} sx={{ backgroundColor: "#F2F2F2", width: "100%" }}>
      {/* Register Page  */}
      <Grid
        sx={{
          height: "100vh",
          //  background: "#01E9EB",
          backgroundImage: `url(${image29})`,
          backgroundRepeat: "no-repeat",
          borderRadius: "5px",
          backgroundSize: "cover",
          width: "30%",
        }}
        xs={12}
        md={6}
        lg={4}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "50px",
            marginLeft: "60px",
            width: "75%",
            gap: "20px",
          }}
        >
          <Avatar
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              height: "24",
              width: "24",
            }}
          >
            <ArrowBackIosNewIcon />
          </Avatar>
          <Typography
            sx={{
              fontSize: "25px",
              fontFamily: "Inter",
              fontWeight: "600",
              color: "#fff",
              marginTop: "10px",
            }}
          >
            Select category
          </Typography>
          <img src={image22} alt="" />
          <img src={image31} alt="" />
          <img src={image30} alt="" />
          <Button
            className="Register-btn"
            type="submit"
            onClick={handleRegister}
            sx={{
              // marginBottom: '50px',
              borderRadius: "10px",
              padding: "21px",
              width: "81%",
              "&:hover": { backgroundColor: "#99A98F" },
              marginTop: "10px",
              fontWeight: "600",
              lineHeight: "24px",
              fontSize: "20px",
              color: "#000",
              backgroundColor: "#fff",
              boxShadow: "2px 2px 25px 2px #49C2E985",
            }}
          >
            Register Now
          </Button>
        </Box>
      </Grid>
      {/* Login Page */}
      <Grid xs={12} md={6} lg={4}>
        <Box sx={{ width: "100%", marginLeft: "100px", marginTop: "150px" }}>
          <form onSubmit={loginFormData}>
            <Box sx={{ marginLeft: "85px" }}>
              <img src={logo} alt="" />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "26px",
                  fontFamily: "Inter",
                  marginBottom: "35px",
                  marginTop: "20px",
                }}
              >
                Login Account
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                width: "80%",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    border: "transparent",
                    outline: "none",
                    width: "30%",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={indianFlag} />
                      </InputAdornment>
                    ),
                    inputProps: { maxLength: 2 },
                  }}
                  variant="outlined"
                  placeholder="+91"
                  type="number"
                  value={nineOne}
                  onChange={submitNineOne}
                />
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    border: "transparent",
                    outline: "none",
                    width: "100%",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                    inputProps: { maxLength: 10 },
                  }}
                  variant="outlined"
                  placeholder="Phone No"
                  type="number"
                  value={phoneNumber}
                  onChange={submitPhoneNumber}
                />
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "18px",
                  fontFamily: "Inter",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                Passcode
              </Typography>
              <Box sx={{ display: "flex", gap: "10px", width: "80%" }}>
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    border: "transparent",
                    outline: "none",
                  }}
                  InputProps={{ inputProps: { maxLength: 1 } }}
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
                  InputProps={{ inputProps: { maxLength: 1 } }}
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
                  InputProps={{ inputProps: { maxLength: 1 } }}
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
                  InputProps={{ inputProps: { maxLength: 1 } }}
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
                  InputProps={{ inputProps: { maxLength: 1 } }}
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
                  InputProps={{ inputProps: { maxLength: 1 } }}
                  type={"password"}
                  variant="outlined"
                  value={passcode6}
                  onChange={submitPasscode6}
                />
              </Box>
            </Box>
            <Button
              className="Login-btn"
              type="submit"
              sx={{
                padding: "21px",
                width: "81%",
                "&:hover": { backgroundColor: "#05ddee" },
                marginTop: "35px",
                fontWeight: "600",
                lineHeight: "24px",
                fontSize: "20px",
                color: "#fff",
                backgroundColor: "#0c8ce9",
                boxShadow: "2px 2px 25px 2px #49C2E985",
              }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Grid>
      {/* Image of Bottle  */}
      <Grid xs={12} md={6} lg={4}>
        <Box sx={{ marginTop: "200px", marginLeft: "130px" }}>
          <img src={image34} alt="Mineral Water" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
