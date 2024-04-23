import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='text'> &copy; by Linde Engineering</div>
    </div>
  )
}

export default Footer;


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