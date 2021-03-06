import React, { useState } from "react";
import CreateCampaignMenu from "../../../Components/CreateCampaignMenu";
import LayoutDefault from "../../../Components/Layouts/LayoutDefault";
import FileBase from "react-file-base64";
import { updateDiscount } from "../../../actions";
import { useDispatch } from "react-redux";
import { Button, Grid, Input } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const OtherDetails = () => {
  const [postData, setPostData] = useState({
    otherDetails: [],
  });

  const dispatch = useDispatch();
  const Navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const files = postData?.otherDetails?.map((file) => file.base64);

    console.log(files);
    console.log(postData);

    dispatch(updateDiscount({ ...postData, otherDetails: files.join(",") }));

    // clear();
  };
  console.log(postData);

  const uploadImages = (files) => {
    
    setPostData({ ...postData, otherDetails:files });
  };
    const clear = () => {
    setPostData({
        otherDetails: ''
    });
    window.location.reload(false);
    
  };
  return (
    <Grid container xs={12} sm={12} md={12} style={{ margin: "0 auto" }} >
        <h3>Upload Campaign Files or Docs</h3>

      <Grid container sm={11} style={{ margin: "0 auto" }}>
   <Grid sm={4}>
   <p>Upload other files or docs relevant to Your campaign  </p>

   </Grid>
        
        <Grid container xs={12} sm={6} md={6} style={{ margin: "0 auto" }} className="mb-5">
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <FileBase type="file" multiple={true} onDone={uploadImages} />
            <Grid container style={{ margin: "0 auto" }} className="my-5">
                {postData.otherDetails.length > 0 ?  <>{postData.otherDetails.map((file, i) => {
              return (
                <div className="col-sm-4" m={5}>
                  <img style={{ width: "100%" }} key={i} src={file.base64} />
                </div>
              );
            })}</> : <p style={{color:"black"}}>Upload additional files or docs relevant to Your campaign</p>}
           
            </Grid>
         <Grid my={3} className='my-3'>
         <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
              style={{margin:"10px 0px"}}
            >
              Submit
            </Button>
         </Grid>
           
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={clear}
              fullWidth
              className="mt-5"
            >
              Clear
            </Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OtherDetails;
