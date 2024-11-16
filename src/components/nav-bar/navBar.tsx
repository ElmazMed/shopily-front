"use client";
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navList = [
    {
      name: "Home",
      icon: <DashboardIcon />,
    },
    {
      name: "Men's clothes",
      icon: <MaleIcon />,
    },
    {
      name: "Women's clothes",
      icon: <FemaleIcon />,
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <List>
          {navList.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </List>
    </Box>
  );

  return (
    <>
      <nav className="w-full flex justify-between p-8 bg-white shadow-sm">
        <div>
          <button onClick={toggleDrawer(true)}>
            <MenuIcon />
          </button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
        <div>
          <span className="logo">Shopily</span>
        </div>
        <div>
          <button>
            <ShoppingBagIcon />
          </button>
        </div>
      </nav>
    </>
  );
}
