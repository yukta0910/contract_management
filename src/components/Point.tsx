// // import React from "react";
// // import { useState } from "react";
// // import AddContract from "./AddContract";
// // import { contracts } from "./configuration";

// // function Point() {
// //   const [showForm, setShowForm] = useState(false);
// //   const [initialId, setId] = useState(1);
// //   const [newPoint, setNewPoint] = useState<{ pointName: string; value: number }[]>([]);


// //   const add_contract = () => {
// //     setShowForm(!showForm);
// //   };

// //   const savedDataHandler = (newEntry: { Name: string; Value: number }) => {
// //     const newData = {
// //       // ...newEntry,
// //       pointName: newEntry.Name,
// //       value: newEntry.Value
// //       // id: Math.random()
// //     };
// //     console.log(newData);

// //     // setNewPoint((prevPoints: any) => {
// //     //   return [newEntry, ...prevPoints];
// //     // });
// //     // console.log(setNewPoint);

// //     // const addObj = (objValue: any) => {
// //     //   setNewPoint([objValue, ...newPoint]);
// //     // };

// //     // let arr: { pointName: string; value: number }[] = [...newPoint];
// //     // let temp = {
// //     //   pointName: newData.Name,
// //     //   value: newData.Value,
// //     // };
// //     // arr.push(temp);
// //     setNewPoint((prevPoints)=>[...prevPoints, newData]);
// //     console.log(newEntry)
// //     // console.log(arr);
// //   };

// //   const handleContractChange = (event: any) => {
// //     setId(parseInt(event.target.value))
// //   };

// //   const selectedContract = contracts.find(
// //     (contract) => contract.id === initialId
// //   );

// //   const pointItems = selectedContract?.points?.map((point, index) => (
// //     <li key={index}>
// //       Point Name : {point.pointName}
// //       <br />
// //       Value : {point.value}
// //       <hr />
// //     </li>
// //   ));

// //   // setNewPoint((prevPoints:any)=>[newEntry, ...prevPoints])
// //   // console.log(setNewPoint)

// //   return (
// //     <div>
// //       <h1>points</h1>
// //       <label htmlFor="">Contracts </label>
// //       <select name="contract_selection" onChange={handleContractChange}>
// //         {contracts.map((i, index) => (
// //           <option
// //             value={i.id}
// //             key={index}
// //             onClick={() => {
// //               setId(i.id);
// //             }}
// //           >
// //             {i.name}
// //           </option>
// //         ))}
// //       </select>
// //       <button onClick={add_contract}>+</button>

// //       {showForm && <AddContract onSaveHandler={savedDataHandler} />}
// //       <ul>
// //         <div>{pointItems}</div>
// //       </ul>
// //     </div>
// //   );
// // }

// // export default Point;



// import React, { useState } from "react";
// import AddContract from "./AddContract";
// import { contracts } from "./configuration";

// function Point() {
//   const [showForm, setShowForm] = useState(false);
//   const [initialId, setId] = useState(1);
//   const [newPoints, setNewPoints] = useState<{  pointName: string; value: number }[]>([]);
//   console.log(newPoints)
//   const add_contract = () => {
//     setShowForm(!showForm);
//   };

//   const savedDataHandler = (newEntry: { Name: string; Value: number }) => {
//     const newData = {
//       pointName: newEntry.Name,
//       value: newEntry.Value
//     };
//     setNewPoints(prevPoints => [...prevPoints, newData]);
//   };

//   const handleContractChange = (event: any) => {
//     setId(parseInt(event.target.value));
//   };

//   // Merge existing points with newly added points for the selected contract
  
//   const mergedPoints = contracts.map(contract => {
//     // const selectedContract = contracts.find((contract) => contract.id === initialId)
//     // console.log(selectedContract)
//     const existingPoints = contract.points.filter(() => initialId === contract.id);
//     console.log(existingPoints)
 
//   const newPointsForContract = newPoints.filter(() => initialId === contract.id);
//   console.log(newPointsForContract)
 
//   const allPoints = contract.id===initialId ? existingPoints.concat(newPointsForContract) : existingPoints 
//   console.log(allPoints)
    

//     const pointsItems = allPoints.map((point, index) => (
//       <li key={index}>
//         Point Name: {point.pointName}
//         <br />
//         Value: {point.value}
//         <hr />
//       </li>
//     ));
//     return (
//       <div key={contract.id}>
//         <ul>{pointsItems}</ul>
//       </div>
//     );
//   });

//   return (
//     <div>
//       <h1>Points</h1>
//       <label htmlFor="contract_selection">Contracts </label>
//       <select name="contract_selection" onChange={handleContractChange}>
//         {contracts.map(contract => (
//           <option key={contract.id} value={contract.id}>
//             {contract.name}
//           </option>
//         ))}
//       </select>
//       <button onClick={add_contract}>Add Point</button>
//       {showForm && <AddContract onSaveHandler={savedDataHandler} />}
//       {mergedPoints}
//     </div>
//   );
// }

// export default Point;


import { useEffect, useState } from 'react';
import { contracts } from './configuration';
import AddContract from './AddContract';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function Point() {
    const [showForm, setShowForm] = useState(false);
    const [initialId, setId] = useState(1);
    const [newPoints, setNewPoints] = useState<{ pointName: string; value: number }[]>([]);

    const add_contract = () => {
        setShowForm(!showForm);
    };

    const savedDataHandler = (newEntry: { Name: string; Value: number }) => {
        const newData = {
            // contractId: initialId,
            pointName: newEntry.Name,
            value: newEntry.Value,
        };
        setNewPoints(prevPoints => [...prevPoints, newData]);
        console.log(newPoints);
    };

    const handleContractChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setId(parseInt(event.target.value));
    };

    useEffect(() => {
        const selectedContracts = contracts.filter(contract => contract.id === initialId);
        selectedContracts && setNewPoints(selectedContracts[0].points);
    }, [initialId]);
    // Merge existing points with newly added points for the selected contract

    return (
        <div>
            <h1>Points</h1>
            <label htmlFor="contract_selection">Contracts </label>
            <select name="contract_selection" onChange={handleContractChange}>
                {contracts.map(contract => (
                    <option key={contract.id} value={contract.id}>
                        {contract.name}
                    </option>
                ))}
            </select>
            {/* <button onClick={add_contract}>Add Point</button> */}
            <Fab size="small" color="primary" onClick={add_contract} aria-label="add">
  <AddIcon />
</Fab>
            {showForm && <AddContract onSaveHandler={savedDataHandler} />}
            {newPoints.length > 0 &&
                newPoints.map((point, index) => (
                    <div key={index}>
                        <ul>
                            <li key={index}>
                                Point Name: {point.pointName}
                                <br />
                                Value: {point.value}
                                <hr />
                            </li>
                        </ul>
                    </div>
                ))}
        </div>
    );
}

export default Point;