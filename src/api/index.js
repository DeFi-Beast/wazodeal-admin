import axios from "axios";

// const API = axios.create({baseURL:'http://localhost:5000'})
const API = axios.create({baseURL:'https://wazodeal.herokuapp.com'})


export const fetchAllDiscounts =(page) => API.get(`/discounts?page=${page}`)
export const fetchDiscountById =(id) => API.get(`/discounts/${id}`)
export const updateDiscountStatus =(id, status) => API.patch(`/discounts/status/${id}`, status)
export const deleteDiscount =(id) => API.patch(`/discounts/delete/${id}`)
export const fetchAllDiscountByMerchant =(merchant_id) => API.get(`/discounts/merchants/${merchant_id}`)
export const createDiscount =(discount) => API.post(`/discounts`, discount)
export const updateDiscountCampaignImages =(id, formData) => API.patch(`/discounts/campaignImages/${id}`, formData)


export const fetchDiscountsBySearch =(searchQuery) => API.get(`/discountsSearch/search?merchant=${searchQuery.merchant || ''}&category=${searchQuery.category || ''}&discount=${searchQuery.discount || ''}`)
export const updateDiscount =(id, discount) => API.patch(`/discounts/${id}`, discount)
export const fetchAllMerchants =() => API.get('/merchant')
// export const fetchDiscount = (id) =>  API.get(`/discount/${id}`)

export const userSignIn =(user) => API.post(`/user/login`, user)
export const userSignup =(user) => API.post(`/user/signup`, user)
export const userActivate =(user) => API.patch(`/activate`, user)
export const userForgot =(email) => API.patch(`/forgot`, email)
export const userReset =(user) => API.patch(`/reset`, user)
export const merchantSignIn =(merchant) => API.get(`/merchant/login`, merchant)
export const merchantSignup =(merchant) => API.post(`/merchant/signup`, merchant)
export const updateMerchant =(id) => API.patch(`/merchant/${id}`)
export const deleteMerchant =(id) => API.patch(`/merchant/delete/${id}`)




export const fetchAllReceipts =(page) => API.get(`/receipts?page=${page}`)
export const createReceipt =(receipt) => API.post(`/receipts`, receipt)
export const fetchReceiptById =(id) => API.get(`/receipts/${id}`)
export const updateReceiptStatus =(id) => API.patch(`/receipts/status/${id}`)

export const createCoupon =(coupon) => API.post(`/coupons`, coupon)
export const fetchAllCoupons = (paged) => API.get(`/coupons?page=${paged}`);
export const deleteCoupon =(id) => API.patch(`/coupons/delete/${id}`)
export const fetchCouponById = (id) => API.get(`/coupons/${id}`);
export const fetchCouponsBySearch = (searchQuery) =>
  API.get(
    `/discountsSearch/search?merchant=${searchQuery.merchant || ""}&category=${
      searchQuery.category || ""
    }&coupons=${searchQuery.coupons || ""}`
  );
export const updateCoupon = (id, coupons) =>
  API.patch(`/coupons/${id}`, coupons);
export const updateCouponClick = (couponId, userData) =>
  API.patch(`/coupons/click/${couponId}`, userData);
export const updateCouponCampaignImages =(id, formData) => API.patch(`/coupons/campaignImages/${id}`, formData)


export const adminSignIn =(formData) => API.post(`/admin/login`, formData)
export const createAdmin =(formData) => API.post(`/admin/signup`, formData)
export const adminmerchantSignup  =(merchant) => API.post(`/admin/merchant/signup`, merchant)
export const updateAdminPassword =(id, formData) => API.patch(`/admin/${id}`, formData)
export const adminUpdateMerchant =(id, formData) => API.patch(`/admin/merchant/${id}`, formData)
export const updateMerchantLogo =(id, formData) => API.patch(`/admin/merchantLogo/${id}`, formData)
