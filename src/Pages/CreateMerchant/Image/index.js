import React, { useState, useEffect } from "react";
import CreateCampaignMenu from "../../../Components/CreateCampaignMenu";
import LayoutDefault from "../../../Components/Layouts/LayoutDefault";
import FileBase from "react-file-base64";
import { updateMerchantLogo } from "../../../actions/index";
import { useDispatch } from "react-redux";
import { Button, Grid, Input } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateCampaignImage = () => {
  const [postData, setPostData] = useState({
    selectedFiles: [],
  });
  const {id}= useParams()
  const navigate = useNavigate()
  const merchant = useSelector((state) =>
  id
    ? state.merchants?.merchants?.merchant?.find((p) => p._id === id)
    : null
);
console.log(id)
  const dispatch = useDispatch();


  console.log(postData);
  useEffect(() => {
    if (merchant)
      setPostData({
      selectedFiles : merchant?.logo
      });
  }, [merchant]);
  const uploadImages = (files) => {
    
    setPostData({ ...postData, selectedFiles:files });
  };
    const clear = () => {
    setPostData({
        selectedFiles: ''
    });
    // window.location.reload(false);
    
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // const files = postData?.selectedFiles?.map((file) => file.base64);

    // console.log(files);
    console.log(postData);

    dispatch(updateMerchantLogo(id, postData, navigate));

    // clear();
  };
  
  return (
   <Grid container xs={12} sm={12} md={12} style={{ margin: "0 auto" }} >
    
     <h3>Upload Merchant Images</h3>
 
 <Grid container sm={11} style={{ margin: "0 auto" }}>
   <Grid sm={4}>
   <p>Note: Always select one or more images to upload at once  </p>

   </Grid>
   <Grid container xs={12} sm={6} md={6} style={{ margin: "0 auto" }} className="mb-5">
     <form autoComplete="off" noValidate onSubmit={handleSubmit}>
       <FileBase type="file" multiple={true} onDone={uploadImages} />
       <Grid container style={{ margin: "0 auto" }} className="my-5">
         
           {postData?.selectedFiles?.length > 0 ?  <>{postData?.selectedFiles?.map((file, i) => {
         return (
           <div className="col-sm-4" m={5}>
             <img style={{ width: "100%" }} key={i} src={file.base64} />
           </div>
         );
       })}</> : <p style={{color:"black"}}>Add Some Images to kick start your Campaign</p>}
      
       </Grid>
    
       <Button
       //   className={classes.buttonSubmit}
         variant="contained"
         color="primary"
         size="large"
         type="submit"
         
         style={{margin:"10px 0px"}}
         
       >
         {id ? "Update Logo" : "Add Logo"}
    
       </Button>
     
     </form>
   </Grid>
 </Grid>
    </Grid>
   
    
  );
};

export default CreateCampaignImage;
