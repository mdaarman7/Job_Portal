"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  Modal,
  Fade,
  Backdrop,
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

export default function AboutUs() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Ensure client-side rendering
  }, []);

  const handleNavigation = (page) => {
    if (page === "home") {
      router.push("/"); // Redirect to homepage
    } else {
      router.push(`/${page}`); // Navigate to other pages
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!isClient) {
    return null; // Prevent rendering on the server-side
  }

  return (
    <>
      <Head>
        <title>About Us - HireFlow</title>
      </Head>

      <div style={{ minHeight: "100vh", padding: "20px" }}>
        {/* Top Navigation */}
        <Box padding="10px" color="#000" bgcolor="#f5f5f5">
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
              <Business style={{ marginRight: "10px", fontSize: "40px" }} />
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", fontSize: "24px" }}
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
                    bgcolor: "#ffffff",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      bgcolor: "#3f51b5",
                      color: "#ffffff",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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
                onClick={() => handleNavigation("loginform")}
              >
                Login
              </Button>
              <Button
                color="primary"
                variant="contained"
                style={{ marginLeft: "10px" }}
                onClick={() => handleNavigation("signup")}
              >
                Signup
              </Button>
            </Box>
          </Container>
        </Box>

        {/* About Us Content */}
        <Container maxWidth="lg" style={{ marginTop: "40px" }}>
          <Typography variant="h3" gutterBottom align="center">
            About Us
          </Typography>

          {/* About Us Text and Image Section */}
          <Grid container spacing={4} alignItems="center">
            {/* Text Content */}
            <Grid item xs={12} md={6}>
              <Typography variant="body1" align="justify" paragraph>
                Welcome to HireFlow, your ultimate platform for connecting
                top-tier talent with world-class companies. Whether you're a
                recruiter looking for exceptional candidates or a job seeker
                ready to find your dream job, we provide tools and resources to
                make hiring simple and effective.
              </Typography>
              <Typography variant="body1" align="justify" paragraph>
                At HireFlow, we understand the challenges of modern hiring.
                That's why we've built an intuitive, user-friendly platform that
                bridges the gap between opportunity and success.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleOpen} // Opens the modal with service details
              >
                Learn More About Our Services
              </Button>
            </Grid>

            {/* Image */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/about/JobOpportunities.jpg"
                alt="About Us Image"
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Grid>
          </Grid>

          {/* Our Vision Section */}
          <Box mt={8}>
            <Typography variant="h4" gutterBottom align="center">
              Our Vision
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box
                  component="img"
                  src="/images/about/JobSeekers.png"
                  alt="Vision Image 1"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "15px",
                  }}
                />
                <Typography variant="h6" align="center">
                  Empowering Job Seekers
                </Typography>
                <Typography variant="body2" align="center">
                  We aim to empower job seekers with the tools they need to
                  succeed in the modern job market.
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box
                  component="img"
                  src="/images/about/Hiring.jpg"
                  alt="Vision Image 2"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "15px",
                  }}
                />
                <Typography variant="h6" align="center">
                  Simplifying Hiring
                </Typography>
                <Typography variant="body2" align="center">
                  We strive to make the hiring process seamless for recruiters
                  and companies.
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box
                  component="img"
                  src="/images/about/BridgingGaps.jpg"
                  alt="Vision Image 3"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "15px",
                  }}
                />
                <Typography variant="h6" align="center">
                  Bridging Gaps
                </Typography>
                <Typography variant="body2" align="center">
                  Connecting talent and opportunity for mutual growth and
                  success.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>

        {/* Footer Section */}
        <Box
          component="footer"
          bgcolor="#282c34"
          color="#ffffff"
          padding="40px 0"
          mt="40px"
        >
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {/* Column 1: About Us */}
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  About HireFlow
                </Typography>
                <Typography variant="body2" color="inherit" mt="10px">
                  HireFlow is your go-to platform for connecting top talent with
                  world-class companies. We simplify hiring for recruiters and
                  job seekers.
                </Typography>
              </Grid>

              {/* Column 2: Quick Links */}
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

              {/* Column 3: Contact Information */}
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  FireFlow.com.no
                </Typography>
                <Box display="flex" alignItems="center" mt="10px">
                  <Phone style={{ marginRight: "10px" }} />
                  <Typography variant="body2" color="inherit">
                    +123 456 7890
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mt="10px">
                  <Email style={{ marginRight: "10px" }} />
                  <Typography variant="body2" color="inherit">
                    contact@fireflow.com.no
                  </Typography>
                </Box>

                {/* Social Media Links */}
                <Box mt="10px" textAlign="center">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#ffffff",
                      margin: "10px 10px 10px -260px",
                    }} // Removed left margin
                  >
                    <Facebook />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#ffffff", margin: "0 10px 0 0" }} // Removed left margin
                  >
                    <Instagram />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#ffffff", margin: "0 10px 0 0" }} // Removed left margin
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
