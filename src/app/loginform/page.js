"use client"; // Ensure the component is client-side

import React, { useState } from "react";
import { Container, Box, Typography, Button, TextField, MenuItem } from "@mui/material";
import { login, loginForEmployee, loginForRecruiter } from "../util/api";
import { useRouter } from "next/navigation"; // For navigation

export default function LoginForm() {
  const router = useRouter(); // Hook for navigation

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear errors when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    // Simple username validation regex
    const usernameRegex = /^[a-zA-Z0-9@#._-]+$/; // Regex to allow alphabets, numbers, and symbols like @, #, _, -
    const alphabetOnlyRegex = /^[a-zA-Z]+$/; // Regex to detect if username contains only alphabets

    // Password validation regex
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/; // Password must be at least 8 characters, one number, one symbol

    // Validate required fields (username, password)
    if (!formData.username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username is required.",
      }));
      hasError = true;
    } else if (alphabetOnlyRegex.test(formData.username)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username:
          "Username cannot contain only alphabets. Please include numbers or symbols.",
      }));
      hasError = true;
    } else if (!usernameRegex.test(formData.username)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username:
          "Username can only contain alphabets, numbers, and symbols (@, #, _, -).",
      }));
      hasError = true;
    }

    if (!formData.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required.",
      }));
      hasError = true;
    } else if (!passwordRegex.test(formData.password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          "Password must be at least 8 characters long, include a number, and a special character.",
      }));
      hasError = true;
    }

    if (hasError) {
      return; // Prevent form submission if there are validation errors
    }
    // If validation passes, proceed with login
    console.log("Login Data:", formData);

      // if(formData.role === "Admin")
      // {
      //   const response = await loginForRecruiter (formData);
      //   if(response.success){
      //     alert("Logged in successfully!");
      //     router.push("/recruiterform")
      //   }
      // }
      if(formData.role === "Freelancer")
      {
        const responseForEmployee = await loginForEmployee (formData);
        if(responseForEmployee.success){
          alert("Logged in successfully!");
          router.push("/homePageForFreelancer")
        }
        else
        {
          alert("Wrong Username or Password");
          router.push("/signup");
        }
      }

      if(formData.role === "Recruiter")
      {
        const response = await loginForRecruiter (formData);
        if(response.success){
          alert("Logged in successfully!");
          router.push("/recruiterform")
        }
        else
        {
          alert("Wrong Username or Password");
          router.push("/signup");
        }
      }
    

    // if(response.success){
    //   alert("Logged in successfully!");
    //   router.push("/recruiterform")
    // }
   
    // else
    // {
    //   const responseForEmployee = await loginForEmployee (formData);
    //   console.log(responseForEmployee);
    //   if(responseForEmployee.success){
    //     alert("Logged in successfully!");
    //     router.push("/homePageForFreelancer")
    //   }
    //   else
    //   {
    //     alert("Wrong Username or Password");
    //     router.push("/signup");
    //   }
    // }
   
    

    // Placeholder form submission logic
    
  };

  const handleSignupNavigation = () => {
    router.push("/signup"); // Navigate to the homepage
  };

  return (

    <Container
      maxWidth="xs" // Compact width for the login form
      style={{
        minHeight: "93.5vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Box
        bgcolor="rgb(4 33 42)"
        padding="30px"
        borderRadius="8px"
        boxShadow="0 4px 10px rgba(0, 0, 0, 0.3)"
        width="100%"
      >
        <Typography
          variant="h4"
          style={{ color: "#0adaf1eb", textAlign: "center", marginBottom: "20px" }}
        >
          Login
        </Typography>

        <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
          {/* Username Field */}
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            value={formData.username}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#07313a",
              marginRight: "10px",
              flex: 1,
              color: "#0adaf1eb",
              marginBottom: "10px",
            }}
            InputProps={{
              style: { color: "#0adaf1eb" },
            }}
            InputLabelProps={{
              style: { color: "#0adaf1eb" },
            }}
            required
            error={!!errors.username}
            helperText={errors.username}
          />

          {/* Password Field */}
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            value={formData.password}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#07313a",
              marginRight: "10px",
              flex: 1,
              color: "#0adaf1eb",
              marginBottom: "0",
              borderRadius: "5px"
            }}
            InputProps={{
              style: { color: "#0adaf1eb" },
            }}
            InputLabelProps={{
              style: { color: "#0adaf1eb" },
            }}            required
            error={!!errors.password}
            helperText={errors.password}
          />

            {/* Selector*/}
          <TextField
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                select
                variant="outlined"
                required
                style={{
                  backgroundColor: "#07313a",
                  marginRight: "10px",
                  flex: 1,
                  color: "#0adaf1eb",
                  marginBottom: "10px",
                  borderRadius: "5px"
                }}
                InputProps={{
                  style: { color: "#0adaf1eb" },
                }}
                InputLabelProps={{
                  style: { color: "#0adaf1eb" },
                }}           
              >

              <MenuItem value="Freelancer">Freelancer</MenuItem>
              <MenuItem value="Recruiter">Recruiter</MenuItem>
              </TextField>
              

          {/* Login Button */}
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button
              variant="contained"
              color="primary"
              style={{ fontWeight: "bold", width: "auto" }}
              type="submit"
            >
              Login
            </Button>
          </Box>

          {/* Sign Up Option */}
          <Box textAlign="center" style={{ marginTop: "20px" }}>
            <Typography style={{ color: "#fff" }}>
              Don't have an account?{" "}
              <span
                style={{
                  cursor: "pointer",
                  color: "#3f51b5",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
                onClick={handleSignupNavigation} // Redirect to homepage
              >
                Sign Up
              </span>
            </Typography>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
