import React, { useState } from "react";
import CreateCampaignMenu from "../../../Components/CreateCampaignMenu";
import LayoutDefault from "../../../Components/Layouts/LayoutDefault";
import FileBase from "react-file-base64";
import { updateDiscount, updateDiscountCampaignImages } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Input } from "@material-ui/core";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { updateCouponCampaignImages } from "../../../actions/coupon";
import { useEffect } from "react";

const CreateCampaignImage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedCampaign = useSelector((state) =>
    id
      ? state.discounts?.discounts?.discounts?.find((p) => p._id === id) ||
        state.coupons?.coupons?.coupons?.find((p) => p._id === id)
      : null
  );

  console.log(selectedCampaign)
  const [postData, setPostData] = useState({
    selectedFiles: [],
  });
  const Location = useLocation();
  const campaign = useSelector((state) => state);

  console.log(campaign);
  useEffect(() => {
    if (selectedCampaign)
      setPostData({
      selectedFiles : selectedCampaign?.campaignFiles
      });
  }, [selectedCampaign]);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // const files = postData?.selectedFiles?.map((file) => file.base64);

    // console.log(files);
    console.log(postData);
    if(selectedCampaign?.campaignType === "coupon"){
      console.log("coupon")
      dispatch(updateCouponCampaignImages(id, postData, navigate));
    }else {
      console.log("discount")
  console.log(postData)
    dispatch(updateDiscountCampaignImages(id, postData, navigate));


    }


    // clear();
  };
  console.log(postData);

  const uploadImages = (files) => {
    setPostData({ ...postData, selectedFiles: files });
  };
  const clear = () => {
    setPostData({
      selectedFiles: "",
    });
    window.location.reload(false);
  };
  return (
    <Grid container xs={12} sm={12} md={12} style={{ margin: "0 auto" }}>
      <h3>Upload Campaign Images</h3>

      <Grid container sm={11} style={{ margin: "0 auto" }}>
        <Grid sm={4}>
          <p>Note: Always select one or more images to upload at once </p>
        </Grid>
        <Grid
          container
          xs={12}
          sm={6}
          md={6}
          style={{ margin: "0 auto" }}
          className="mb-5"
        >
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid my={3}>
            <FileBase type="file" multiple={true} onDone={uploadImages} />

            </Grid>
            <Grid container style={{ margin: "0 auto" }} >
              {postData.selectedFiles.length > 0 ? (
                <>
                  {postData.selectedFiles.map((file, i) => {
                    return (
                      <Grid sm={6} m={5}>
                        <img
                          style={{ width: "100%" }}
                          key={i}
                          src={file.base64}
                        />
                      </Grid>
                    );
                  })}
                </>
              ) : (
                <p style={{ color: "black" }}>
                  Add Some Images to kick start your Campaign
                </p>
              )}
            </Grid>

            <Button
              //   className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              style={{ margin: "10px 0px" }}
            >
              Submit
            </Button>
            {/* <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={clear}
              fullWidth
              className="mt-3"
            >
              Clear
            </Button> */}
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreateCampaignImage;
