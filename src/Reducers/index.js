import { combineReducers } from "redux";

import discounts from "./discountReducers";
import receipts from "./receiptReducers";
import merchants from "./merchantReducers";
import auth from "./authReducers";
import notify from "./notifyReducers"
import addToCart from "./CartReducers"
import coupons from "./couponReducers";
import campaigns from "./campaignReducers";

const reducers = combineReducers({
    discounts, merchants, auth, notify, addToCart, receipts, coupons, campaigns
})

export default reducers