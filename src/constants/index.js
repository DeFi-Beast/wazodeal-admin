export const FETCH_ALL = 'FETCH_ALL'
export const FETCH_DISCOUNT = 'FETCH_DISCOUNT'
export const FETCH_ALL_MERCHANTS = 'FETCH_ALL_MERCHANTS'
export const FETCH_DISCOUNTS_BY_MERCHANT = 'FETCH_DISCOUNTS_BY_MERCHANT'
export const UPDATE_CAMPAIGN_STATUS = 'UPDATE_CAMPAIGN_STATUS'

export const FETCH_ALL_COUPON = 'FETCH_ALL_COUPON'
export const FETCH_COUPON = 'FETCH_COUPON'
export const UPDATE_CLICK = 'UPDATE_CLICK'

export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'
export const LOG_OUT = 'LOG_OUT'

export const NOTIFY = 'NOTIFY'
export const START_LOADING = 'START_LOADING'
export const END_LOADING = 'END_LOADING'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const CART_QTY = 'CART_QTY'
export const CART_QTY_PLUS = 'CART_QTY_PLUS'
export const CART_QTY_MINUS = 'CART_QTY_MINUS'

export const CREATE_RECEIPT = 'CREATE_RECEIPT'
export const FETCH_RECEIPTS_BY_ID = 'FETCH_RECEIPTS_BY_ID'
export const FETCH_ALL_RECEIPTS = 'FETCH_ALL_RECEIPTS'
export const FETCH_CAMPAIGN = 'FETCH_CAMPAIGN'



export const discounts = [5, 10, 15, 20, 25];
export const categories = ["food", "travel", "lifestyle", "beauty", "fashion", "stores"];
 


export const selectedFileDefault = "data:image/png;base64,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"
