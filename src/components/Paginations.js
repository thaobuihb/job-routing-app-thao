import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export default function BasicPagination({ pages }) {
  const navigate = useNavigate();

  const handleChange = (event, value) => {
    navigate(`/${value}`);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={pages}
        onChange={handleChange}
        color="primary"
        sx={{
          display: "flex",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </Stack>
  );
}