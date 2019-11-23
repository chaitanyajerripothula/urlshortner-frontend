import axios from 'axios';

import { apis } from "../App.apis";
import { config } from "../config";

const{baseurl} =config;

const AxiosConfig = {
  headers: { 'Content-Type': 'application/json','Accept': 'application/json'},
  };



export const UrlService ={
    getshorturl: async ({url}) =>{
         const  response = await axios.post(baseurl+apis.getshorturl,{url},AxiosConfig);
        return response.data;
    },
    getlongurl:async ({url})=>{
      const  response = await axios.post(baseurl+apis.getlongurl,{url},AxiosConfig);
     return response.data;
    }
}
