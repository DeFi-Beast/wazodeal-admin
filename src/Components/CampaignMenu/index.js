import { useEffect } from "react";
import { Grid } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";


const CampaignMenu = () => {

    const Location = useLocation()
    const [location, setLocation] = useState()

    useEffect(() => {
      
    setLocation(Location.pathname)
      
    }, [Location])

    console.log(location)
  return (
    <Grid container pb={4}>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            All
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
           {location === "/orders" ? "Pending" : "Sold Out"} 
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
          {location === "/orders" ? "Ready To Ship" : "Best Selling"} 
          </a>
        </li>
        {location === "/orders"  && <li class="nav-item">
          <a class="nav-link" href="#">
          completed
          </a>
        </li> } 

        
      </ul>
    </Grid>
  );
};

export default CampaignMenu;
