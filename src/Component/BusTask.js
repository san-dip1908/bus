import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
// import Switch from "@mui/material/Switch";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AttractionsIcon from "@mui/icons-material/Attractions";
import MenuIcon from "@mui/icons-material/Menu";

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu Bar
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Reservation</MenuItem>
                <MenuItem onClick={handleClose}>Dashboard</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Box sx={{ width: "100%", maxWidth: "500px", margin: "auto" }}>
        <Typography
          className="lower-deck"
          sx={{ marginTop: "15px", fontWeight: 500 }}
        >
          Lower Deck
        </Typography>
        <Box className="wheel-parent">
          <AttractionsIcon className="wheel-icon" />
          <Box className="main-Box">
            <Box>
              <Box style={{ display: "flex", flexWrap: "wrap", gap: "23px" }}>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>

                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>

                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>

                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>

                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
              </Box>
              <Box className="Boxcolumn2">
                {Array.from({ length: 10 }).map((item, ind) => (
                  <Box key={ind} className="Box1">
                    {" "}
                    <Box className="sub-Box1"></Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Typography
          className="upper-deck"
          sx={{ marginTop: "15px", fontWeight: 500 }}
        >
          Upper Deck
        </Typography>
        <Box className="wheel-parent">
          {/* <AttractionsIcon className="wheel-icon" /> */}
          <Box className="main-Box">
            <Box>
              <Box style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>

                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>

                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>

                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>

                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
              </Box>
              <Box className="Boxcolumn2">
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>

                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
                <Box className="Box1">
                  {" "}
                  <Box className="sub-Box1"></Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
