"use client"; // Ensure the component is client-side

import React, { useState } from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation"; // For navigation

export default function RecruiterForm() {
  const router = useRouter(); // Hook for navigation

  const [formData, setFormData] = useState({
    username: "",
    companyName: "",
    email: "",
    password: "",
    websiteUrl: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    companyName: "",
    email: "",
    password: "",
    websiteUrl: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    // Username Validation
    const usernameRegex = /^[a-zA-Z0-9@#._-]+$/; // Allow alphabets, numbers, and some symbols
    const alphabetOnlyRegex = /^[a-zA-Z]+$/; // Detect if username contains only alphabets

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
          "Username cannot contain only alphabets. Include numbers or symbols.",
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

    // Company Name Validation
    if (!formData.companyName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        companyName: "Company name is required.",
      }));
      hasError = true;
    }

    // Email Validation
    if (!formData.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required.",
      }));
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Enter a valid email address.",
      }));
      hasError = true;
    }

    // Password Validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/; // Minimum 8 characters, at least one letter, one number, and one special character
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
          "Password must be at least 8 characters long, include a number, and a symbol.",
      }));
      hasError = true;
    }

    // Website URL Validation (only if input is provided)
    if (
      formData.websiteUrl &&
      !/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(formData.websiteUrl)
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        websiteUrl: "Enter a valid URL (e.g., https://example.com).",
      }));
      hasError = true;
    }

    if (hasError) {
      return; // Prevent form submission if there are validation errors
    }

    // Placeholder form submission logic
    alert("Recruiter account created successfully!");
  };

  const handleNavigateToLogin = () => {
    router.push("/loginform"); // Redirect to the login form page
  };

  return (
    <Container
      maxWidth="xs"
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
          style={{
            color: "#0adaf1eb",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Recruiter Sign-Up
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
              flex: 1,
              color: "#0adaf1eb",
              marginBottom: "20px",
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

          {/* Company Name Field */}
          <TextField
            label="Company Name"
            name="companyName"
            variant="outlined"
            fullWidth
            value={formData.companyName}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#07313a",
              flex: 1,
              color: "#0adaf1eb",
              marginBottom: "20px",
            }}
            InputProps={{
              style: { color: "#0adaf1eb" },
            }}
            InputLabelProps={{
              style: { color: "#0adaf1eb" },
            }}
            required
            error={!!errors.companyName}
            helperText={errors.companyName}
          />

          {/* Email Field */}
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#07313a",
              flex: 1,
              color: "#0adaf1eb",
              marginBottom: "20px",
            }}
            InputProps={{
              style: { color: "#0adaf1eb" },
            }}
            InputLabelProps={{
              style: { color: "#0adaf1eb" },
            }}
            required
            error={!!errors.email}
            helperText={errors.email}
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
              flex: 1,
              color: "#0adaf1eb",
              marginBottom: "20px",
            }}
            InputProps={{
              style: { color: "#0adaf1eb" },
            }}
            InputLabelProps={{
              style: { color: "#0adaf1eb" },
            }}
            required
            error={!!errors.password}
            helperText={errors.password}
          />

          {/* Website URL Field */}
          <TextField
            label="Website URL"
            name="websiteUrl"
            variant="outlined"
            fullWidth
            value={formData.websiteUrl}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#07313a",
              flex: 1,
              color: "#0adaf1eb",
              marginBottom: "20px",
            }}
            InputProps={{
              style: { color: "#0adaf1eb" },
            }}
            InputLabelProps={{
              style: { color: "#0adaf1eb" },
            }}
            error={!!errors.websiteUrl}
            helperText={errors.websiteUrl} // Validation is optional
          />

          {/* Submit Button */}
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button
              variant="contained"
              color="primary"
              style={{ fontWeight: "bold", width: "auto" }}
              type="submit"
            >
              Create Account
            </Button>
          </Box>

          {/* Back to Login Option */}
          <Box textAlign="center" style={{ marginTop: "20px" }}>
            <Typography style={{ color: "#fff" }}>
              Already have an account?{" "}
              <span
                style={{
                  cursor: "pointer",
                  color: "#3f51b5",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
                onClick={handleNavigateToLogin} // Redirect to login form
              >
                Login
              </span>
            </Typography>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
