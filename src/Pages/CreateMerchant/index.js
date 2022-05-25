import React, { useState } from "react";
import CreateCampaignMenu from "../../Components/CreateCampaignMenu";
import LayoutDefault from "../../Components/Layouts/LayoutDefault";
import UserLayout from "../../Components/Layouts/UserLayout";
import CreateCampaignImage from "./Image";
import { Button, Grid } from "@mui/material";
import Form from "../../Components/Form";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./styles.css";
import OtherDetails from "./OtherDetails";
import MerchantForm from "../../Components/Form/MerchantForm";
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Grid>{children}</Grid>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CreateMerchant = () => {
  const { id } = useParams();
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const merchant = useSelector((state) =>
    id
      ? state.merchants?.merchants?.merchant?.find((p) => p._id === id)
      : null
  );


  

  return (
    <UserLayout>
      <Grid  sm={11} m="0 auto" style={{paddingTop:"100px"}}>
        <Grid >
        <Link style={{background:"black", color:"white", padding:"10px"}} to="/">Back to Home</Link>

        </Grid>
        <Grid>
        <h1 style={{textTransform:"capitalize"}}>{id ? `Edit ${merchant?.merchantName || merchant?.merchant }`  : "Add A New Merchant" } </h1>

        </Grid>
        <Grid mt={3}>
          <Box sx={{ width: "100%" }}>
            <Box
              className="tabContainer"
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <Tabs
                value={value}
                onChange={handleTabChange}
                aria-label="basic tabs example"
              >
                <Tab className='create-campaign-tab' label="Merchant Information" {...a11yProps(0)} />
                <Tab className='create-campaign-tab' label="Merchant Images" {...a11yProps(1)} />
             
              </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
              <MerchantForm currentId={id} merchants={merchant}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <CreateCampaignImage/>
            </TabPanel>
           
          </Box>
        </Grid>
        
      </Grid>
      </UserLayout>
  );
};

export default CreateMerchant;
