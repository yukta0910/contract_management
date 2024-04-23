// import React, { useState } from "react";
// import { contracts } from "./configuration";

// function InVoice() {
//   const TotalValue = contracts.map((contract, index) => {
//     let total = 0;
//     contract.points.map((point) => {
//       total += point.value;
//     });
//     return (
//       <li key={index}>
//         <strong>{contract.name} </strong>
//         <br />
//         Total Value: {total}
//         <hr />
//       </li>
//     );
//   });

//   return (
//     <div>
//       <h1>invoice</h1>
//       <ul>{TotalValue}</ul>
//     </div>
//   );
// }

// export default InVoice;


// import React from 'react';
// import { Typography, Paper, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
// import { contracts } from './configuration';

// function InVoice() {
//   const totalValues = contracts.map((contract, index) => {
//     let total = 0;
//     contract.points.map((point) => {
//       total += point.value;
//     });
//     return (
//       <Box key={index} marginBottom={2}>
//         <Paper elevation={3}>
//           <List>
//             <ListItem alignItems="flex-start">
//               <ListItemText
//                 primary={<Typography variant="h6">{contract.name}</Typography>}
//                 secondary={`Total Value: ${total}`}
//               />
//             </ListItem>
//           </List>
//         </Paper>
//       </Box>
//     );
//   });

//   return (
//     <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
//       <Typography variant="h4" align="center" gutterBottom>Invoice</Typography>
//       {totalValues}
//     </div>
//   );
// }

// export default InVoice;


import React from 'react';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { contracts } from './configuration';

function InVoice() {
  // Calculate total value for each contract and total invoice value
  const contractValues = contracts.map(contract => {
    let total = 0;
    contract.points.map(point => {
      total += point.value;
    });
    return { name: contract.name, total };
  });


  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <Typography variant="h5" align="center" gutterBottom>Invoice List</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#f0f0f0' }}>
              <TableCell><strong>Contract Name</strong></TableCell>
              <TableCell><strong>Total Value</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contractValues.map((contract, index) => (
              <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                <TableCell>{contract.name}</TableCell>
                <TableCell >{contract.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          
        </Table>
      </TableContainer>
    </div>
  );
}

export default InVoice;
