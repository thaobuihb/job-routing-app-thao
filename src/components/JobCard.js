import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import SkillChip from "../components/SkillChip";
import { styled } from "@mui/material/styles";

const CardStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  border: "1px solid black",
  width: "100%",
  maxWidth: "350px",
  minWidth: "270px",
  minHeight: "240px",
  margin: "auto",
  backgroundColor: theme.palette.primary.light,
}));

export default function ActionAreaCard({ job }) {
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <CardStyle ariant="outlined">
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          sx={{ color: (theme) => theme.palette.common.white }}
        >
          {job.title}
          <hr />
        </Typography>
        <SkillChip skill={job.skills} />
        <Typography
          variant="body2"
          sx={{
            pt: "10px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: (theme) => theme.palette.common.white,
          }}
        >
          {job.description}
        </Typography>
      </CardContent>
      <Button
        size="small"
        variant="contained"
        onClick={() => navigate(`/job/${job.id}`)}
        state={{ backgroundLocation: location }}
        sx={{
          backgroundColor: "#ffa726",
          "&:hover": {
            backgroundColor: "white",
          },
          color: "black",
        }}
      >
        Learn More
      </Button>
    </CardStyle>
  );
}