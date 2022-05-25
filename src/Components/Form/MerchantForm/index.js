import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NumberInput from "../../NumberInput";
import { discounts, categories } from "../../../constants";

import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "../../LoginFiles/styles";
import Input from "../../LoginFiles/Input";
import Icon from "../../LoginFiles/icon";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { adminmerchantsignup , merchantsignin,  } from "../../../actions/auth";
import { adminupdatemerchant } from "../../../actions/index";

import FileBase from "react-file-base64";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const initialState = {
  merchantName: "",
  password: "123456789",
  email: "",
  address: "",
  category: "",
  phone: "",
  discount:"",
  price: null,
  logo: "",
};

const Merchant = ({currentId, merchants}) => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const location = useLocation();
  // const login = query.get("login")
  const [isSignup, setIsSignup] = useState();

  const {id} = useParams()
  console.log(id)
  const state = useSelector((state) => state)
  console.log(state)

  const merchant = useSelector((state) =>
    currentId
      ? state.merchants?.merchants?.merchant?.find((p) => p._id === currentId)
      : null
  );


  console.log(merchant)
  console.log(merchants)
  console.log(formData)


 


  // useEffect(() => {
  //   setIsSignup(!JSON.parse(query.get("login")));
  // }, []);
  

  


  const handleSubmit = (e) => {
    e.preventDefault();
    if(id){
      dispatch(adminupdatemerchant(id, formData, navigate));

    } else{
      dispatch(adminmerchantsignup(formData, navigate));

    }
  
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
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

 
  let [numberFormat, setNumberFormat] = useState(null);


  useEffect(() => {
    setFormData({ ...formData, price: numberFormat });
  }, [numberFormat]);
  const handleDiscChange = (e) => {
    setFormData({ ...formData, discount: e.target.value });
  };
  const handleCatChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };


  useEffect(() => {
    if (merchant)
      setFormData({
        ...merchant
      });
  }, [merchant]);
console.log(currentId)
console.log(formData)
  console.log(formData)

  return (
 
        <div style={{marginBottom:"30px !important"}}>
      <div className="Row" >
        <Container component="main" maxWidth="sm">
          <Paper className={classes.paper} elevation={3}>
           
            <Typography variant="h5" style={{textTransform:"capitalize"}}>
            {id ? `Edit ${formData?.merchantName || formData?.merchant }`  : "Add A New Merchant" } 
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
               
                  <>
                    <Input
                      name="merchantName"
                      label="Merchant Name"
                      handleChange={handleChange}
                      autoFocus
                     value={formData.merchantName}
                    />
                  </>
                
                <Input
                  name="email"
                  label="Email"
                  handleChange={handleChange}
                  type="email"
                  twothird={isSignup ? "twothird" : ""}
                  value={formData.email}

                />
               
                    {" "}
                    <Input
                      name="phone"
                      label="Mobile Phone"
                      handleChange={handleChange}
                      type="tel"
                      half
                      quarter
                     value={formData.phone}

                    />
                    <Input
                      name="address"
                      label="Address"
                      placeholder='Address should be properly seperated with commas'
                      handleChange={handleChange}
                      multiline
                      twothird
                     value={formData.address}

                    />
                    <Input
                      name="description"
                      placeholder="description"
                      label="Description"
                      multiline
                      handleChange={handleChange}
                     value={formData.description}

                    />
                    <Grid item xs={12}>
                      <div className={classes.fileInput}>
                        <FileBase
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) => {
                            setFormData({ ...formData, logo: base64 });
                          }}
                        />
                      </div>
                    </Grid>
                  
               
                  <Grid style={{padding:"8px"}} container spacing={2} alignItems="center">
                   
                    <Grid item xs={4} sm={4} md={4}>
                      <FormControl fullWidth>
                        <InputLabel id="discount-label">Discount</InputLabel>
                        <Select
                          labelId="discount-label"
                          variant="outlined"
                          id="discount"
                          value={formData.discount}
                          label="Discount"
                          onChange={handleDiscChange}
                     

                        >
                          {discounts.map((discount) => (
                            <MenuItem value={discount}>{discount}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <FormControl fullWidth>
                        <InputLabel id="category-label">Category</InputLabel>
                        <Select
                          labelId="category-label"
                          variant="outlined"
                          id="category"
                          value={formData.category}
                          label="Category"
                          onChange={handleCatChange}
                        >
                          {categories.map((category) => (
                            <MenuItem value={category}>{category}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                
            
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {id ? "Update" : "Create" } Merchant
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
    
  );
};

export default Merchant;
