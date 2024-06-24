import React, { useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
export default function SearchAppBar() {
  const auth = useContext(AuthContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const navigate = useNavigate();
  const handlClickLogin = (event) => {
    navigate("/login");
  };
  const handlClickLogout = (event) => {
    auth.signout(() => {
      navigate("/");
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let q = formData.get("q");
    setSearchParams({ q: q });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => navigate("/")}
            sx={{ cursor: "pointer" }}
          >
            Job Routing
          </Typography>
          <Box component={"form"} onSubmit={handleSubmit}>
            {" "}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                name="q"
                placeholder="Search…"
                defaultValue={q ?? undefined}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {auth?.user ? (
            <>
              <Button
                onClick={handlClickLogout}
                variant="contained"
                startIcon={<LogoutIcon />}
              >
                Logout
              </Button>
              <Avatar
                src="/images/avatar/1.jpg"
                sx={{ width: 40, height: 40, ml: 1, mr: 1 }}
              />
              <Typography variant="h6" noWrap component="div">
                {auth.user}
              </Typography>
            </>
          ) : (
            <Button
              onClick={handlClickLogin}
              variant="contained"
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}