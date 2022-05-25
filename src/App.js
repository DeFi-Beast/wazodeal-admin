import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.css";
// import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import { getAllMerchants, getAllDiscounts } from "./actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllReceipts } from "./actions/receipts";
import { getAllCoupons } from "./actions/coupon";
import CreateCampaign from "./Pages/CreateCampaign";
import CreateMerchant from "./Pages/CreateMerchant";
import CreateCampaignImage from "./Pages/CreateCampaign/Image";
import CreateCampaignOtherDetails from "./Pages/CreateCampaign/OtherDetails";
import Login from "./Pages/Login";
import Loader from "./Components/Loader";
import { Grid } from "@mui/material";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading)

  const admin = JSON.parse(localStorage.getItem("profile"));


  useEffect(() => {
    dispatch(getAllMerchants());
    dispatch(getAllDiscounts(1));
    dispatch(getAllCoupons(1));
    dispatch(getAllReceipts(1));
  }, []);
  // const user = JSON.parse(localStorage.getItem("profile"));

 

  return (
    <Router>
      <div className="App">
        {/* <button onClick={notify}>Notify !</button> */}
   
         
        <ToastContainer />
        <Routes>
          <Route path="/" element={admin ? <Home /> : <Navigate replace to="/login" />}></Route>

          <Route path="/campaign/create-campaign">
            <Route index element={<CreateCampaign />} />
            <Route path="information" element={<CreateCampaign />} />
            <Route path="upload-images" element={<CreateCampaignImage />} />
            <Route
              path="other-details"
              element={<CreateCampaignOtherDetails />}
            />
          </Route>
          <Route path="/campaign/edit">
            <Route index element={<CreateCampaign />} />
            <Route path=":id" element={<CreateCampaign />} />
            <Route path="upload-images" element={<CreateCampaignImage />} />
            <Route
              path="other-details"
              element={<CreateCampaignOtherDetails />}
            />
          </Route>
          <Route path="/merchant">
            <Route path="add" element={<CreateMerchant />}>
              <Route path=":id" element={<CreateMerchant />} />
            </Route>
          </Route>
          <Route path="/coupon">
          <Route index element={<CreateCampaign />} />
            
            <Route path="add" element={<CreateCampaign />}>
              <Route path=":id" element={<CreateCampaign />} />
            </Route>
          </Route>
          <Route path="/discount">
          <Route index element={<CreateCampaign />} />

            <Route path="add" element={<CreateCampaign />}>
              <Route path=":id" element={<CreateCampaign />} />
            </Route>
          </Route>
          <Route path="/merchant/edit">
            <Route index element={<CreateMerchant />} />
            <Route path=":id" element={<CreateMerchant />} />
            <Route path="upload-images" element={<CreateMerchant />} />
          </Route>
          <Route path="/login">
            <Route index element={<Login />} />
          </Route>
          {/* <Route path="*" element={<ErrorPage />}></Route> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
