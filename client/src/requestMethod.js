import axios from "axios";
const BASE_URL = "http://localhost:5000/api/"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDU1NWUzNjJkZjdhZWQzY2NlNzRlOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTUxNTg2OCwiZXhwIjoxNjY1Nzc1MDY4fQ.22T2uu97k3giXj8bGuC1TsKBFtAtP1AFyu9jWgrABbU"

export const publicRequest = axios.create(
   { base_url:BASE_URL,}
)
export const userRequest = axios.create(
    { base_url:BASE_URL,
       headers : {token: `Bearer ${token}`} 
    }
 )