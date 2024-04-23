import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
function Menu() {
  return (
    <div className='menu-options'>
       <Link to="/contract">CONTRACT</Link>
       <Link to="/point">POINT</Link>
       <Link to="/invoice">INVOICE</Link>
       <div style={{display:'flex', justifyContent:'flex-end', width:'75vw'}}>
        <Link to="/login">LOGOUT</Link>
       </div>
     </div>
  )
}

export default Menu;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Box, Typography, Button } from '@mui/material';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme: { spacing: (arg0: number) => any; }) => ({
//   menuOptions: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: theme.spacing(2),
//     backgroundColor: '#f5f5f5',
//   },
// }));

// function Menu() {
//   const classes = useStyles();

//   return (
//     <Box className={classes.menuOptions}>
//       <div>
//         <Typography variant="h6">
//           <Link to="/contract" className="link">
//             CONTRACT
//           </Link>
//         </Typography>
//         <Typography variant="h6">
//           <Link to="/point" className="link">
//             POINT
//           </Link>
//         </Typography>
//         <Typography variant="h6">
//           <Link to="/invoice" className="link">
//             INVOICE
//           </Link>
//         </Typography>
//       </div>
//       <Button variant="contained" color="secondary" href="">
//         LOGOUT
//       </Button>
//     </Box>
//   );
// }

// export default Menu;
