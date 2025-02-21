"use client";

import React, { useState, useEffect } from "react";
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
import { addApplyJob, getFrontendJob, getFullstackJob, getJobDetails, getLoggedInData } from "@/app/util/api";

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

  const [users, setUsers] = useState([]);
      useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await getLoggedInData(); // Fetch data
            setUsers(response); // Update state
            //console.log(response); // Log the fetched response directly
          } catch (error) {
            console.error("Error fetching users:", error);
          }
        };
          fetchUsers();
      }, []);


  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await getFullstackJob();
        setJobListings(response);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }
    fetchJobs();
  }, []);

  const handleApplyClick = (job) => {
    if (!users || users.length === 0) {
      alert("You Need to Login");
  
      // Redirect user to login page and stop execution
      router.push("/loginform");
      return; // 🚀 This ensures no further execution happens
    }
  
    router.push("/ApplyForm");
    setSelectedJob(job);
    setFormData((prev) => ({ ...prev, position: job.title }));
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Application Submitted:", formData);

    const response = await addApplyJob(formData);
        console.log(response);
        if(response){
          alert("Application submitted successfully!");
          router.push("/");
        }
        
    
    handleCloseModal();
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Fullstack Developer Job Listings
      </Typography>
      <TableContainer component={Paper}>
        <Table style={{ backgroundColor: "#0b4754" }}>
          <TableHead>
            <TableRow style={{ backgroundColor: "#07313a" }}>
              {["Company Name", "Experience", "Salary Range", "Location", "Action"].map((header, index) => (
                <TableCell key={index} style={{ color: "#0adaf1eb", fontWeight: "bold", fontSize: 20 }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {jobListings.map((job, index) => (
              <TableRow key={job.id || index} hover>
                <TableCell style={{ color: "white" }}>{job.companyname}</TableCell>
                <TableCell style={{ color: "white" }}>{job.experience}</TableCell>
                <TableCell style={{ color: "white" }}>{job.salary}</TableCell>
                <TableCell style={{ color: "white" }}>{job.address}</TableCell>
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
              {["firstname", "lastname", "email", "address", "phone"].map((field) => (
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
