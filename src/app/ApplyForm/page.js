"use client"; // Ensures the component runs on the client-side

import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation"; // For navigation
import { addApplyJob, addApplyJobDetails } from "../util/api";

export default function ApplyForm() {
  const router = useRouter(); // Hook for navigation

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    address: "",
    phone: "",
    website: "",
  });

  // Error State
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    address: "",
    phone: "",
    website: "",
  });

  // Handles Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error when user types
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Form Submit Handler
  const handleSubmit = async (e) => {
  e.preventDefault();

  let hasError = false;
  const newErrors = { ...errors };

  // Validation
  if (!formData.firstName.trim()) {
    newErrors.firstName = "First Name is required.";
    hasError = true;
  }
  if (!formData.lastName.trim()) {
    newErrors.lastName = "Last Name is required.";
    hasError = true;
  }
  if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
    newErrors.email = "Enter a valid email.";
    hasError = true;
  }
  if (!formData.position.trim()) {
    newErrors.position = "Position is required.";
    hasError = true;
  }
  if (!formData.address.trim()) {
    newErrors.address = "Address is required.";
    hasError = true;
  }
  if (!formData.phone.match(/^\d{10}$/)) {
    newErrors.phone = "Enter a valid 10-digit phone number.";
    hasError = true;
  }
  if (
    formData.website &&
    !formData.website.match(/^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)$/)
  ) {
    newErrors.website = "Enter a valid website URL.";
    hasError = true;
  }

  // If errors exist, set error state and stop submission
  if (hasError) {
    setErrors(newErrors);
    return;
  }

  console.log("Form Submitted Successfully!", formData);

  try {
    const response = await addApplyJob(formData);
    console.log("API Response:", response);

    if (response) {
      alert("Application Submitted");
      router.push("/");
    } else {
      alert("Application not Submitted");
    }
  } catch (error) {
    console.error("Error submitting application:", error);
    alert("An error occurred while submitting.");
  }
};


  return (
    <Container
      maxWidth="sm"
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
          Apply Now
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <TextField
            label="First Name"
            name="firstName"
            variant="outlined"
            fullWidth
            value={formData.firstName}
            onChange={handleInputChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            style={{
              marginBottom: "10px",
              backgroundColor: "#07313a",
              color: "#fff",
            }}
            InputProps={{ style: { color: "#0adaf1eb" } }}
            InputLabelProps={{ style: { color: "#0adaf1eb" } }}
          />

          {/* Last Name */}
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            value={formData.lastName}
            onChange={handleInputChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            style={{
              marginBottom: "10px",
              backgroundColor: "#07313a",
              color: "#fff",
            }}
            InputProps={{ style: { color: "#0adaf1eb" } }}
            InputLabelProps={{ style: { color: "#0adaf1eb" } }}
          />

          {/* Email */}
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
            style={{
              marginBottom: "10px",
              backgroundColor: "#07313a",
              color: "#fff",
            }}
            InputProps={{ style: { color: "#0adaf1eb" } }}
            InputLabelProps={{ style: { color: "#0adaf1eb" } }}
          />

          {/* Position */}
          <TextField
            label="Position"
            name="position"
            variant="outlined"
            fullWidth
            value={formData.position}
            onChange={handleInputChange}
            error={!!errors.position}
            helperText={errors.position}
            style={{
              marginBottom: "10px",
              backgroundColor: "#07313a",
              color: "#fff",
            }}
            InputProps={{ style: { color: "#0adaf1eb" } }}
            InputLabelProps={{ style: { color: "#0adaf1eb" } }}
          />

          {/* Address */}
          <TextField
            label="Address"
            name="address"
            variant="outlined"
            fullWidth
            value={formData.address}
            onChange={handleInputChange}
            error={!!errors.address}
            helperText={errors.address}
            style={{
              marginBottom: "10px",
              backgroundColor: "#07313a",
              color: "#fff",
            }}
            InputProps={{ style: { color: "#0adaf1eb" } }}
            InputLabelProps={{ style: { color: "#0adaf1eb" } }}
          />

          {/* Phone */}
          <TextField
            label="Phone"
            name="phone"
            type="tel"
            variant="outlined"
            fullWidth
            value={formData.phone}
            onChange={handleInputChange}
            error={!!errors.phone}
            helperText={errors.phone}
            style={{
              marginBottom: "10px",
              backgroundColor: "#07313a",
              color: "#fff",
            }}
            InputProps={{ style: { color: "#0adaf1eb" } }}
            InputLabelProps={{ style: { color: "#0adaf1eb" } }}
          />

          {/* Website URL */}
          <TextField
            label="Website URL"
            name="website"
            variant="outlined"
            fullWidth
            value={formData.website}
            onChange={handleInputChange}
            error={!!errors.website}
            helperText={errors.website}
            style={{
              marginBottom: "10px",
              backgroundColor: "#07313a",
              color: "#fff",
            }}
            InputProps={{ style: { color: "#0adaf1eb" } }}
            InputLabelProps={{ style: { color: "#0adaf1eb" } }}
          />

          {/* Submit Button */}
          <Button variant="contained" color="primary" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
