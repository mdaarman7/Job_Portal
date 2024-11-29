"use client"; // Ensure the component is client-side

import React, { useState } from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation"; // Import router for navigation

export default function FreelancerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });

  const router = useRouter(); // Initialize router

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

    // Validation regex patterns
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const usernameRegex = /^[a-zA-Z0-9@#._-]+$/; // Allow alphabets, numbers, and specific symbols
    const alphabetOnlyRegex = /^[a-zA-Z]+$/; // Detect if username contains only alphabets
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/; // Minimum 8 characters, one number, one symbol

    let hasError = false;

    // Validate required fields
    if (!formData.name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required.",
      }));
      hasError = true;
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: formData.email
          ? "Please enter a valid email address."
          : "Email is required.",
      }));
      hasError = true;
    }

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

    // Form submission logic (alert for now)
    alert("Form submitted: " + JSON.stringify(formData));
  };

  const handleLoginNavigation = () => {
    router.push("/loginform"); // Navigate to the login form page
  };

  return (
    <Container maxWidth="sm" style={{ minHeight: "93.5vh", marginTop: "50px" }}>
      <Box bgcolor="rgb(4 33 42)" padding="20px" borderRadius="8px">
        <Typography variant="h4" style={{ color: "#0adaf1eb", textAlign: "center" }}>
          Apply as a Freelancer
        </Typography>

        <form
          onSubmit={handleSubmit}
          style={{ textAlign: "left", marginTop: "20px" }}
        >
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            value={formData.name}
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
            error={!!errors.name}
            helperText={errors.name}
          />
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

          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button
              variant="contained"
              color="primary"
              style={{ fontWeight: "bold", width: "auto" }}
              type="submit"
            >
              Submit Application
            </Button>
          </Box>
        </form>

        <Box mt={3} textAlign="center">
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
  );
}
