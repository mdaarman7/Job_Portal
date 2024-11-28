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
import { useRouter } from "next/navigation";
import {
  Business,
  Phone,
  Email,
  Facebook,
  Instagram,
  Twitter,
} from "@mui/icons-material";
export default function Services() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);
  const [serviceDetails, setServiceDetails] = useState(null);
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

  const handleOpen = (service) => {
    setServiceDetails(service); // Set service details dynamically
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  if (!isClient) {
    return null; // Prevent rendering on the server-side
  }

  return (
    <>
      <Head>
        <title>Services - HireFlow</title>
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
              {["home", "about", "services", "contact"].map((page) => (
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

        {/* Services Page Content */}
        <Container maxWidth="lg" style={{ marginTop: "40px" }}>
          <Typography variant="h3" gutterBottom align="center">
            Our Services
          </Typography>

          <Typography variant="h5" paragraph align="center">
            HireFlow offers a range of services designed to make the hiring
            process easier for both job seekers and employers. Explore our
            services below:
          </Typography>

          {/* Services List */}
          <Grid container spacing={4}>
            {[
              {
                title: "Job Listings",
                description:
                  "Post and browse job listings to find your next perfect role or ideal candidate. Our platform connects employers with job seekers easily.",
                imageUrl: "/images/services/JobListing.jpg", // Placeholder image
              },
              {
                title: "Advanced Filters",
                description:
                  "Our advanced search filters make it easy for both job seekers and recruiters to find the best matches quickly and efficiently.",
                imageUrl: "/images/services/AdvanceFilter.jpg", // Placeholder image
              },
              {
                title: "Resume Building",
                description:
                  "Take advantage of our resume building tools to create a standout resume that will help you land your dream job.",
                imageUrl: "/images/services/ResumeBuilding.jpg", // Placeholder image
              },
              {
                title: "Interview Preparation",
                description:
                  "Access mock interviews, resources, and tips to help you prepare for interviews and increase your chances of success.",
                imageUrl: "/images/services/InterviewPreparation.png", // Placeholder image
              },
              {
                title: "Job Alerts",
                description:
                  "Stay updated on the latest job opportunities through customizable job alerts sent directly to your inbox.",
                imageUrl: "/images/services/JobAlert.jpg", // Placeholder image
              },
              {
                title: "Recruiter Dashboard",
                description:
                  "Access a user-friendly dashboard to manage job posts, track candidates, and streamline your hiring process.",
                imageUrl: "/images/services/RecruiterDashboard.png", // Placeholder image
              },
            ].map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  style={{
                    padding: "20px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                    backgroundImage: `url(${service.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "275px",
                    position: "relative",
                    color: "white",
                  }}
                >
                  <Box
                    style={{
                      position: "absolute",
                      bottom: "0px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      marginBottom: "15px",
                      width: "90%",
                    }}
                  >
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2">
                      {service.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      onClick={() => handleOpen(service)}
                      style={{ marginTop: "10px" }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Modal for Service Details */}
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                width: "80%",
                maxWidth: "600px",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h5" gutterBottom>
                {serviceDetails?.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {serviceDetails?.description}
              </Typography>
              <Button variant="contained" onClick={handleClose}>
                Close
              </Button>
            </Box>
          </Fade>
        </Modal>

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
