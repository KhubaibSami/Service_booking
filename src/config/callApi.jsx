import axios from "axios"


const axiosInstances = axios.create({
  baseURL:"http://localhost:3201",
  headers:{
    "Content-Type":"application/json"
  },
  timeout:"10000",
  withCredentials:"true"
})

export default axiosInstances;