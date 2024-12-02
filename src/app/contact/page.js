"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
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
import { addContactUsInformtaion } from "../util/api";
export default function ContactUs() {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const response = await addContactUsInformtaion(formData);
    console.log(response);
    if(response){
      alert("Message sent! We will get back to you shortly.");
      setFormData({ name: "", email: "", message: "" }); // Clear the form
    }
   

  };

  if (!isClient) {
    return null; // Prevent rendering on the server-side
  }

  return (
    <>
      <Head>
        <title>Contact Us - HireFlow</title>
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

        {/* Contact Us Page Content */}
        <Container maxWidth="lg" style={{ marginTop: "40px" }}>
          <Typography variant="h3" gutterBottom align="center">
            Contact Us
          </Typography>

          <Typography
            variant="h5"
            align="center"
            style={{ color: "white", marginBottom: "20px" }}
          >
            We would love to hear from you! Please fill out the form below and
            we will get in touch with you soon.
          </Typography>

          {/* Contact Form and Google Map */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <form onSubmit={handleSubmit}>
                <Box>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    margin="normal"
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
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    label="Your Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                    margin="normal"
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
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    label="Your Message"
                    variant="outlined"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    margin="normal"
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
                </Box>
                <Box mt={2}>
                  <Button type="submit" variant="contained" color="primary">
                    Send Message
                  </Button>
                </Box>
              </form>
            </Grid>

            {/* Google Map Section */}
            <Grid item xs={12} md={6}>
              <Box
                style={{
                  height: "100%",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14422.183155801225!2d85.2917!3d27.7099!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a575abf3656b%3A0x432e0a0b07949862!2sKamalpokhari%20Marg%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1690911283727!5m2!1sen!2snp"
                  width="100%"
                  height="400"
                  style={{
                    border: "0",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </Grid>
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
              {/* Column 1: About Us */}
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
