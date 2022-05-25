import { useEffect } from "react";
import { Grid } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";


const CreateCampaignMenu = () => {

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
          <a class={`nav-link ${location === "/campaign/create-campaign/information" || location === "/campaign/create-campaign" ? "active" : ""}`} href="/campaign/create-campaign/information">
            Campaign Information
          </a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${location === "/campaign/create-campaign/upload-images" ? "active" : ""}`} href="/campaign/create-campaign/upload-images">
           Campaign Images
          </a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${location === "/campaign/create-campaign/other-details" ? "active" : ""}`} href="/campaign/create-campaign/other-details">
          Campaign Other Details
          </a>
        </li>
      </ul>
    </Grid>
  );
};

export default CreateCampaignMenu;
