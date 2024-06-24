import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AuthContext from "../auth/AuthContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const style = {
  bgcolor: "background.paper",
  display: "flex",
  flexDirection: "column",
  width: "600px",

  padding: "30px",
};

function LoginForm({ callback }) {
  const navigate = useNavigate();
  const [username] = useState("learner");
  const [password] = useState("2024");

  const auth = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleLogin = () => {
    auth.singin(username, () => navigate("/"));
  };

  return (
    <Box sx={style} component="form" gap={4}>
      <Typography variant="h4" component="div" textAlign={"center"}>
        Login
      </Typography>
      <TextField
        label="Username"
        default="user"
        value={username}
        sx={{ m: 1 }}
      />
      <FormControl sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button onClick={handleLogin} sx={{ m: 1 }} variant="contained">
        Sign in
      </Button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <Typography variant="h10" component="div">
          Forgot password?
        </Typography>
        <Typography variant="h10" component="div">
          Don't have an account? Sign up
        </Typography>
      </div>
    </Box>
  );
}

export default LoginForm;