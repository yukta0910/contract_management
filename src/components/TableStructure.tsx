// import React from 'react';
// import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// function InvoiceTable({ data, total }) {
//   return (
//     <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
//       <Typography variant="h4" align="center" gutterBottom>{data.heading}</Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               {data.headers.map((header, index) => (
//                 <TableCell key={index}><strong>{header}</strong></TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.rows.map((row, index) => (
//               <TableRow key={index}>
//                 {row.map((cell, index) => (
//                   <TableCell key={index}>{cell}</TableCell>
//                 ))}
//               </TableRow>
//             ))}
//             {total && (
//               <TableRow>
//                 <TableCell colSpan={data.headers.length} align="right"><strong>Total: {total}</strong></TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// export default InvoiceTable;
import React from 'react'

function TableStructure() {
  return (
    <div>
      
    </div>
  )
}

export default TableStructure
