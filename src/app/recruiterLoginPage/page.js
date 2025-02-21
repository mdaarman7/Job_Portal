"use client"; // Ensure the component is client-side only

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Box, Typography, Button, TextField, Grid } from "@mui/material";
import { Business } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { addBackendJob, addDatascJob, addDesignJob, addFrontendJob, addFullstackJob, addJobDetails, addProductJob, deleteAddedJob, deleteLoginData, getBackendJob, getDatascJob, getDesignJob, getFrontendJob, getFullstackJob, getJobDetails, getLoggedInData, getProductJob } from "../util/api";

export default function RecruiterLogin() {
  const [username, setUsername] = useState("John Doe"); // Simulating a logged-in recruiter
  const router = useRouter();
  const [jobListings, setJobListings] = useState([]);

  const fetchAllJobs = async () => {
    try {
      const frontendJobs = await getFrontendJob();
      const backendJobs = await getBackendJob();
      const fullstackJobs = await getFullstackJob();
      const designJobs = await getDesignJob();
      const datascienceJobs = await getDatascJob();
      const productJobs = await getProductJob();

      const allJobs = [
        ...(frontendJobs || []),
        ...(backendJobs || []),
        ...(fullstackJobs || []),
        ...(designJobs || []),
        ...(datascienceJobs || []),
        ...(productJobs || [])
      ];

      setJobListings(allJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // Fetch jobs when component loads
  useEffect(() => {
    fetchAllJobs();
  }, []);
  

  // State for form fields
  const [formData, setFormData] = useState({
    companyname: "",
    experience: "",
    salary: "",
    address: "",
    jobtitle: "",
  });

  const [errors, setErrors] = useState({
    companyname: "",
    experience: "",
    salary: "",
    address: "",
    jobtitle: "",
  });

  const [users, setUsers] = useState([]);
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await getLoggedInData(); // Fetch data
          setUsers(response); // Update state
          console.log(response); // Log the fetched response directly
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
        fetchUsers();
    }, []);


  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error message when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validate and submit form
  const handleJobSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    let newErrors = {};
    let hasError = false;

    Object.keys(formData).forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = `${field.replace(/^\w/, (c) => c.toUpperCase())} is required`;
        hasError = true;
      }
    });

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    
    
    if (formData.jobtitle.toLowerCase() === "frontend") 
    {
      const response = await addFrontendJob(formData);
       if (response) {
      alert("Job Added Successfully");
        fetchAllJobs();
      // Fetch updated job listings
      // const updatedJobs = await getFrontendJob();
      //   console.log(updatedJobs);
      // setJobListings(updatedJobs);

      // Clear form fields and errors
      setFormData({ companyname: "", jobtitle: "", salary: "", experience: "", address: "" });
      setErrors({});
    } else {
      alert("Failed to Add Job");
      router.push("/loginform");
    }
    } 


    else if (formData.jobtitle.toLowerCase() === "backend") 
    {
      const response = await addBackendJob(formData);
       if (response) {
      alert("Job Added Successfully");
      fetchAllJobs();
      // Fetch updated job listings
      // const updatedJobs = await getBackendJob();
      // setJobListings(updatedJobs);

      // Clear form fields and errors
      setFormData({ companyname: "", jobtitle: "", salary: "", experience: "", address: "" });
      setErrors({});
    } else {
      alert("Failed to Add Job");
      router.push("/loginform");
    }
    }


    else if (formData.jobtitle.toLowerCase() === "fullstack") 
    {
      const response = await addFullstackJob(formData);
       if (response) {
      alert("Job Added Successfully");
      fetchAllJobs();
      // Fetch updated job listings
      // const updatedJobs = await getJobDetails();
      // setJobListings(updatedJobs);

      // Clear form fields and errors
      setFormData({ companyname: "", jobtitle: "", salary: "", experience: "", address: "" });
      setErrors({});
    } else {
      alert("Failed to Add Job");
      router.push("/loginform");
    }
    }

    else if (formData.jobtitle.toLowerCase() === "ui/ux designer") 
      {
        const response = await addDesignJob(formData);
         if (response) {
        alert("Job Added Successfully");
        fetchAllJobs();
        // Fetch updated job listings
        // const updatedJobs = await getJobDetails();
        // setJobListings(updatedJobs);
  
        // Clear form fields and errors
        setFormData({ companyname: "", jobtitle: "", salary: "", experience: "", address: "" });
        setErrors({});
      } else {
        alert("Failed to Add Job");
        router.push("/loginform");
      }
      }


      else if (formData.jobtitle.toLowerCase() === "data scientist") 
        {
          const response = await addDatascJob(formData);
           if (response) {
          alert("Job Added Successfully");
          fetchAllJobs();
          // Fetch updated job listings
          // const updatedJobs = await getJobDetails();
          // setJobListings(updatedJobs);
    
          // Clear form fields and errors
          setFormData({ companyname: "", jobtitle: "", salary: "", experience: "", address: "" });
          setErrors({});
        } else {
          alert("Failed to Add Job");
          router.push("/loginform");
        }
        }


        else if (formData.jobtitle.toLowerCase() === "product manager") 
          {
            const response = await addProductJob(formData);
             if (response) {
            alert("Job Added Successfully");
            fetchAllJobs();
            // Fetch updated job listings
            // const updatedJobs = await getJobDetails();
            // setJobListings(updatedJobs);
      
            // Clear form fields and errors
            setFormData({ companyname: "", jobtitle: "", salary: "", experience: "", address: "" });
            setErrors({});
          } else {
            alert("Failed to Add Job");
            router.push("/loginform");
          }
          }

          else
          {
            alert("Entered Job is not Listed");
            router.push("/recruiterLoginPage");
          }

    // const response = await addJobDetails(formData);
    // if (response) {
    //   //alert("Job Added Successfully");

    //   // Fetch updated job listings
    //   const updatedJobs = await getFrontendJob();
    //   setJobListings(updatedJobs);

    //   // Clear form fields and errors
    //   setFormData({ companyname: "", jobtitle: "", salary: "", experience: "", address: "" });
    //   setErrors({});
    // } else {
    //   alert("Failed to Add Job");
    //   router.push("/loginform");
    // }
  };

  // Handle logout
  const handleLogout = async () => {
      if (users.length > 0) {
        const userId = users[0].id; // Assuming only one user is logged in
        try {
          await deleteLoginData(userId);
          console.log(`User with the ID number ${userId} deleted`);
          setUsers(null); // Reset user state
          router.push("/"); // Redirect to home
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      } else {
        console.error("No user found to delete.");
      }
    };

    const handleDelete = async (id, jobtitle) => {
      if (!id) {
        console.error("Error: Job ID is undefined.");
        return;
      }
      console.log("Deleting job with ID:", id);
      console.log("Deleting Job Title",jobtitle);
      if(jobtitle.toLowerCase() == "frontend")
      {
          const response = await deleteAddedJob(id);
          if (response) {
              fetchAllJobs();
          alert("Job Deleted Successfully");
        } else {
          alert("Failed to Delete Job");
        }
      }
       
    };
    
    
    const handleUpdate = (job) => {
      setFormData({
        companyname: job.companyname,
        jobtitle: job.jobtitle,
        salary: job.salary,
        experience: job.experience,
        address: job.address,
      });
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
            <Typography variant="h4" fontWeight="bold">Recruiter Portal</Typography>
          </Box>

          {username && (
            <Box>
              <Typography variant="h6" color="white" style={{ marginRight: "10px" }}>
                Welcome, {username}
              </Typography>
              <Button variant="outlined" color="error" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          )}
        </Box>

        {/* Job Submission Form */}
        <Box bgcolor="#07313a" padding="20px" borderRadius="8px">
          <Typography variant="h5" color="#0adaf1eb" gutterBottom>
            Add a Job Listing
          </Typography>

          <Grid container spacing={2}>
            {["companyname", "jobtitle", "salary", "experience", "address"].map((field, index) => (
              <Grid item xs={12} sm={field === "salary" || field === "experience" ? 6 : 12} key={index}>
                <TextField
                  name={field}
                  label={field.replace(/^\w/, (c) => c.toUpperCase())}
                  variant="outlined"
                  fullWidth
                  value={formData[field]}
                  onChange={handleInputChange}
                  InputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                  error={!!errors[field]}
                  helperText={errors[field]}
                />
              </Grid>
            ))}
          </Grid>

          <Button
            variant="contained"
            style={{ marginTop: "20px", backgroundColor: "#0adaf1eb", color: "#ffffff" }}
            onClick={handleJobSubmit}
            //disabled={Object.values(formData).some((val) => !val.trim())}
          >
            Add Job
          </Button>
        </Box>

        {/* Job Listings */}
        <Typography variant="h5" style={{ marginTop: "40px", color: "#0adaf1eb" }}>
          Job Listings
        </Typography>
        <Grid container spacing={4}>
          {jobListings.length > 0 ? (
            jobListings.map((job, index) => (
              <Grid item xs={12} sm={6} md={4} key={job.id || index}>
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
                  <Typography variant="h6">{job.companyname}</Typography>
                  <Typography variant="h6">{job.jobtitle}</Typography>
                  <Typography variant="body2">Salary: {job.salary}</Typography>
                  <Typography variant="body2">Experience: {job.experience}</Typography>
                  <Typography variant="body2">Location: {job.address}</Typography>
                  <Button
                          variant="contained"
                          style={{ marginTop: "20px", backgroundColor: "#0adaf1eb", color: "#ffffff" }}
                          onClick={() => {
                            if (job.id) {
                              handleDelete(job.id, job.jobtitle);
                            } else {
                              console.error("Job ID is undefined:", job);
                            }
                          }}
                        >
                          Delete
                        </Button>

                      <Button
                          variant="contained"
                          style={{ marginTop: "20px", backgroundColor: "#0adaf1eb", color: "#ffffff" }}
                          onClick={() => handleUpdate(job)}
                        >
                          Update
                        </Button>
                </Box>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" color="white">
              No job listings available.
            </Typography>
          )}
        </Grid>
      </Container>
    </>
  );
}
