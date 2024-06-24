import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import BasicChips from "../components/SkillChip";
import { useNavigation } from "react-router-dom";
import SpinningIcon from "../components/SpinningIcon";
import "../SpinningIcon.css";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function DetailPageModal() {
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();
  const { jobs } = useLoaderData();
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <SpinningIcon />;
  }

  // const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };

  if (!job)
    return (
      <Typography variant="h3" marginTop={3}>
        Job not found
      </Typography>
    );

  return (
    <Modal open={open} onClose={handleClose}>
      <Container sx={style}>
        <Typography
          variant="h5"
          marginTop={3}
          fontWeight={"bold"}
          textAlign={"center"}
        >
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
        <Box marginTop={3} sx={{ display: "flex" }} alignItems="center">
          Skills required: <BasicChips skill={job.skills} />
        </Box>

        <Box marginTop={3} sx={{ display: "flex" }} alignItems="center">
          Salary: {job.salaryLow} USD - {job.salaryHigh} USD per year
        </Box>
        <Box marginTop={3} sx={{ display: "flex" }} alignItems="center">
          City: {job.city}
        </Box>
      </Container>
    </Modal>
  );
}

export default DetailPageModal;