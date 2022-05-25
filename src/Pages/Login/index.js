import { useState, useEffect } from "react";
import UserLayout from "../../Components/Layouts/UserLayout";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "../../Components/LoginFiles/styles";
import Input from "../../Components/LoginFiles/Input";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { adminSignin } from "../../actions/auth";

const initialState = {
  password: "",
  email: "",
};

// const initialState = {
//   adminName: "Admin",
//   password: "1234567",
//   email: "alauwal3500@gmail.com",
//   address: "12, Sanusi Str, Mile 12, Lagos",
//   phone: "01010100100",
//   photo: "",
// };


const Merchant = () => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(adminSignin(formData, navigate));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const googleSuccess = async (res) => {
    console.log(res);
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });

      navigate("/");
    } catch (error) {}
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("google sign in was unsuccesful. Try Again later");
  };

  console.log(formData);

  return (
    <UserLayout>
      <div style={{ marginBottom: "30px !important", padding: "100px 0px 50px" }}>
        <div className="Row">
          <Container component="main" maxWidth="sm">
            <Paper elevation={3} style={{ textAlign: "center" }}>
              <Avatar
                className={classes.avatar}
                style={{ textAlign: "center", margin: "0 auto" }}
              >
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h5">Admin Sign In</Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Input
                    name="email"
                    label="Email"
                    handleChange={handleChange}
                    type="email"
                  />

                  <Input
                    name="password"
                    label="Password"
                    handleChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    handleShowPassword={handleShowPassword}
                  />
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                {/* <GoogleLogin
            clientId="57511145551-jofdo3npaipgfj4u8nkeh496jf526gbf.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          /> */}
              </form>
            </Paper>
          </Container>
        </div>
      </div>
    </UserLayout>
  );
};

export default Merchant;
