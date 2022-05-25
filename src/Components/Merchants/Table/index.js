import { Grid } from "@mui/material";
import React, { useState } from "react";
import Pagination from "../../Pagination/Pagination";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link, useLocation } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {deleteMerchant} from "../../../actions/index"
import Loader from "../../Loader"

import "./styles.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: "70vh",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(false);
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.auth.isLoading)

  const handleClick = (event, index) => {
    console.log("=============index==================");
    console.log(index);
    setActiveIndex(index);
    setAnchorEl(!anchorEl);
  };

  const handleDelete = (id, type) => {
    console.log(id, type);

   
      console.log("coupon")
      dispatch(deleteMerchant(id))

    
    
  };
  const handleOpen = (imageSrc) => {
    setOpen(true);
    setImage(imageSrc);
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
    console.log(id);
    const tReceipt = value.find((val) => val._id === id);
    console.log(tReceipt);

    tReceipt.status = "complete";
    tReceipt.point = 25;
  };
  console.log("================receipts===============");
  // console.log(receipt)
  return (
    <Grid sm={12}>
      <Grid container alignItems="center" justifyContent='space-between'>
        <Grid container alignItems='center' sm={6}>
         
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

        <Grid  justifyContent='center'>
        <Grid>
            {isLoading ? <Loader/> : ""}
          </Grid>
         
          <Link to="/merchant/add">Add New Merchant</Link>
        </Grid>
      </Grid>
      <table style={{ width: "100%" }}>
        <tr>
          <th></th>
          <th>S/N</th>
          <th>Date</th>
          <th>Merchant Name</th>
          <th>Category</th>
          <th>Point Balance</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Discount</th>
          <th>Action</th>
        </tr>
        {value?.map((val, index) => (
          <tr>
            <td>
              <Checkbox {...label} onChange={handleChange} />
            </td>
            <td>{index + 1}</td>
            
            <td>{moment(val.createdAt).format("MMM Do YYYY")}</td>
            <td>{val.merchantName || val.merchant}</td>
         
            <td>{val.category}</td>
            <td>{val.points}</td>
            <td>{val.phone}</td>
            <td>{val.address}</td>
            <td>{val.discount}</td>
          
            <td style={{ padding: "10px 20px" }}>
                <div style={{ position: "relative" }}>
                  <Button
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    variant="contained"
                    disableElevation
                    onClick={(event) => handleClick(event, index)}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Options
                  </Button>
                  {activeIndex === index ? (
                    <>
                      {anchorEl && (
                        <div
                          id="demo-customized-menu"
                          className="options-menu"
                          onClose={handleClose}
                          style={{
                            background: "white",
                            zIndex: "100",
                            boxShadow: "1px 3px 8px black",
                          }}
                        >
                          <MenuItem disableRipple>
                            <Link to={`/merchant/edit/${val._id}`}>
                              <EditIcon />
                              Edit Merchant
                            </Link>
                          </MenuItem>
                          <MenuItem disableRipple onClick={() => handleDelete(val._id)}>
                            <DeleteIcon />
                            Delete Merchant
                          </MenuItem>
                        </div>
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </div>
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
                  <Grid
                    className="modal-pic"
                    container
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img style={{ width: "100%" }} src={image} alt="receipt" />
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
