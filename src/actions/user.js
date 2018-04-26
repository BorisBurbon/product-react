import axios from "axios";
import api from "../api";

export const USER_PENDING = "USER_PENDING";
export const USER_FULFILLED = "USER_FULFILLED";
export const USER_REJECTED = "USER_REJECTED";
export const USER_SETNAME = "USER_SETNAME";



export function getLoginCreator(data) {
    return {
        type: "USER",
        payload: axios.post(`${api.login}`, data)
    }
}

export function getRegisterCreator(data) {
    return{
        type: "USER",
        payload: axios.post(`${api.register}`, data)
    }
}

export function userSetNameCreator(username) {
    return {
        type: USER_SETNAME,
        payload: username
    }
}
