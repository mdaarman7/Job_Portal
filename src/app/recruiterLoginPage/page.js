"use client"; // Ensure the component is client-side only

import React, { useState } from "react";
import Head from "next/head";
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import { Business } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function RecruiterLogin() {
  const [username, setUsername] = useState("John Doe"); // Simulating a logged-in recruiter
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [jobListings, setJobListings] = useState([]);
  const router = useRouter();

  const handleJobSubmit = () => {
    if (companyName && jobTitle && salary && experience && location) {
      setJobListings((prevJobs) => [
        ...prevJobs,
        {
          id: prevJobs.length + 1,
          companyName,
          title: jobTitle,
          salary,
          experience,
          location,
        },
      ]);
      setCompanyName("");
      setJobTitle("");
      setSalary("");
      setExperience("");
      setLocation("");
    }
  };

  const handleLogout = () => {
    setUsername(""); // Simulate logging out
    setJobListings([]); // Clear job listings on logout
    router.push("/"); // Redirect to the home page after logging out
  };

  return (
    <>
      <Head>
        <title>Recruiter Login - HireFlow</title>
      </Head>

      <Container maxWidth="md" style={{ marginTop: "50px", textAlign: "center" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Box display="flex" alignItems="center">
            <Business style={{ fontSize: "50px", color: "#0adaf1eb", marginRight: "10px" }} />
            <Typography variant="h4" fontWeight="bold">
              Recruiter Portal
            </Typography>
          </Box>

          {username && (
            <Box>
              <Typography variant="h6" color="white" style={{ marginRight: "10px" }}>
                Welcome, {username}
              </Typography>
              <Button
                variant="outlined"
                color="error"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Box>
          )}
        </Box>

        <Box bgcolor="#07313a" padding="20px" borderRadius="8px">
          <Typography variant="h5" color="#0adaf1eb" gutterBottom>
            Add a Job Listing
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Company Name"
                variant="outlined"
                fullWidth
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Job Title"
                variant="outlined"
                fullWidth
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Salary"
                variant="outlined"
                fullWidth
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Experience"
                variant="outlined"
                fullWidth
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Location"
                variant="outlined"
                fullWidth
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            style={{ marginTop: "20px", backgroundColor: "#0adaf1eb", color: "#ffffff" }}
            onClick={handleJobSubmit}
          >
            Add Job
          </Button>
        </Box>

        <Container maxWidth="lg" style={{ marginTop: "40px" }}>
          <Typography variant="h5" color="#0adaf1eb" gutterBottom>
            Job Listings
          </Typography>
          <Grid container spacing={4}>
            {jobListings.map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.id}>
                <Box
                  sx={{
                    bgcolor: "#07313a",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    height: "150px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  <Typography variant="h6">{job.companyName}</Typography>
                  <Typography variant="h6">{job.title}</Typography>
                  <Typography variant="body2">Salary: {job.salary}</Typography>
                  <Typography variant="body2">Experience: {job.experience}</Typography>
                  <Typography variant="body2">Location: {job.location}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </>
  );
}
