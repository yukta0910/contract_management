// import React, { useState } from 'react'
// import { contracts } from './configuration';

// function Contract() {

//   return (
//     <div>
//       <h1>contract list</h1>
          
//       <ul>
//         {contracts.map((contract) => (
//           <li key={contract.name}>
//             <strong>{contract.name}</strong>
//             <br />
//             Start Date:{contract.startDate}
//             <br />
//             End Date:{contract.endDate}
//             <hr />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Contract


// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import { contracts } from './configuration';

// function Contract() {
//   return (
//     <div>
//       <h1>Contract List</h1>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>Name</strong></TableCell>
//               <TableCell><strong>Start Date</strong></TableCell>
//               <TableCell><strong>End Date</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {contracts.map((contract) => (
//               <TableRow key={contract.name}>
//                 <TableCell>{contract.name}</TableCell>
//                 <TableCell>{contract.startDate}</TableCell>
//                 <TableCell>{contract.endDate}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// export default Contract;

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { contracts } from './configuration';

function Contract() {
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <Typography variant="h5" align="center" gutterBottom>Contract List</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#f0f0f0' }}>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Start Date</strong></TableCell>
              <TableCell><strong>End Date</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contracts.map((contract, index) => (
              <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                <TableCell>{contract.name}</TableCell>
                <TableCell>{contract.startDate}</TableCell>
                <TableCell>{contract.endDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Contract;

