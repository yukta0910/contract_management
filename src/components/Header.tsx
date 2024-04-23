// import React from "react";
// import "./Header.css";
// import image from "../Linde_logo.png";
// import Menu from "./Menu";


// function Header() {
//   return (
//     <>
//       <div className="header">
//         <div className="heading">CONTRACT MANAGEMENT</div>
//         <div className="logo">
//           <img src={image} alt="" />
//         </div>
//       </div>

//       <Menu />

//     </>
//   );
// }

// export default Header;


// // import React from "react";
// // import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import image from "../Linde_logo.png";
// // import { makeStyles } from "@mui/styles";

// // const useStyles = makeStyles((theme: { spacing: (arg0: number) => any; }) => ({
// //   appBar: {
// //     backgroundColor: "#1976d2",
// //   },
// //   logo: {
// //     flexGrow: 1,
// //     display: "flex",
// //     alignItems: "center",
// //   },
// //   logoImg: {
// //     height: "40px",
// //     marginRight: theme.spacing(1),
// //   },
// //   heading: {
// //     flexGrow: 1,
// //   },
// // }));

// // function Header() {
// //   const classes = useStyles();

// //   return (
// //     <AppBar position="static" className={classes.appBar}>
// //       <Toolbar>
// //         <Typography variant="h6" className={classes.heading}>
// //           CONTRACT MANAGEMENT
// //         </Typography>
// //         <div className={classes.logo}>
// //           <img src={image} alt="" className={classes.logoImg} />
// //         </div>
// //         <IconButton edge="end" color="inherit">
// //           <MenuIcon />
// //         </IconButton>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // }

// // export default Header;


import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import image from '../Linde_logo.png'; // Path to your image file
import Menu from './Menu';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: 'salmon', // Background color for the header
  },
  heading: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
    maxWidth: '100%', // Ensure the image fits its container
    height: 'auto', // Maintain aspect ratio
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h6" className={classes.heading}>
          CONTRACT MANAGEMENT
        </Typography>
        <Box className={classes.logo}>
          <img src={image} alt="Logo" />
        </Box>
      </Toolbar>
      <Menu/>
    </AppBar>
  );
}

export default Header;
