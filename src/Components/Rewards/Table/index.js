import { Grid } from "@mui/material";
import React, { useState } from "react";
import Pagination from "../../Pagination/Pagination";

import { useSelector } from "react-redux";
import moment from "moment";
import { Link, useLocation } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import {updateReceiptStatus} from "../../../actions/receipts"
import {useDispatch} from "react-redux"
import "./styles.css"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height:"70vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Table = ({ value }) => {
  const [option, setOption] = useState(false);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const query = useQuery();
  const page = query.get("page") || 1;
  const dispatch = useDispatch()
  const handleOpen = (imageSrc) => {
    setOpen(true) 
    setImage(imageSrc)

  };
  const handleClose = () => setOpen(false);


  // const {receipt} = useSelector(state => state.receipts)
  const handleOption = (e) => {
    console.log(e.target.checked);
    setOption(e.target.checked);
  };
  const handleChange = (e) => {
    console.log(e.target.checked);
    setOption(e.target.checked);
  };
  const handleReceiptStatus = (id) => {
    //   console.log(id)
    // const tReceipt = value.find(val => val._id === id )
    // console.log(tReceipt)

    // tReceipt.status = "complete"
    // tReceipt.point = 25
    dispatch(updateReceiptStatus(id))

  };
  console.log("================receipts===============");
  // console.log(receipt)
  return (
    <Grid sm={12}>
      <Grid container sm={6} alignItems="center">
        <Grid>
          <Checkbox {...label} onChange={handleChange} />
        </Grid>
        <Grid>
          <div class="input-group">
            <select
              class="custom-select"
              id="inputGroupSelect01"
              disabled={!option}
            >
              <option selected>Please Choose an Option...</option>
              <option value="2">Set To Completed</option>
              <option value="3">Set To Processing</option>
            </select>
          </div>
        </Grid>
        <Grid ml={3}>
          <Link to="#" onChange={handleOption} className="actionBtn">
            Go
          </Link>
        </Grid>
      </Grid>
      <table style={{ width: "100%" }}>
        <tr>
          <th></th>
          <th>S/N</th>
          <th>Receipt</th>
          <th>Date</th>
          <th>User</th>
          <th>Status</th>
          <th>Point</th>
          <th>info</th>
          <th>Action</th>
        </tr>
        {value?.map((val, index) => (
          <tr>
            <td>
              <Checkbox {...label} onChange={handleChange} />
            </td>
            <td>{index + 1}</td>
            <td>
              <img
                onClick={() => handleOpen(val.selectedFiles)}
                style={{ width: "50px" }}
                src={val.selectedFiles}
                alt="receipt"
              />
            </td>
            <td>{moment(val.createdAt).format("MMM Do YYYY")}</td>
            <td>{val.user}</td>
            <td>{val.status}</td>
            <td>{val.point}</td>
            <td> - </td>
            <td>
                <Grid container >
                <Button className='viewBtn btn' onClick={() => handleOpen(val.selectedFiles)} >View</Button>
                <Button className={val.status === "processing" ? "btn viewStatus" : ""} onClick={() => handleReceiptStatus(val._id)} disabled={val.status === "processing" ? false : true}>{val.status === "processing" ? "Set To Complete" : "Completed"}</Button>
                </Grid>
                
            </td>
            <Grid xs={9} md={9}>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} className="modal">
                  <Grid container justifyContent="space-between">
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      View Receipt
                    </Typography>
                    <CloseIcon
                      style={{ cursor: "pointer" }}
                      onClick={handleClose}
                    />
                  </Grid>
                  <Grid className="modal-pic" container justifyContent="center" alignItems='center'>
                    <img  style={{ width:"100%"}} src={image} alt="receipt" />

                  </Grid>
                </Box>
              </Modal>
            </Grid>
          </tr>
        ))}
      </table>

      <Grid container justifyContent="flex-end">
        <Grid container md={4} justifyContent="flex-end">
          <Paper elevation={6} className="pagination">
            <Pagination page={page} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Table;
