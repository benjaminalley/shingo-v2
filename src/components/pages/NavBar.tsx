import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import {Menu, MenuItem} from "@mui/material";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleMenuOpen = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shingo
          </Typography>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={!!anchorEl}
            onClose={handleMenuClose}
          >
            <MenuItem
              component={Link}
              to="/"
              onClick={handleMenuClose}
            >
              Home
            </MenuItem>
            <MenuItem
              component={Link}
              to="/fast-moves"
              onClick={handleMenuClose}
            >
              Fast Moves
            </MenuItem>
            <MenuItem
              component={Link}
              to="/charge-moves"
              onClick={handleMenuClose}
            >
              Charge Moves
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}