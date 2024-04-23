// import React from 'react'
// import './Footer.css'
// function Footer() {
//   return (
//     <div className='footer'>
//       <div className='text'> &copy; by Linde Engineering</div>
//     </div>
//   )
// }

// export default Footer;

// import React from 'react';
// import { Grid, Box, makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     backgroundColor: 'lightgrey', // Background color for the footer
//     color: 'white', // Text color for the footer text
//     padding: theme.spacing(2), // Add padding for spacing
//     // marginTop: 'auto', // Push the footer to the bottom of the page
//     position: 'fixed',
//     bottom: 0,
//     left: 0,
//     width: '100%',
//   },
// }));

// function Footer() {
//   const classes = useStyles();

//   return (
//     <Box component="footer" className={classes.footer}>
//       <Grid container justifyContent="center">
//         <Grid item>
//           <div>&copy; by Linde Engineering</div>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default Footer;


import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents"  />
      <BottomNavigationAction label="Favorites"  />
      <BottomNavigationAction label="Nearby"  />
    </BottomNavigation>
  );
}

export default BottomNav;





// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="rgb(0, 85, 145)">
//       {'Copyright © '}
//       <Link href="https://linde.com/">
//         LINDE ENGINEERING INDIA
//       </Link>
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function StickyFooter() {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           // minHeight: '100vh',
//         }}
//       >
//         {/* <CssBaseline /> */}
//         {/* <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm"> */}
//           {/* <Typography variant="h2" component="h1" gutterBottom>
//             Sticky footer
//           </Typography> */}
//           {/* <Typography variant="h5" component="h2" gutterBottom>
//             {'Pin a footer to the bottom of the viewport.'}
//             {'The footer will move as the main element of the page grows.'}
//           </Typography> */}
//           {/* <Typography variant="body1">Sticky footer placeholder.</Typography> */}
//         {/* </Container> */}
//         <Box
//           component="footer"
//           sx={{
//             py: 3,
//             px: 2,
//             mt: 'auto',
//             backgroundColor: (theme) =>
//               theme.palette.mode === 'light'
//                 ? theme.palette.grey[200]
//                 : theme.palette.grey[800],
//           }}
//         >
//           <Container maxWidth="sm">
//             {/* <Typography variant="body1">
//               My sticky footer can be found here.
//             </Typography> */}
//             <Copyright />
//           </Container>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }