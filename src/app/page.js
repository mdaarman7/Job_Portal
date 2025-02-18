"use client"; // Ensure the component is client-side only

import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import {
  Business,
  Phone,
  Email,
  Facebook,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [jobListings, setJobListings] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      salary: "$60,000 - $80,000",
      experience: "2+ years",
      location: "Remote",
    },
    {
      id: 2,
      title: "Backend Developer",
      salary: "$70,000 - $90,000",
      experience: "3+ years",
      location: "San Francisco",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      salary: "$80,000 - $100,000",
      experience: "4+ years",
      location: "Austin",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      salary: "$50,000 - $70,000",
      experience: "1+ years",
      location: "Seattle",
    },
    {
      id: 5,
      title: "Data Scientist",
      salary: "$90,000 - $120,000",
      experience: "5+ years",
      location: "Chicago",
    },
    {
      id: 6,
      title: "Product Manager",
      salary: "$100,000 - $130,000",
      experience: "6+ years",
      location: "Boston",
    },
  ]);
  const [isClient, setIsClient] = useState(false); // State to check if on client-side
  const router = useRouter(); // For navigation

  useEffect(() => {
    setIsClient(true); // Ensure client-side rendering
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  const handleNavigation = (page) => {
    if (page === "home") {
      router.refresh(); // Reload the current page
    } else {
      router.push(`/${page}`); // Navigate to other pages
    }
  };

  const handleJobClick = (jobId) => {
    router.push(`/job/${jobId}`); // Navigate to the job detail page
  };

  if (!isClient) {
    return null; // Prevent rendering on the server-side
  }

  return (
    <>
      <Head>
        <title>Welcome to HireFlow - Freelancer/Recruiter</title>
      </Head>

      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#00283c",
          color: "#0adaf1eb",
          padding: "20px",
        }}
      >
        {/* Top Navigation */}
        <Box padding="10px" bgcolor="#02394a">
          <Container
            maxWidth="lg"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Left: HireFlow Icon and Text */}
            <Box display="flex" alignItems="center">
              <Business
                style={{
                  marginRight: "10px",
                  fontSize: "60px",
                  color: "#0adaf1eb",
                }}
              />
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", fontSize: "34px" }}
              >
                HireFlow
              </Typography>
            </Box>

            {/* Center: Menu bar */}
            <Box display="flex" justifyContent="center" gap="10px" flexGrow={1}>
              {["home", "about", "contact", "services"].map((page) => (
                <Box
                  key={page}
                  sx={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "16px",
                    bgcolor: "rgb(4 33 42)",
                    color: "#0adaf1eb",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      bgcolor: "rgb(23 124 175)",
                      color: "#ffffff",
                    },
                  }}
                  onClick={() => handleNavigation(page)}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Box>
              ))}
            </Box>

            {/* Right: Login and Signup buttons */}
            <Box>
              <Button
                color="primary"
                variant="outlined"
                style={{ borderColor: "#0adaf1eb", color: "#0adaf1eb" }}
                onClick={() => handleNavigation("loginform")}
              >
                Login
              </Button>
              <Button
                color="primary"
                variant="contained"
                style={{
                  backgroundColor: "rgb(23 124 175)",
                  color: "#ffffff",
                  marginLeft: "10px",
                }}
                onClick={() => handleNavigation("signup")}
              >
                Signup
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Search Section */}
        <Container
          maxWidth="md"
          style={{ marginTop: "20px", textAlign: "center" }}
        >
          <Typography variant="h4" gutterBottom>
            Find Your Dream Job
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <TextField
              label="Search for jobs"
              variant="outlined"
              value={searchQuery}
              onChange={handleSearchChange}
              style={{
                backgroundColor: "#07313a",
                marginRight: "10px",
                flex: 1,
                color: "#0adaf1eb",
              }}
              InputProps={{
                style: { color: "#0adaf1eb" },
              }}
              InputLabelProps={{
                style: { color: "#0adaf1eb" },
              }}
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "rgb(23 124 175)", color: "#ffffff" }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
        </Container>

        {/* Job Listings */}
        <Container maxWidth="lg" style={{ marginTop: "40px" }}>
          <Grid container spacing={4}>
            {jobListings.map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.id}>
                <Box
                  onClick={() => handleJobClick(job.id)}
                  sx={{
                    bgcolor: "#07313a",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    height: "200px",
                    transition: "all 0.3s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "rgb(9 204 227 / 48%)",
                      transform: "scale(1.05)",
                      boxShadow: "rgb(0 0 0) 0px 8px 16px",
                      color: "white",
                    },
                  }}
                >
                  <Typography variant="h5" textAlign={"center"}>
                    {job.title}
                  </Typography>
                  {/* <Typography variant="body2" style={{ marginTop: "10px" }}>
                    Salary: {job.salary}
                  </Typography>
                  <Typography variant="body2">
                    Experience: {job.experience}
                  </Typography>
                  <Typography variant="body2">
                    Location: {job.location}
                  </Typography> */}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Footer Section */}
        <Box
          component="footer"
          bgcolor="#02394a"
          color="white"
          padding="40px 0"
          mt="40px"
        >
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  About HireFlow
                </Typography>
                <Typography
                  variant="body2"
                  color="inherit"
                  mt="10px"
                  style={{ textAlign: "justify" }}
                >
                  HireFlow connects top talent with companies for success.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  Quick Links
                </Typography>
                <Box mt="10px">
                  {["home", "about", "services", "contact"].map((page) => (
                    <Typography
                      key={page}
                      variant="body2"
                      style={{
                        cursor: "pointer",
                        color: "#ffffff",
                        padding: "5px 0",
                        fontSize: "16px",
                      }}
                      onClick={() => handleNavigation(page)}
                      onMouseEnter={(e) => (e.target.style.color = "#a9a9a9")}
                      onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                    >
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                    </Typography>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  HireFlow.com.np
                </Typography>
                <Box display="flex" alignItems="center" mt="10px">
                  <Phone style={{ marginRight: "10px" }} />
                  <Typography variant="body2" color="inherit">
                    +977 9818014356
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mt="10px">
                  <Email style={{ marginRight: "10px" }} />
                  <Typography variant="body2" color="inherit">
                    hireflow143@gmail.com
                  </Typography>
                </Box>
                <Box mt="10px" textAlign="center">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#ffffff", margin: "10px" }}
                  >
                    <Facebook />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#ffffff", margin: "10px" }}
                  >
                    <Instagram />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#ffffff", margin: "10px" }}
                  >
                    <Twitter />
                  </a>
                </Box>
              </Grid>
            </Grid>
            <Box
              mt="20px"
              textAlign="center"
              borderTop="1px solid #444"
              pt="10px"
            >
              <Typography variant="body2">
                © {new Date().getFullYear()} HireFlow. All rights reserved.
              </Typography>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
}
