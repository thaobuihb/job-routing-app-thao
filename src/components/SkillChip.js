import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function BasicChips({ skill }) {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {skill.slice(0, 4).map((skill, index) => (
        <Chip
          key={index}
          label={skill}
          variant="outlined"
          size="small"
          sx={{
            margin: "3px",
            backgroundColor: "#d74742",
            border: "0px",
            color: "white",
          }}
        />
      ))}
    </Stack>
  );
}