// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Menu.css'
// function Menu() {
//   return (
//     <div className='menu-options'>
//        <Link to="/contract">CONTRACT</Link>
//        <Link to="/point">POINT</Link>
//        <Link to="/invoice">INVOICE</Link>
//        <div style={{display:'flex', justifyContent:'flex-end', width:'75vw'}}>
//         <Link to="/login">LOGOUT</Link>
//        </div>
//      </div>
//   )
// }

// export default Menu;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme: any) => ({
//   menuOptions: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '75vw',
//   },
// }));

// function Menu() {
//   const classes = useStyles();

//   return (
//     <AppBar position="static">
//       <Toolbar className={classes.menuOptions}>
//         <Typography variant="h6">
//           <Link to="/contract" style={{ color: 'inherit', textDecoration: 'none' }}>CONTRACT</Link>
//         </Typography>
//         <Typography variant="h6">
//           <Link to="/point" style={{ color: 'inherit', textDecoration: 'none' }}>POINT</Link>
//         </Typography>
//         <Typography variant="h6">
//           <Link to="/invoice" style={{ color: 'inherit', textDecoration: 'none' }}>INVOICE</Link>
//         </Typography>
//         <Button color="inherit">
//           <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>LOGOUT</Link>
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Menu;


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

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  menuOptions: {
    width: '100vw',
  },
  appBar: {
    backgroundColor: 'rgb(157, 193, 224)'
  },
  tabs:{
    backgroundColor: 'rgb(0, 85, 145)'
  },
  tab: {
    color: 'white', // Change the text color
    '&:hover': {
      color: 'rgb(0, 85, 145)', // Change the text color on hover
    },
},
}));

function Menu() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.menuOptions}>
        <Tabs value={value} onChange={handleChange} aria-label="Menu tabs" classes={{ indicator: classes.tabs }}>
          <Tab label="CONTRACT" component={Link} to="/contract" className={classes.tab}/>
          <Tab label="POINT" component={Link} to="/point" className={classes.tab}/>
          <Tab label="INVOICE" component={Link} to="/invoice" className={classes.tab} />
          <Tab label="LOGOUT" component={Link} to="/login" className={classes.tab}/>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Menu;
