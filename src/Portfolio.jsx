import { useState, useMemo, useEffect } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import {
  NavLink,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  AppBar,
  Typography,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "./Font.css";

// 🧩 React Icons
import { TbLayoutDashboard, TbFileCertificate } from "react-icons/tb";
import { SiMyspace } from "react-icons/si";
import { FaRegFolderOpen } from "react-icons/fa";

const drawerwidth = 240;

const navitems = [
  {
    segment: "dashboard",
    title: "PORTFOLIO",
    icon: TbLayoutDashboard,
    path: "/",
  },
  {
    segment: "About",
    title: "ABOUT",
    icon: SiMyspace,
    path: "/about",
  },
  {
    segment: "certify",
    title: "CERTIFICATE",
    icon: TbFileCertificate,
    path: "/certif",
  },
  {
    segment: "Projects",
    title: "PROJECTS",
    icon: FaRegFolderOpen,
    path: "/project",
  },
];

function Portfolio() {
  const location = useLocation();
  const [currenttitle, setCurrenttitle] = useState("My Portfolio");
  const [mobileopen, setMobileopen] = useState(false);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    const match = navitems.find((item) => item.path === location.pathname);
    setCurrenttitle(match?.title || "Profile");
  }, [location.pathname]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
                background: {
                  default: "#121212",
                  paper: "#181818",
                },
                text: {
                  primary: "#fff",
                  secondary: "#aaa",
                },
                primary: { main: "#90caf9" },
              }
            : {
                background: {
                  default: "#f5f5f5",
                  paper: "#ffffff",
                },
                text: {
                  primary: "#111",
                  secondary: "#555",
                },
                primary: { main: "#1976d2" },
              }),
        },
        typography: {
          fontFamily: "Inter, sans-serif",
        },
      }),
    [mode]
  );

  const togglebar = () => setMobileopen(!mobileopen);

  // 🧭 Drawer content
  const drawer = (
    <div
      style={{
        backgroundColor: theme.palette.background.paper,
        height: "100%",
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        <Link to="/view_image" style={{ textDecoration: "none" }}>
          <img
            src="profile_pic.jpg"
            alt="404 Not Found"
            className="size-40 md:mt-5 cursor-pointer border-2 border-gray-500"
          />
        </Link>

        {navitems.map(({ title, icon: Icon, path }) => (
          <ListItem
            key={title}
            component={NavLink}
            to={path}
            className={({ isActive }) => (isActive ? "active" : "")}
            sx={{
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.background.default,
              fontWeight: "bold",
              "&:hover": {
                backgroundColor:
                  mode === "dark" ? "#232323" : "rgba(0,0,0,0.04)",
              },
              "&.active": {
                backgroundColor:
                  mode === "dark" ? "#181818" : "rgba(25,118,210,0.1)",
                boxShadow:
                  mode === "dark"
                    ? "inset 0px 2px 41px -5px rgba(0,0,0,0.81)"
                    : "inset 0px 2px 41px -5px rgba(0,0,0,0.05)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: theme.palette.text.primary,
                minWidth: 40,
                transition: "color 0.3s ease, transform 0.2s ease",
                "&:hover": {
                  color: theme.palette.primary.main,
                  transform: "scale(1.15)",
                },
                "&.active": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {/* 🎨 Icon auto adjusts color based on theme */}
              <Icon
                size={22}
                color={
                  mode === "dark"
                    ? theme.palette.text.primary
                    : theme.palette.text.primary
                }
              />
            </ListItemIcon>
            <ListItemText
              primary={title}
              sx={{
                "& .MuiTypography-root": { color: "inherit" },
              }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundImage:
            mode === "dark"
              ? "linear-gradient(to right, #181818 50%, #111827 100%)"
              : "linear-gradient(to right, #ffffff 50%, #e0e0e0 100%)",
          color: theme.palette.text.primary,
          transition: "background-color 0.4s ease, color 0.4s ease",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={togglebar}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            sx={{
              color: mode === "dark" ? "#90caf9" : "#1976d2",
              fontFamily: "Henny Penny, system-ui",
              fontWeight: "bold",
              fontSize: 20,
              flexGrow: 1,
            }}
          >
            {currenttitle}
          </Typography>

          {/* 🌗 Theme Toggle Button */}
          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              ml: 2,
              fontFamily: "sans-serif",
              color: theme.palette.text.primary,
            }}
            className="font1 text-2xl"
          >
            <input
              type="image"
              src="profile_pic.jpg"
              alt=""
              className="size-8 rounded-full"
            />{" "}
            Prince Aryan Singh
          </Typography>
        </Toolbar>
      </AppBar>

      {/* 📱 Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileopen}
        onClose={togglebar}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: drawerwidth },
        }}
      >
        {drawer}
      </Drawer>

      {/* 💻 Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerwidth,
            boxSizing: "border-box",
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ml: { md: `${drawerwidth}px` },
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          transition: "background-color 0.4s ease, color 0.4s ease",
        }}
      >
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default Portfolio;
