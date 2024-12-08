"use client"; // Ensure the component is client-side

import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import { Person, Work, Business } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Head from 'next/head'; // Import the Head component to modify the page title

export default function Signup() {
  const [role, setRole] = useState(null); // State to track role selection
  const [isClientSide, setIsClientSide] = useState(false); // State to check if on client side
  const router = useRouter(); // Hook for navigation

  // Ensure the router is only used on the client-side
  useEffect(() => {
    setIsClientSide(true);
  }, []);

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole); // Set the role to 'freelancer' or 'client'
  };

  const handleNavigation = () => {
    if (role === "freelancer") {
      router.push("/freelancer"); // Navigate to the Freelancer form page
    } else if (role === "client") {
      router.push("/recruiterform"); // Navigate to the Recruiter form page
    }
  };

  const handleLoginNavigation = () => {
    router.push("/loginform"); // Navigate to the login form page
  };

  if (!isClientSide) {
    return null; // Prevent the page from rendering server-side
  }

  return (
    <>
      <Head>
        <title>HireFlow</title> {/* Set the browser tab title */}
        <meta name="description" content="HireFlow - The best platform for freelancers and recruiters" />
      </Head>
      
      <div style={{ minHeight: "100vh", padding: "20px" }}>
        <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
          {/* First Box: HireFlow Header with Icon (Black Background) */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="black"
            color="#0adaf1eb"
            padding="20px"
            borderRadius="8px"
            mb={4}
          >
            <Business style={{ marginRight: "10px", fontSize: "70px" }} />
            <Typography variant="h4" gutterBottom style={{ fontSize: "70px", fontWeight: "bold" }}>
              HireFlow
            </Typography>
          </Box>

          {/* Second Box: Main Content with Role Selection (Black Background) */}
          <Box bgcolor="#000" color= "#0adaf1eb" padding="20px" borderRadius="8px">
            <Typography variant="h4" gutterBottom  >
              Welcome to HireFlow
            </Typography>

            <Typography variant="subtitle1" gutterBottom  >
              Are you a Freelancer or a Recruiter?
            </Typography>

            <Box mt={4}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant={role === "freelancer" ? "contained" : "outlined"}
                    color="primary"
                    fullWidth
                    size="large"
                    startIcon={<Person />}
                    onClick={() => handleRoleSelection("freelancer")}
                    style={role === "freelancer" ? { fontWeight: "bold" } : {}}
                  >
                    I’m a Freelancer
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant={role === "client" ? "contained" : "outlined"}
                    color="secondary"
                    fullWidth
                    size="large"
                    startIcon={<Work />}
                    onClick={() => handleRoleSelection("client")}
                    style={role === "client" ? { fontWeight: "bold" } : {}}
                  >
                    I’m a Recruiter
                  </Button>
                </Grid>
              </Grid>
            </Box>

            {/* Create Account Button */}
            <Box mt={4} display="flex" justifyContent="center">
              <div
                style={{
                  cursor: role ? "pointer" : "not-allowed",
                  width: "100%",
                  maxWidth: "250px",
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth
                  onClick={handleNavigation} // Redirect to the appropriate form
                  disabled={!role}
                >
                  {role === "freelancer" ? "Apply as a Freelancer" : role === "client" ? "Join as a Recruiter" : "Create Account"}
                </Button>
              </div>
            </Box>

            {/* Login Link */}
            <Box mt={2}>
              <Typography variant="body1" style={{ color: "#fff" }}>
                Already have an account?{" "}
                <span
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "#3f51b5",
                    fontWeight: "bold",
                  }}
                  onClick={handleLoginNavigation} // Redirect to Login page
                >
                  Login
                </span>
              </Typography>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}
