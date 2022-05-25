import { Grid } from '@mui/material'
import React, {useState} from 'react'
import UserLayout from "../../Components/Layouts/UserLayout"
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux"
import Rewards from "../../Components/Rewards";
import Table from  "./Table"
import "./styles.css"

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
            <Typography>{children}</Typography>
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


    const [value, setValue] = useState(0);
    const handleTabChange = (event, newValue) => {
      setValue(newValue);
    };
  

    const {AllReceipts} = useSelector(state => state.receipts)
  const receiptPending = AllReceipts?.receipts?.filter(receipt => receipt.status === "processing")
  const receiptComplete = AllReceipts?.receipts?.filter(receipt => receipt.status === "completed")

  console.log("===============allreceipts===========")
  console.log(AllReceipts)
  return (
    
        <Grid className=''>
        <Grid mt={3}>
          <Box sx={{ width: "100%", overflow: "auto !important" }}>
            <Box
              className="tabContainer"
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <Tabs
               
                value={value}
                onChange={handleTabChange}
                aria-label="basic tabs example"
              >
                <Tab className="rewardTab" label="All" {...a11yProps(0)}  />
                <Tab className="rewardTab"  label="Pending" {...a11yProps(1)} />
                <Tab className="rewardTab"  label="Completed" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel style={{width:"100%"}} value={value} index={0}>
        <Table value={AllReceipts?.receipts} />
      </TabPanel>
      <TabPanel style={{width:"100%"}} value={value} index={1}>
      <Table value={receiptPending} />
        
      </TabPanel>
      <TabPanel style={{width:"100%"}} value={value} index={2}>
      <Table value={receiptComplete} />
      
        
      </TabPanel>
      {/* <TabPanel style={{width:"100%"}} value={value} index={3}></TabPanel> */}
          </Box>
        </Grid>
        </Grid>
    
  )
}

export default Home