import { Button, Grid, TextField, Box } from "@mui/material";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import Input from "../LoginFiles/Input";
import { updateAdminPassword, createAdmin } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";

import "./styles.css";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const initialState = {
  password: "",
  photo: "",
};
const initialUserState = {
  password: "123456",
  photo: "",
  email: "",
  name: "",
  phone: "",
  address: "",
};

// const initialUserState = {
//   name: "Admin",
//   password: "1234567",
//   email: "admin@wazodeals.com",
//   address: "12, Sanusi Str, Mile 12, Lagos",
//   phone: "01010100100",
//   photo: "123",
// };

const Admin = () => {
  const admin = JSON.parse(localStorage.getItem("profile"));
  const id = admin?.admin?._id;
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [userData, setUserData] = useState(initialUserState);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    
    setFormData({...formData, password:admin?.admin?.passwordText})
    
  }, [])
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleUserChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleUpdatePassword = () => {
    dispatch(updateAdminPassword(id, formData, navigate));
  };
  console.log(userData);

  const handleSubmit = (e) => {
      e.preventDefault()
    console.log(userData);

    dispatch(createAdmin(userData, navigate));
  };
  return (
    <Grid container>
      <Grid sm={4}>
        <FontAwesomeIcon icon={faUserCheck} style={{ fontSize: "100px" }} />
        <Grid my={5}>
          <Button
            style={{
              background: "gray",
              padding: "10px",
              color: "white",
              borderRadius: "5px",
            }}
            onClick={handleOpen}
          >
            Add New User
          </Button>
        </Grid>
      </Grid>
      <Grid sm={8}>
        <h1>
          <span style={{ color: "gray", fontSize: "20px" }}>Welcome, </span>
          {admin?.admin?.name || "Admin"}
        </h1>

        <Grid p={3}>
          <Grid container sm={12} className="admin-details">
            <Grid container alignItems="center" sm={6}>
              <p>Name : </p>
              <h4>{admin?.admin?.name}</h4>
            </Grid>
            <Grid container alignItems="center" sm={6}>
              <p>Role : </p>
              <h4>{admin?.admin?.role}</h4>
            </Grid>
            <Grid container alignItems="center" sm={6}>
              <p>Email : </p>
              <h4>{admin?.admin?.email}</h4>
            </Grid>
            <Grid container alignItems="center" sm={6}>
              <p>phone: </p>
              <h4>{admin?.admin?.phone}</h4>
            </Grid>
            <Grid container alignItems="center" sm={12}>
              <Grid mr={3}>
                <Input
                  name="password"
                  label="Password"
                  handleChange={handleChange}
                  value={formData.password}
                  autoFocus
                  half
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                />
              </Grid>
              <Button
                style={{
                  background: "gray",
                  padding: "10px",
                  color: "white",
                  borderRadius: "5px",
                }}
                onClick={handleUpdatePassword}
              >
                Change Password
              </Button>
            </Grid>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="modal">
                  <h3>Create New Admin</h3>
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Grid my={3}>
                  <Input
                    name="email"
                    label="Email"
                    handleChange={handleUserChange}
                    type="email"
                    required={true}
                  />
                  </Grid>
                  <Grid my={3}>
                  <Input
                    name="name"
                    label="Name"
                    handleChange={handleUserChange}
                    type="text"
                  />
                  </Grid>
                  <Grid my={3}>
                  <Input
                    name="phone"
                    label="Phone"
                    handleChange={handleUserChange}
                    type="number"
                  />
                  </Grid>
                  <Grid my={3}>
                  <Input
                    name="address"
                    label="Address"
                    handleChange={handleUserChange}
                    type="text"
                  />
                  </Grid>
                 

               

                  <Button
                    variant="contained"
                    className='submit-btn'
                    size="large"
                    type="submit"
                    fullWidth
                  >
                    Submit
                  </Button>
                </form>
              </Box>
            </Modal>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Admin;
