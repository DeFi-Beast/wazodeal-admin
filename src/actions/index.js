import { FETCH_ALL, FETCH_DISCOUNT,FETCH_DISCOUNTS_BY_MERCHANT,FETCH_CAMPAIGN, FETCH_ALL_MERCHANTS, START_LOADING, END_LOADING } from "../constants";
import * as api from '../api'
import {toast} from "react-toastify"



export const createDiscount = (discount, navigate)=> async(dispatch) => {
   

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.createDiscount(discount)
        console.log("================campaigndata===========")
        console.log(data)
        dispatch({type:FETCH_CAMPAIGN, payload:data})

   console.log("============new discountdata=============")
   navigate(`/discount/add/${data.discount._id}`)

   data.success && dispatch( toast.success(<>{data.message}</>)  && window.location.reload())
   data.error && dispatch( toast.error(<>{data.message}</>))
        console.log(data)

        // dispatch({type:CREATE_DISCOUNT, payload:data})

        dispatch({type:END_LOADING})

        
    } catch (error) {
        
    }

}
export const getAllDiscounts = (page)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchAllDiscounts(page)

        dispatch({type:FETCH_ALL, payload:data})

        dispatch({type:END_LOADING})

        
    } catch (error) {
        
    }

}
export const getDiscountById = (id)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchDiscountById(id)
        dispatch({type:END_LOADING})

        console.log(data)

        dispatch({type:FETCH_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}
export const getDiscountsBySearch = (searchQuery)=> async(dispatch) => {
    
    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchDiscountsBySearch(searchQuery)

        
        dispatch({type:END_LOADING})


        dispatch({type:FETCH_ALL, payload:data})
       
        
    } catch (error) {
        
    }

}
export const updateDiscount = (id, discount)=> async(dispatch) => {

    try {

        const {data} = await api.updateDiscount(id, discount)

        

        // dispatch({type:UPDATE_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}
export const getAllMerchants = ()=> async(dispatch) => {

    try {

        const {data} = await api.fetchAllMerchants({})

        // console.log(data)

        dispatch({type:FETCH_ALL_MERCHANTS, payload:data})
        
    } catch (error) {
        
    }

}
export const deleteMerchant = (id)=> async(dispatch) => {

    try {

        const {data} = await api.deleteMerchant(id)
        
        data.success && dispatch( toast.success(<>{data.message}</>) && window.location.reload())
        
        
    } catch (error) {
        
    }

}

export const updateCampaignStatus = (id, status)=> async(dispatch) => {

    try {

        const {data} = await api.updateDiscountStatus(id, status)

        console.log(data)
        // dispatch({type:FETCH_ALL, payload:data})
        // dispatch({type:UPDATE_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}
export const getAllDiscountByMerchant = (merchant_id)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchAllDiscountByMerchant(merchant_id)
        dispatch({type:END_LOADING})

        console.log(data)

        dispatch({type:FETCH_DISCOUNTS_BY_MERCHANT, payload:data})
        
    } catch (error) {
        
    }

}

export const updateMerchant = (id)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.updateMerchant(id)

        console.log(data)
        dispatch({type:END_LOADING})

        // dispatch({type:UPDATE_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}
export const adminupdatemerchant = (id, formData)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.adminUpdateMerchant(id, formData)
        data.success && dispatch( toast.success(<>{data.message}</>) )


        dispatch({type:END_LOADING})

        console.log(data)

        // dispatch({type:UPDATE_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}
export const updateMerchantLogo = (id, formData, Navigate)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        console.log("=======merchnatLogoformData==========")
        console.log(formData)
        const {data} = await api.updateMerchantLogo(id, formData)

        dispatch({type:END_LOADING})

        data.success && dispatch( toast.success(<>{data.message}</>) && Navigate("/") && window.location.reload(false))
        window.location.reload(false)
        console.log(data)

        // dispatch({type:UPDATE_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}

export const updateDiscountCampaignImages = (id, formData, Navigate)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        console.log("=======updateDiscountCampaignImagesformData==========")
        console.log(formData)
        const {data} = await api.updateDiscountCampaignImages(id, formData)
        dispatch({type:END_LOADING})

        data.success && dispatch( toast.success(<>{data.message}</>) && Navigate("/") && window.location.reload(false))
        window.location.reload(false)
        console.log(data)

        // dispatch({type:UPDATE_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}

export const deleteDiscount = (id)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.deleteDiscount(id)
        data.success && dispatch( toast.success(<>{data.message}</>) && window.location.reload())

        dispatch({type:END_LOADING})

        console.log(data)

        dispatch({type:FETCH_ALL, payload:data})
        
    } catch (error) {
        
    }

}

