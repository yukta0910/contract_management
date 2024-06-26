// import { Fab } from "@mui/material";
// import React from "react";
// import { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';

// function AddContract(props:any) {
//   const [enteredName, setEnteredName] = useState("");
//   const [enteredValue, setEnteredValue] = useState("");

//   const formSubmitHandler = (e: any) => {
//     e.preventDefault();
//     const addPoint = { 
//       Name: enteredName, 
//       Value: enteredValue 
//     };

//     props.onSaveHandler(addPoint);
//     setEnteredName('');
//     setEnteredValue('')
//   };

//   const NameChangeHandler = (e: any) => {
//     setEnteredName(e.target.value);
//   };
//   const ValueChangeHandler = (e: any) => {
//     setEnteredValue(e.target.value);
//   };

//   return (
//     <div>
//       <form action="" onSubmit={formSubmitHandler}>
//         <label htmlFor="">Point Name</label>
//         <input type="text" onChange={NameChangeHandler} value={enteredName} required/>
//         <br />
//         <label htmlFor="">Value</label>
//         <input type="number" onChange={ValueChangeHandler} value={enteredValue} required/>
//         <br />
//         <button type="submit">Save</button>
        
//       </form>
//     </div>
//   );
// }

// export default AddContract;

// // import React, { useState } from "react";
// // import { TextField, Button, Box } from "@mui/material";

// // function AddContract(props:any) {
// //   const [enteredName, setEnteredName] = useState("");
// //   const [enteredValue, setEnteredValue] = useState("");

// //   const formSubmitHandler = (e:any) => {
// //     e.preventDefault();
// //     const addPoint = {
// //       Name: enteredName,
// //       Value: enteredValue
// //     };

// //     props.onSaveHandler(addPoint);
// //     setEnteredName('');
// //     setEnteredValue('');
// //   };

// //   const NameChangeHandler = (e:any) => {
// //     setEnteredName(e.target.value);
// //   };
// //   const ValueChangeHandler = (e:any) => {
// //     setEnteredValue(e.target.value);
// //   };

// //   return (
// //     <Box
// //       display="flex"
// //       justifyContent="center"
// //       alignItems="center"
// //       height="400px"
// //       width= "500px"
// //       bgcolor={"rgb(0, 85, 145)"}
// //     >
// //       {/* <button>icon</button> */}
// //       <form onSubmit={formSubmitHandler}>

// //         <TextField
// //           label="Point Name"
// //           variant="outlined"
// //           onChange={NameChangeHandler}
// //           value={enteredName}
// //           required
// //         />
// //         <br />
// //         <TextField
        
// //           label="Value"
// //           variant="outlined"
// //           type="number"
// //           onChange={ValueChangeHandler}
// //           value={enteredValue}
// //           required
// //         />
// //         <br />
// //         <Button type="submit" variant="contained">Save</Button>
// //       </form>
// //     </Box>
// //   );
// // }

// // export default AddContract;


import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

function AddContract(props: any) {
  const [open, setOpen] = useState(false);
  const [enteredName, setEnteredName] = useState('');
  const [enteredValue, setEnteredValue] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const addPoint = {
      Name: enteredName,
      Value: enteredValue
    };

    props.onSaveHandler(addPoint);
    setEnteredName('');
    setEnteredValue('');
    handleClose();
  };

  const NameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(e.target.value);
  };

  const ValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  return (
    <div>
      <IconButton color="primary" onClick={handleOpen}>
        <AddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} onKeyUp={handleKeyUp} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Point</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="point-name"
            label="Point Name"
            type="text"
            fullWidth
            value={enteredName}
            onChange={NameChangeHandler}
            required
          />
          <TextField
            margin="dense"
            id="value"
            label="Value"
            type="number"
            fullWidth
            value={enteredValue}
            onChange={ValueChangeHandler}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={formSubmitHandler}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddContract;
