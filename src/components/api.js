import axios from "axios";
const BASE_URL = "https://api.spacexdata.com/";
const VERSION = "v3";

export const get = (endPointURL) =>{
    return axios.get(`${BASE_URL}${VERSION}/${endPointURL}`);
}