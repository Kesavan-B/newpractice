import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export const Formvalids = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [store, setstore] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [helper, setHelper] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });

  const nameHandler = (e) => {
    setName(e);
    if (e.length < 3) {
      helper.name = "max 3 words";
      
    } else {
      helper.name = "";
    }
  };
  const numberHandler = (e) => {
    setNumber(e);
    if (e.length < 3) {
      helper.number = "Enter valid number";
    } else {
      helper.number = "";
    }
  };
  const emailHandler = (e) => {
    setEmail(e);
    var atpos = e.indexOf("@");
    var dotpos = e.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= e.length) {
      helper.email = "Enter valid mail";
    } else {
      helper.email = "";
    }
  };
  const passHandler = (e) => {
    setPassword(e);
    if (e.length < 3) {
      helper.password = "max 3 words";
    } else {
      helper.password = "";
    }
  };

  const submit = (e) => {
    e.preventDefault();

    let payload = {
      name: name,
      number: number,
      email: email,
      password: password,
    };

    // axios.post("api url", payload)
    // .then((res)=>{
    //   console.log(res)
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
    setstore([...store, payload]);
    setName("");
    setNumber("");
    setEmail("");
    setPassword("");
  };

  const deleteItem = (index) => {
    // setstore((store) => store.filter((_, i) => i !== index));
    let a = store.filter((b, i) => i !== index);
    setstore(a);
    console.log(a);
    setName("");
    setNumber("");
    setEmail("");
    setPassword("");
  };
  const editItem = (index) => {
    let c = store.find((d, i) => i == index);
    console.log(c);
    setName(c.name);
    setNumber(c.number);
    setEmail(c.email);
    setPassword(c.password);
    setEditIndex(index);
    setIsEdit(true);
  };
  const update = () => {
    console.log(editIndex, name);

    let g = store.map((e, i) => {
      if (i === editIndex) {
        console.log(name);
        return {
          name: name,
          number: number,
          email: email,
          password: password,
        };
      }
    });

    setstore(g);
    setName("");
    setNumber("");
    setEmail("");
    setPassword("");
    setIsEdit(false)
    console.log(store);
  };
  return (
    <div>
      <Box
        className="total-form"
        sx={{ width: "100%", maxWidth: "400px", margin: "0px auto" }}
      >
        <div className="form-control">
          <h2 style={{ textAlign: "center" }}>Form</h2>
          <div className="fields">
            <TextField
              fullWidth
              size="small"
              label="Name"
              type="text"
              value={name}
              helperText={helper.name}
              onChange={(e) => nameHandler(e.target.value)}
            />
          </div>
          <div className="fields">
            <TextField
              fullWidth
              size="small"
              label="Number"
              type="number"
              value={number}
              helperText={helper.number}
              onChange={(e) => numberHandler(e.target.value)}
            />
          </div>
          <div className="fields">
            <TextField
              fullWidth
              size="small"
              label="Email"
              type="email"
              value={email}
              helperText={helper.email}
              onChange={(e) => emailHandler(e.target.value)}
            />
          </div>
          <div className="fields">
            <TextField
              fullWidth
              size="small"
              label="Password"
              type="password"
              value={password}
              helperText={helper.password}
              onChange={(e) => passHandler(e.target.value)}
            />
          </div>
          <div className="field-btn">
            {isEdit ? (
              <Button fullWidth variant="contained" onClick={(e) => update(e)}>
                update
              </Button>
            ) : (
              <Button fullWidth variant="contained" onClick={(e) => submit(e)}>
                submit
              </Button>
            )}
          </div>
        </div>
      </Box>

      <div className="datastore">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Number</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Password</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {store.map((a, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {a.name}
                  </TableCell>
                  <TableCell align="right">{a.number}</TableCell>
                  <TableCell align="right">{a.email}</TableCell>
                  <TableCell align="right">{a.password}</TableCell>
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
};