const _ ={
 staging :{
     baseurl:"http://localhost:3000/"
 },
 production:{
     baseurl:"https://url-shortner-instacar.herokuapp.com/"
 }
}
export const config =process.env.NODE_ENV === "production" || true ? _["production"]:_["staging"];