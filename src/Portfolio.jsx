import { NavLink, Link, useLocation, Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';;
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import FolderIcon from '@mui/icons-material/Folder';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MenuIcon from '@mui/icons-material/Menu';
import './Font.css'
import { useEffect, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import View from './assets/View';


const drawerwidth = '240';

const navitems = [
  {
    segment: 'dashboard',
    title: 'PORTFOLIO',
    icon: <DashboardIcon />,
    path: '/'
  },
  {
    segment: 'About',
    title: 'ABOUT',
    icon: <InfoIcon />,
    path: '/about'
  },
  {
    segment: 'certify',
    title: 'CERTIFICATE',
    icon: <FolderIcon />,
    path: '/certif'
  },
  {
    segment: 'Contact',
    title: 'CONTACT',
    icon: <ContactPageIcon />,
    path: '/contact'
  }

];





function Portfolio() {

  const location = useLocation();
  const [currenttitle, setCurrenttitle] = useState('My Portfolio');

  useEffect(() => {
    const match = navitems.find(item => item.path === location.pathname);
    setCurrenttitle(match?.title || 'Profile')

  })


  const [mobileopen, setMobileopen] = useState(false);
  const togglebar = () =>
    setMobileopen(!mobileopen);








  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Link to='/view_image'
          className=''>
          <img
            src="profile_pic.jpg"
            alt="404 Not Found"
            className='size-40 md:mt-5 cursor-pointer box-shadow border-2 border-gray-500'
          />
          <span className='font4 text-teal-500 text-3xl md:ml-4'>Prince Aryan Singh</span>
        </Link>

        {navitems.map(({ segment, title, icon, path }) => (
          <ListItem
            key={title}
            component={NavLink}
            to={path}
            className={({ isActive }) => (isActive ? 'active' : '')}
            sx={{
              color: 'black',
              backgroundColor: 'white',
              fontFamily: 'Poetsen On, sans-serif',
              fontWeight: 'bold',
              fontStyle: 'normal',
              display: 'flex',
              alignItems: 'center',
              '&:hover': {
                backgroundColor: '#673ab7',
                color: 'white',
                '& .MuiListItemIcon-root': {
                  color: 'white',
                },
              },
              '&.active': {
                backgroundColor: '#6a7282',
                color: 'white',
                boxShadow: 'inset 0px 2px 41px -5px rgba(0,0,0,0.81)',
                WebkitBoxShadow: 'inset 0px 2px 41px -5px rgba(0,0,0,0.81)',
                MozBoxShadow: 'inset 0px 2px 41px -5px rgba(0,0,0,0.81)',
                '& .MuiListItemIcon-root': {
                  color: 'white',
                },
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={title}
              sx={{
                '& .MuiTypography-root': {
                  color: 'inherit',
                },
              }}
            />
          </ListItem>
        ))}


      </List>
    </div >
  );

  return (
    <>
      <div>
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundImage: 'linear-gradient(to right,  #ffffff 50%, #111827 50%, #111827 100%)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          }}
        >

          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={togglebar}
              sx={{ mr: 4, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                color: '#673ab7',
                display: 'flex',
                justifyContent: 'space-around',
                fontSize: 20,
                fontFamily: 'Henny Penny, system-ui',
                fontWeight: 'bold',
                fontStyle: 'normal',
              }} >
              {currenttitle}

            </Typography>
          </Toolbar>
          <span
            className='font1 text-2xl md:mt-4'>
            Prince Aryan Singh
          </span>
        </AppBar>
      </div >
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', md: 'block' },
          width: drawerwidth,
          [`& .MuiDrawer-paper`]: { width: drawerwidth, boxSizing: 'border-box' },
        }}
        open>
        {drawer}
      </Drawer>
      <Box component="main" sx={{ p: 3, mt: 8, ml: `${drawerwidth}px` }}>
        <Outlet />
      </Box>


    </>
  )
}

export default Portfolio
