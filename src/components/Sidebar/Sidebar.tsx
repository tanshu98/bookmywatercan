import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "../../assets/Images/logo.png";
import AppleIcon from '@mui/icons-material/Apple';
import googlePlayIcon from '../../assets/Images/google-play 1.png'

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  // window?: () => Window;
}

export default function Sidebar(props: Props) {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <Box
      sx={{
        backgroundColor: "#05dfee",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Toolbar />
      <Box sx={{marginBottom: '10px'}} component={"img"} src={Image} />

      <List sx={{marginTop: '20px'}}>
        {[
          "Home",
          "Product",
          "About Us",
          "Galary",
          "Team",
          "Testimonials",
          "Blog",
          "Contact Us",
        ].map((text, index) => (
          <>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText
                  sx={{ "&:hover": { backgroundColor: "#1c97fd" }, padding: '8px 20px', color: '#fff' }}
                  primary={text}
                />
              </ListItemButton>
            </ListItem>
            <Divider
              orientation="horizontal"
              sx={{ color: "green", width: "100px" }}
            />
            <Divider
              orientation="horizontal"
              sx={{ color: "#fff", width: "100%" }}
            />
          </>
        ))}
      </List>
      <Box sx={{display: 'flex', gap: '12px', flexDirection: 'column', marginBottom: '20px', marginTop: '20px'}}>
        {/* Apple Logo */}
        <Box sx={{display: 'flex',gap: '5px',backgroundColor: '#fff', padding: '10px', borderRadius: '20px'}}>
          <Box >
            <AppleIcon sx={{width: '56px', height: '56px'}} />
          </Box>
          <Box>
            <Typography sx={{fontFamily: 'Inter', fontWeight: '500', color: '#A2A3A5', fontSize: '15px'}}>Download on the</Typography>
            <Typography sx={{color: '#161A1D', fontSize: '22px', fontWeight: '600', fontFamily: 'Inter'}}>App Store</Typography>
          </Box>
        </Box>
        {/* Google Pay Logo */}
        <Box sx={{display: 'flex',gap: '5px',backgroundColor: '#fff', padding: '10px', borderRadius: '20px'}}>
          <Box >
            <img src={googlePlayIcon} width={56} height={56} />
          </Box>
          <Box>
            <Typography sx={{fontFamily: 'Inter', fontWeight: '500', color: '#A2A3A5', fontSize: '15px'}}>Download on the</Typography>
            <Typography sx={{color: '#161A1D', fontSize: '22px', fontWeight: '600', fontFamily: 'Inter'}}>App Store</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  // Remove this const when copying and pasting into your project.
  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar 
        elevation={0}
        sx={{
         mt: 1,
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'transparent',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: '#1C97FD' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
