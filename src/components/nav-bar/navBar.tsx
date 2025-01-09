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
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Banner from "./banner";

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
      <List className="mt-16">
        {navList.map((item, index) => (
          <ListItem key={index} disablePadding className="mt-4">
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Banner />
      <nav className="w-full flex justify-between p-7 bg-white shadow-sm">
        <div>
          <button onClick={toggleDrawer(true)}>
            <MenuIcon />
          </button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
        <div>
          <span className="logo font-bold text-2xl">Shopily</span>
        </div>
        <div>
          <button>
            <LocalMallOutlinedIcon className="text-3xl" />
          </button>
        </div>
      </nav>
    </>
  );
}
