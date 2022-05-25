import { Grid, Select } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllDiscounts, updateCampaignStatus, deleteDiscount } from "../../../actions";
import { deleteCoupon} from "../../../actions/coupon";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { UPDATE_CAMPAIGN_STATUS } from "../../../constants";

import "./styles.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Campaign = ({ value }) => {
  //   const { id } = useParams();
  const dispatch = useDispatch();
  // const discounts = useSelector((state) => state.merchants?.discounts);

  const statusArr = useSelector((state) => state?.discounts?.statusArray);
  const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const [option, setOption] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(false);
  const merchant = JSON.parse(localStorage.getItem("profile"));
  const {discounts} = useSelector((state) => state.discounts);

let total = null;


console.log("c==================after call dicounts;;;;;;;;;--------2")



  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  const handleToggle = (id, status, index) => {
    console.log(status);
    console.log(id);
    dispatch({
      type: UPDATE_CAMPAIGN_STATUS,
      payload: { id: id, status: status, index: index },
    });
    dispatch(updateCampaignStatus(id, { status: status }));
  };

  const handleClick = (event, index) => {
    console.log("=============index==================");
    console.log(index);
    setActiveIndex(index);
    setAnchorEl(!anchorEl);
  };
  const handleClose = (index) => {
    setAnchorEl(null);
    setActiveIndex(index);
  };
  console.log("=============activeIndex==================");
  console.log(activeIndex);
  // useEffect(() => {
  //   dispatch(getAllDiscounts(1));
  // }, []);
  

  console.log(merchant);

  const handleChange = (e) => {
    console.log(e.target.checked);
    setOption(e.target.checked);
  };

  console.log(
    "=======================index, startDate, endDate==============="
  );
  let today = new Date();
  today.setHours(0, 0, 0, 0);

  console.log(today);

  // active || ((today >= item.startDate) && (today <= item.endDate))

  const handleOption = (e) => {
    console.log(e.target.checked);
    setOption(e.target.checked);
  };
  const handleDelete = (id, type) => {
    console.log(id, type);

    if(type === "discount"){
      dispatch(deleteDiscount(id))
    } else {
      console.log("coupon")
      dispatch(deleteCoupon(id))

    }
    
  };
  console.log(option);
  return (
    <Grid container sm={11} m="0 auto" className="mb-5">
      <Grid container justifyContent="space-between">
        
      </Grid>

      <Grid container justifyContent="space-between" my={3}>
        <Grid container sm={6} alignItems="center">
          <Grid>
            <Checkbox {...label} onChange={handleChange} />
          </Grid>
          <Grid>
            <div class="input-group">
              <select
                class="custom-select"
                id="inputGroupSelect01"
                disabled={!option}
              >
                <option selected>Please Choose an Option...</option>
                <option value="1">Delete Campaigns</option>
                <option value="2">Set To Active</option>
                <option value="3">Set To Inactive</option>
              </select>
            </div>
          </Grid>
          <Grid ml={3}>
            <Link to="#" onChange={handleOption} className="actionBtn">
              Go
            </Link>
          </Grid>
        </Grid>
        <Grid>
          <Link to="/campaign/create-campaign">Add New Campaign</Link>
        </Grid>
      </Grid>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Created </th>
            <th>Campaign Start Date </th>
            <th>Campaign End Date </th>
            <th>Price( &#8358;)</th>
            <th>Discount ( % )</th>
            <th> Sale Price( &#8358;)</th>
            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {value?.map((item, index) => (
            <tr className="campaign-row" key={index}>
              <td>
                <Checkbox {...label} onChange={handleChange} />
              </td>
              <td>
                {/* <Link to={`/campaign/details/${item._id}`}>{item.title}</Link> */}
                <p>{item.title}</p>
              </td>
              <td>{moment(item.createdAt).format("MMM Do YYYY")}</td>
              <td>
                {moment(item.startDate).format("MMM Do YYYY , h:mm:ss a")}
              </td>
              <td>{moment(item.endDate).format("MMM Do YYYY, h:mm:ss a")}</td>
              <td>{Number(item.price).toLocaleString("en-US")}</td>
              <td>{item.discount}</td>
              <td>
                {Number(
                  item.price - (item.price * item.discount) / 100
                ).toLocaleString("en-US")}
              </td>
              {/* <td>
                <div
                  className={
                    statusArr?.[index]?.active
                      ? "toggle-container-active"
                      : "toggle-container"
                  }
                  onClick={() =>
                    handleToggle(item?._id, !statusArr?.[index]?.active, index)
                  }
                >
                  <Grid
                    container
                    justifyContent="space-between"
                    style={{ width: "100%" }}
                  >
                    <p>ON</p>
                    <p>OFF</p>
                  </Grid>
                  <div
                    // (startingDate.getTime())>= (today.getTime())
                    className={
                      statusArr?.[index]?.active
                        ? "toggle-right"
                        : "toggle-ball"
                    }
                  ></div>
                </div>
              </td> */}
              <td style={{ padding: "10px 20px" }}>
                <div style={{ position: "relative" }}>
                  <Button
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    variant="contained"
                    disableElevation
                    onClick={(event) => handleClick(event, index)}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Options
                  </Button>
                  {activeIndex === index ? (
                    <>
                      {anchorEl && (
                        <div
                          id="demo-customized-menu"
                          className="options-menu"
                          onClose={handleClose}
                          style={{
                            background: "white",
                            zIndex: "100",
                            boxShadow: "1px 3px 8px black",
                          }}
                        >
                          <MenuItem disableRipple>
                            <Link to={`/campaign/edit/${item._id}`}>
                              <EditIcon />
                              Edit Campaign
                            </Link>
                          </MenuItem>
                          <MenuItem disableRipple onClick={() => handleDelete(item._id, item.campaignType)}>
                            <DeleteIcon />
                            Delete Campaign
                          </MenuItem>
                        </div>
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Grid>
  );
};
export default Campaign;
