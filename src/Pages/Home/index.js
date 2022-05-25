import { Grid } from '@mui/material'
import React, {useState} from 'react'
import UserLayout from "../../Components/Layouts/UserLayout"
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rewards from "../../Components/Rewards";
import Merchants from "../../Components/Merchants";
import Campaign from '../../Components/Campaign';
import Admin from '../../Components/Admin';
import { useEffect } from 'react';



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

const Home = () => {

  const admin = JSON.parse(localStorage.getItem("profile"));

    const [value, setValue] = useState(0);
    
    // useEffect(() => {
      
    //     window.location.reload(false)
    // }, [])
    
  
    const handleTabChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <UserLayout>
        <Grid className='Row RowPadding'>
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
                <Tab label="Campaigns" {...a11yProps(0)} />
                <Tab label="Merchants" {...a11yProps(1)} />
                <Tab label="Rewards" {...a11yProps(2)} />
                <Tab label="Shopping History" {...a11yProps(3)} />
                <Tab label="Profile" {...a11yProps(4)} />

              </Tabs>
            </Box>
            
            <TabPanel value={value} index={0}>
              <Campaign/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Merchants />
            </TabPanel>
            
            <TabPanel value={value} index={2}>
              <Rewards />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Grid>
                <h4>Shopping History</h4>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <h4>Profile Information</h4>
              <Admin/>
            </TabPanel>
          </Box>
        </Grid>
        </Grid>
    </UserLayout>
  )
}

export default Home