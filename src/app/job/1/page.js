"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  TextField,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const jobData = [
  { id: 1, company: "Tech Solutions", title: "Frontend Developer", salary: "$60,000 - $80,000", experience: "2+ years", location: "Remote" },
  { id: 2, company: "Innovatech", title: "Backend Developer", salary: "$70,000 - $90,000", experience: "3+ years", location: "San Francisco" },
  { id: 3, company: "CodeCrafters", title: "Full Stack Developer", salary: "$80,000 - $100,000", experience: "4+ years", location: "Austin" },
  { id: 4, company: "DesignHub", title: "UI/UX Designer", salary: "$50,000 - $70,000", experience: "1+ years", location: "Seattle" },
  { id: 5, company: "Data Wizards", title: "Data Scientist", salary: "$90,000 - $120,000", experience: "5+ years", location: "Chicago" },
  { id: 6, company: "VisionaryTech", title: "Product Manager", salary: "$100,000 - $130,000", experience: "6+ years", location: "Boston" },
];

export default function JobTable() {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    address: "",
    phone: "",
    website: "",
  });

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setFormData({ ...formData, position: job.title });
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted:", formData);
    alert("Application submitted successfully!");
    handleCloseModal();
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Frontend Developer Job Listings
      </Typography>
      <TableContainer component={Paper}>
        <Table style={{ backgroundColor: "#0b4754" }}>
          <TableHead>
            <TableRow style={{ backgroundColor: "#07313a" }}>
              {["Company Name", "Experience", "Salary Range", "Location", "Action"].map((header) => (
                <TableCell key={header} style={{ color: "#0adaf1eb", fontWeight: "bold", fontSize: 20 }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {jobData.map((job) => (
              <TableRow key={job.id} hover>
                <TableCell style={{ color: "white" }}>{job.company}</TableCell>
                <TableCell style={{ color: "white" }}>{job.experience}</TableCell>
                <TableCell style={{ color: "white" }}>{job.salary}</TableCell>
                <TableCell style={{ color: "white" }}>{job.location}</TableCell>
                <TableCell style={{ color: "white", textAlign: "center" }}>
                  <Button variant="contained" color="primary" onClick={() => handleApplyClick(job)}>
                    Apply Now
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={Boolean(selectedJob)} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "rgb(4, 33, 42)",
            p: 4,
            borderRadius: "10px",
            boxShadow: 24,
            width: "1400px",
            height: "750px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ width: "50%", height: "100%", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "10px" }}></Box>
          <Box sx={{ width: "50%", height: "100%", padding: "20px", overflowY: "auto", color: "#fff", backgroundColor: "#07313a", borderRadius: "10px", boxSizing: "border-box" }}>
            <IconButton onClick={handleCloseModal} sx={{ position: "absolute", top: "10px", right: "10px", color: "#fff" }}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h4" style={{ color: "#0adaf1eb", textAlign: "center", marginBottom: "20px" }}>
              Apply for {selectedJob?.title}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField label="Job Position" name="position" variant="outlined" fullWidth value={formData.position} onChange={handleInputChange} sx={{ mb: 2, bgcolor: "#07313a", color: "#fff" }} InputProps={{ style: { color: "#0adaf1eb" } }} InputLabelProps={{ style: { color: "#0adaf1eb" } }} disabled />
              {["firstName", "lastName", "email", "address", "phone"].map((field) => (
                <TextField key={field} label={field.replace(/^\w/, (c) => c.toUpperCase())} name={field} variant="outlined" fullWidth value={formData[field]} onChange={handleInputChange} required sx={{ mb: 2, bgcolor: "#07313a", color: "#fff" }} InputProps={{ style: { color: "#0adaf1eb" } }} InputLabelProps={{ style: { color: "#0adaf1eb" } }} />
              ))}
              <TextField label="Website" name="website" variant="outlined" fullWidth value={formData.website} onChange={handleInputChange} sx={{ mb: 2, bgcolor: "#07313a", color: "#fff" }} InputProps={{ style: { color: "#0adaf1eb" } }} InputLabelProps={{ style: { color: "#0adaf1eb" } }} />
              <Button variant="contained" color="primary" fullWidth type="submit">
                Submit Application
              </Button>
            </form>
          </Box>
        </Box>
      </Modal>
      <Box display="flex" justifyContent="center" marginTop="20px">
        <Button variant="contained" color="secondary" onClick={() => router.push("/")}>Back to Home</Button>
      </Box>
    </Container>
  );
}
