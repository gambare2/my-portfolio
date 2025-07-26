import { NavLink, Link, useLocation, Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';;
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import './Font.css'
import { useEffect, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';


const drawerwidth = '240';

const navitems = [
  {
    segment: 'dashboard',
    title: 'PORTFOLIO',
    icon: <img src="dashboard.svg" alt="folderIcon" className='size-5' />,
    path: '/'
  },
  {
    segment: 'About',
    title: 'ABOUT',
    icon: <img src="infoIcon.svg" alt="folderIcon" className='size-5' />,
    path: '/about'
  },
  {
    segment: 'certify',
    title: 'CERTIFICATE',
    icon: <img src="certificate.svg" alt="" className='size-5' />,
    path: '/certif'
  },
  {
    segment: 'Contact',
    title: 'CONTACT',
    icon: <img src="contactPage.svg" alt="folderIcon" className='size-5' />,
    path: '/contact'
  },
  {
    segment: 'Projects',
    title: 'PROJECTS',
    icon: <img src="folderIcon.svg" alt="" className='size-5' />,
    path: '/project'
  }

];





function Portfolio() {
  const location = useLocation();
  const [currenttitle, setCurrenttitle] = useState('My Portfolio');
  const [mobileopen, setMobileopen] = useState(false);

  //  current title
  useEffect(() => {
    const match = navitems.find(item => item.path === location.pathname);
    setCurrenttitle(match?.title || 'Profile');
  }, [location.pathname]);

  //  mobile drawer
  const togglebar = () => setMobileopen(!mobileopen);

  // Drawer content
  const drawer = (
    <div style={{ backgroundColor: '#181818', height: '100%' }}>
      <Toolbar />
      <Divider />
      <List>
        <Link to='/view_image'>
          <img
            src="profile_pic.jpg"
            alt="404 Not Found"
            className='size-40 md:mt-5 cursor-pointer border-2 border-gray-500'
          />
          <span className='font4 text-teal-500 text-3xl md:ml-4'> Prince Aryan Singh</span>
        </Link>

        {navitems.map(({ title, icon, path }) => (
          <ListItem
            key={title}
            component={NavLink}
            to={path}
            className={({ isActive }) => (isActive ? 'active' : '')}
            sx={{
              color: 'white',
              backgroundColor: '#303030',
              fontFamily: 'Poetsen On, sans-serif',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#232323',
              },
              '&.active': {
                backgroundColor: '#181818',
                boxShadow: 'inset 0px 2px 41px -5px rgba(0,0,0,0.81)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={title}
              sx={{ '& .MuiTypography-root': { color: 'inherit' } }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>

      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundImage: 'linear-gradient(to right, #181818  50%, #111827 50%, #111827 100%)',
        }}
      >
        <Toolbar>

          <IconButton
            color="inherit"
            edge="start"
            onClick={togglebar}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            sx={{
              color: '#673ab7',
              fontFamily: 'Henny Penny, system-ui',
              fontWeight: 'bold',
              fontSize: 20,
              flexGrow: 1,
            }}
          >
            {currenttitle}
          </Typography>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'centre ',
              gap: 2,
              fontFamily: 'sans-serif'
            }}
            className="font1 text-2xl"
          >
             <input type="image" src="profile_pic.jpg" alt="" className='size-8 rounded-full' formTarget='_blank' /> Prince Aryan Singh
          </Typography>
        </Toolbar>
      </AppBar>


      <Drawer
        variant="temporary"
        open={mobileopen}
        onClose={togglebar}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: drawerwidth },
        }}
      >
        {drawer}
      </Drawer>


      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerwidth,
            boxSizing: 'border-box',
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
          ml: { md: `${drawerwidth}px` }, // Only shift on desktop
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}
export default Portfolio
