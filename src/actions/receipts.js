import { CREATE_RECEIPT,FETCH_RECEIPTS_BY_ID,FETCH_ALL_RECEIPTS, START_LOADING, END_LOADING } from "../constants";
import * as api from '../api'
import {toast} from "react-toastify"

export const getAllReceipts = (page)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchAllReceipts(page)

        dispatch({type:FETCH_ALL_RECEIPTS, payload:data})

        dispatch({type:END_LOADING})

        
    } catch (error) {
        
    }

}

export const createReceipt = (receipt, navigate)=> async(dispatch) => {
    

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.createReceipt(receipt)

        dispatch({type:CREATE_RECEIPT, payload:data})
        console.log(data)
        dispatch({type:END_LOADING})
        navigate(`/user/${data.receipt.user}`)
        // window.location.reload(false);
        data.success && dispatch( toast.success(<>{data.message}</>))
        data.error && dispatch( toast.error(<>{data.message}</>))
        
    } catch (error) {
        
    }

}

export const getReceiptById = (id)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchReceiptById(id)
        dispatch({type:END_LOADING})

        console.log(data)

        dispatch({type:FETCH_RECEIPTS_BY_ID, payload:data})
        
    } catch (error) {
        
    }

}
export const updateReceiptStatus = (id)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.updateReceiptStatus(id)
        dispatch({type:END_LOADING})

        console.log(data)

        // dispatch({type:FETCH_RECEIPTS_BY_ID, payload:data})
        
    } catch (error) {
        
    }

}