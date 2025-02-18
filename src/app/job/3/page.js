"use client";

import React from "react";
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
} from "@mui/material";

const jobData = [
  {
    id: 1,
    company: "Tech Solutions",
    title: "Frontend Developer",
    salary: "$60,000 - $80,000",
    experience: "2+ years",
    location: "Remote",
  },
  {
    id: 2,
    company: "Innovatech",
    title: "Backend Developer",
    salary: "$70,000 - $90,000",
    experience: "3+ years",
    location: "San Francisco",
  },
  {
    id: 3,
    company: "CodeCrafters",
    title: "Full Stack Developer",
    salary: "$80,000 - $100,000",
    experience: "4+ years",
    location: "Austin",
  },
  {
    id: 4,
    company: "DesignHub",
    title: "UI/UX Designer",
    salary: "$50,000 - $70,000",
    experience: "1+ years",
    location: "Seattle",
  },
  {
    id: 5,
    company: "Data Wizards",
    title: "Data Scientist",
    salary: "$90,000 - $120,000",
    experience: "5+ years",
    location: "Chicago",
  },
  {
    id: 6,
    company: "VisionaryTech",
    title: "Product Manager",
    salary: "$100,000 - $130,000",
    experience: "6+ years",
    location: "Boston",
  },
];

export default function JobTable() {
  const router = useRouter();

  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Job Listings
      </Typography>

      <TableContainer component={Paper}>
        <Table style={{ backgroundColor: "#0b4754" }}>
          <TableHead>
            <TableRow style={{ backgroundColor: "#07313a" }}>
              <TableCell
                style={{
                  color: "#0adaf1eb",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Company Name
              </TableCell>
              <TableCell
                style={{
                  color: "#0adaf1eb",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Experience
              </TableCell>
              <TableCell
                style={{
                  color: "#0adaf1eb",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Salary Range
              </TableCell>
              <TableCell
                style={{
                  color: "#0adaf1eb",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Location
              </TableCell>
              <TableCell
                style={{
                  color: "#0adaf1eb",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {jobData.map((job) => (
              <TableRow style={{ color: "white" }} key={job.id} hover>
                <TableCell style={{ color: "white" }}>{job.company}</TableCell>
                <TableCell style={{ color: "white" }}>{job.experience}</TableCell>
                <TableCell style={{ color: "white" }}>{job.salary}</TableCell>
                <TableCell style={{ color: "white" }}>{job.location}</TableCell>
                <TableCell style={{ color: "white", textAlign: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => router.push(`/apply/${job.id}`)}
                  >
                    Apply Now
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Back Button */}
      <Box display="flex" justifyContent="center" marginTop="20px">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => router.push("/")}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}
