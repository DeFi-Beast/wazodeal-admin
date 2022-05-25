import { FETCH_ALL, FETCH_DISCOUNT, UPDATE_CAMPAIGN_STATUS } from "../constants";

let campaignStatus = [];
let refDiscount = null;


const discountReducers = (state={discounts:[], discount:[], statusArray: []}, action) => {
    switch (action.type) {
        case FETCH_ALL:
            campaignStatus  = action?.payload?.statusArr
            localStorage.setItem("campaignDiscountStatus", JSON.stringify(campaignStatus))
        return {...state, discounts:action.payload, statusArray:campaignStatus}
        case FETCH_DISCOUNT:
        return {...state, discount:action.payload}
        case UPDATE_CAMPAIGN_STATUS:
      console.log("===update campaign status action.payload=========");
            console.log(action.payload);
            campaignStatus = JSON.parse(localStorage.getItem("campaignDiscountStatus"));
          
            refDiscount = campaignStatus?.find((item) => item._id === action.payload.id);

          
      console.log("===update campaign status ref=========");

            console.log(refDiscount);
            if(action.payload.status === "true") {
                console.log("====satatustrue========")
                console.log("true")
            } else {
              console.log("====satatusfalse========")
      
              console.log("false")
      
            }
            // campaignStatus?.find((item) => item._id === action.payload.id).active =  action.payload.status
            refDiscount.active = action.payload.status
            campaignStatus[action.payload.index] = refDiscount
            localStorage.setItem("campaignDiscountStatus", JSON.stringify(campaignStatus));
            localStorage.setItem("campaignStatusNew", JSON.stringify(refDiscount));
            console.log(refDiscount);
            console.log(action?.payload?.index);
            console.log(campaignStatus);
            return { ...state, statusArray: campaignStatus };
    
        default:
            return state;
    }
}

export default discountReducers



   
