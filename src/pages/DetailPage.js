import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import BasicChips from "../components/SkillChip";
import { useNavigation } from "react-router-dom";
import SpinningIcon from "../components/SpinningIcon";
import "../SpinningIcon.css";

function DetailPage() {
  const { jobs } = useLoaderData();
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <SpinningIcon />;
  }

  if (!job)
    return (
      <Typography variant="h3" marginTop={3}>
        Job not found
      </Typography>
    );

  return (
    <Container sx={{ width: 600 }}>
      <Typography variant="h6" marginTop={3} fontWeight={"bold"}>
        Job Title: {job.title}
      </Typography>
      <Box
        marginTop={3}
        sx={{ display: "flex" }}
        alignItems="center"
        textAlign={"justify"}
      >
        Job Desciption: {job.description}
      </Box>
      <BasicChips skill={job.skills} />
      <Box marginTop={3} sx={{ display: "flex" }} alignItems="center">
        Salary: {job.salaryLow} USD - {job.salaryHigh} USD per year
      </Box>
      <Box marginTop={3} sx={{ display: "flex" }} alignItems="center">
        City: {job.city}
      </Box>
    </Container>
  );
}

export default DetailPage;