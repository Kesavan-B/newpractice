// import { Button, TextField } from "@mui/material";
// import React, { useState } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { AiFillDelete, AiFillEdit } from "react-icons/ai";
// import { Update } from "@mui/icons-material";

// function Newfrm() {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [conPass, setConPass] = useState("");
//   const [store, setStore] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [editIndex, setEditIndex] = useState(0);
//   const [helper, setHelper] = useState({
//     name: "",
//     number: "",
//     email: "",
//     pass: "",
//     conPass: "",
//   });

//   const nameHandler = (e) => {
//     setName(e);
//     if (e.length < 3) {
//       helper.name = "Max 3 words";
//     } else {
//       helper.name = "";
//     }
//   };
//   const numberHandler = (e) => {
//     setNumber(e);
//     if (e.length < 3) {
//       helper.number = "Enter valid Num";
//     } else {
//       helper.number = "";
//     }
//   };
//   const emailHandler = (e) => {
//     setEmail(e);
//     var atpos = e.indexOf("@");
//     var dotpos = e.lastIndexOf(".");
//     if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= e.length) {
//       helper.email = "Enter valid Mail";
//     } else {
//       helper.email = "";
//     }
//   };
//   const passHandler = (e) => {
//     setPass(e);
//     if (e.length < 3) {
//       helper.pass = "Max 3 char";
//     } else {
//       helper.pass = "";
//     }
//   };
//   const conPassHandler = (e) => {
//     setConPass(e);
//     if (e !== pass) {
//       helper.conPass = "Must be same";
//     } else {
//       helper.conPass = "";
//     }
//   };
//   const submit = (e) => {
//     e.preventDefault();

//     let payload = {
//       name: name,
//       number: number,
//       email: email,
//       pass: pass,
//       conPass: conPass,
//     };
//     setStore([...store, payload]);
//     setName("");
//     setNumber("");
//     setEmail("");
//     setPass("");
//     setConPass("");
//     console.log(store);
//   };

//   const deleteItem = (index) => {
//     let del = store.filter((a, i) => i !== index)

//     setStore(del)
//   }

//   const editItem = (index) => {
//     let edt = store.find((e, i) => i == index)
//     setName(edt.name)
//     setNumber(edt.number)
//     setEmail(edt.email)
//     setPass(edt.pass)
//     setConPass(edt.conPass)
//     setEditIndex(index)
//     setIsEdit(true)
//   }

//   const updateHandler = () => {
//     let upd = store.map((u, i) => {
//       if (i === editIndex) {
//         return {
//           name: name,
//           number: number,
//           email: email,
//           pass: pass,
//           conPass: conPass,
//         }
//       }
//     })
//     setStore(upd)
//     setName("")
//     setNumber("")
//     setEmail("")
//     setPass("")
//     setConPass("")
//     setIsEdit(false)
//   }
//   return (
//     <section>
//       <div className="fullfrm">
//         <div>
//           <h1>Form</h1>
//         </div>
//         <div>
//           <div className="fields">
//             <TextField
//               label="Name"
//               size="small"
//               type="text"
//               value={name}
//               onChange={(e) => nameHandler(e.target.value)}
//               helperText={helper.name}
//             />
//           </div>
//           <div className="fields">
//             <TextField
//               label="Number"
//               size="small"
//               type="number"
//               value={number}
//               onChange={(e) => numberHandler(e.target.value)}
//               helperText={helper.number}
//             />
//           </div>
//           <div className="fields">
//             <TextField
//               label="Email"
//               size="small"
//               type="email"
//               value={email}
//               onChange={(e) => emailHandler(e.target.value)}
//               helperText={helper.email}
//             />
//           </div>
//           <div className="fields">
//             <TextField
//               label="Password"
//               size="small"
//               type="password"
//               value={pass}
//               onChange={(e) => passHandler(e.target.value)}
//               helperText={helper.pass}
//             />
//           </div>
//           <div className="fields">
//             <TextField
//               label="Con-Password"
//               size="small"
//               type="password"
//               value={conPass}
//               onChange={(e) => conPassHandler(e.target.value)}
//               helperText={helper.conPass}
//             />
//           </div>
//           <div className="fields">

//             {isEdit ? <Button
//               variant="contained"
//               sx={{ textTransform: "none" }}
//               onClick={(e) => updateHandler(e)}
//             >
//               Update
//             </Button> :
//               <Button
//                 variant="contained"
//                 sx={{ textTransform: "none" }}
//                 onClick={(e) => submit(e)}
//               >
//                 Submit
//               </Button>
//             }

//           </div>
//         </div>
//       </div>
//       <div className="table">
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 650 }} aria-label="caption table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell align="right">Number</TableCell>
//                 <TableCell align="right">Email</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {store.map((a, index) => (
//                 <TableRow key={index}>
//                   <TableCell component="th" scope="row">
//                     {a.name}
//                   </TableCell>
//                   <TableCell align="right">{a.number}</TableCell>
//                   <TableCell align="right">{a.email}</TableCell>

//                   <AiFillEdit onClick={() => editItem(index)} />
//                   <AiFillDelete onClick={() => deleteItem(index)} />
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </section>
//   );
// }

// export default Newfrm;

import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function Newfrm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [store, setstore] = useState([]);
  const [helper, setHelper] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [editIndex, setEditIndex] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [errors, setErrors] = useState({
    name:false,
    email:false,
    pass:false
  })

  const nameHandler = (e) => {
    setName(e);

    if (e.length < 3) {
      helper.name = "max 3 words";
      errors.name=false
    } else {
      helper.name = "";
      errors.name=true
    }
  };
  const emailHandler = (e) => {
    setEmail(e);

    var atpos = e.indexOf("@");
    var dotpos = e.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= e.length) {
      helper.email = "enter valid mail";
      errors.email=false
    } else {
      helper.email = "";
      errors.email=true
    }
  };

  const passHandler = (e) => {
    setPass(e);

    if (e.length < 3) {
      helper.pass = "max 3 words";
      errors.pass=false
    } else {
      helper.pass = "  ";
      errors.pass=true
    }
  };
  const submit = (e) => {
    e.preventDefault();

    let payload = {
      name: name,
      email: email,
      pass: pass,
      errors:errors
    };
    setstore([...store, payload]);
    setName("");
    setEmail("");
    setPass("");
    
  };
  const deleteItem = (index) => {
    let delt = store.filter((d, i) => i !== index);

    setstore(delt);
  };
  const editItem = (index) => {
    let edti = store.find((e, i) => i == index);

    setName(edti.name);
    setEmail(edti.email);
    setPass(edti.pass);
    setEditIndex(index);
    setIsEdit(true);
    
  };
  const updateHandler = (e) => {
    let upp = store.map((u, i) => {
      if (i == editIndex) {
        return {
          name: name,
          email: email,
          pass: pass,
        };
      } else {
      }
    });
    setstore(upp);
    setName("");
    setEmail("");
    setPass("");
    setIsEdit(false);
  };
  useEffect(() => {
  }, [errors.name,errors.email,errors.pass])
  
  return (
    <div>
      <h5>form</h5>
      <div>
        <div className="fields">
          <TextField
            label="Name"
            type="text"
            size="small"
            helperText={helper.name}
            value={name}
            onChange={(e) => nameHandler(e.target.value)}
          />
        </div>
        <div className="fields">
          <TextField
            label="Email"
            type="email"
            size="small"
            helperText={helper.email}
            value={email}
            onChange={(e) => emailHandler(e.target.value)}
          />
        </div>
        <div className="fields">
          <TextField
            label="Pass"
            type="password"
            size="small"
            helperText={helper.pass}
            value={pass}
            onChange={(e) => passHandler(e.target.value)}
          />
        </div>
        <div className="fields">
          {isEdit ? (
            <Button variant="contained" onClick={(e) => updateHandler(e)}>
              Update
            </Button>
          ) : (
            <Button variant="contained" onClick={(e) => submit(e)}  disabled={!errors.name || !errors.email || !errors.pass}>
              submit
            </Button>
          )}
        </div>
      </div>
      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Pass</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {store.map((a, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {a.name}
                  </TableCell>
                  <TableCell align="right">{a.email}</TableCell>
                  <TableCell align="right">{a.pass}</TableCell>
                  <AiFillEdit onClick={() => editItem(index)} />
                  <AiFillDelete onClick={() => deleteItem(index)} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Newfrm;
