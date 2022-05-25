import { FETCH_CAMPAIGN } from "../constants";



const campaignReducers = (state = { campaigns: [], campaign: [] }, action) => {
  switch (action.type) {
    case FETCH_CAMPAIGN:
      return { ...state, campaign: action.payload};
    default:
      return state;
  }
};

export default campaignReducers;
