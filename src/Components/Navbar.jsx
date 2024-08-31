import React, { useState } from "react";
import { HashLink } from "react-router-hash-link"; // Importez HashLink
import Logo from "../Assets/logo-ud.jpg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Accueil", icon: <HomeIcon />, path: "/#home" },
    { text: "Pourquoi nous appeler", icon: <InfoIcon />, path: "/#why" },
    { text: "Nos tarifs", icon: <CommentRoundedIcon />, path: "/#contact" },
    { text: "Avis", icon: <CommentRoundedIcon />, path: "/#why" },
    { text: "Contact", icon: <PhoneRoundedIcon />, path: "/#contact" },
  ];

  return (
    <nav>
      <div className="nav-top">
        <div className="nav-logo-container">
          <HashLink to="/#home"> {/* Utilisez HashLink pour un défilement fluide */}
            <img src={Logo} alt="Depanne-moi Logo" className="nav-logo" style={{ width: "120px" }} />
          </HashLink>
        </div>

        <div className="nav-contact-container">
          <div className="nav-contact">
            07.81.03.48.36
          </div>
        </div>

        <div className="nav-urgence-container">
          <div className="nav-urgence">
            Urgence dépannage 7j/7 24h/24
          </div>
        </div>
      </div>

      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <HashLink key={item.text} to={item.path}>
            {item.text}
          </HashLink>
        ))}
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={HashLink} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
