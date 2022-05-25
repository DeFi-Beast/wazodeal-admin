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

const CreateCampaign = () => {
  const { id } = useParams();
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };


  

  return (
    <UserLayout>
      <Grid  sm={11} m="0 auto" style={{paddingTop:"100px"}}>
        <Grid >
        <Link style={{background:"black", color:"white", padding:"10px"}} to="/">Back to Home</Link>

        </Grid>
        <Grid>
        <h1>{id ? "Edit" : "Create A New"} Campaign</h1>

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
                <Tab className='create-campaign-tab' label="Campaign Information" {...a11yProps(0)} />
                <Tab className='create-campaign-tab' label="Campaign Images" {...a11yProps(1)} />
                {/* <Tab className='create-campaign-tab' label="Other Details" {...a11yProps(2)} /> */}
              </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
              <Form currentId={id} />
            </TabPanel>
            <TabPanel value={value} index={1}>
            <CreateCampaignImage/>
            </TabPanel>

            {/* <TabPanel value={value} index={2}>
              <OtherDetails/>
            </TabPanel>
            */}
            
          </Box>
        </Grid>
        
      </Grid>
      </UserLayout>
  );
};

export default CreateCampaign;
