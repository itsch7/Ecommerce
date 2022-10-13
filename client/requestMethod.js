import axios from "axios";
base_Url = "http://localhost:5000/api/";
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDU1NWUzNjJkZjdhZWQzY2NlNzRlOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTY1Mjg4MywiZXhwIjoxNjY1OTEyMDgzfQ.-BxdoLHnflm4MVyS4u23y1Vq45gyv6u3fixLEXIUPog"

export const publicRequest =axios.create({
base_Url: base_Url
})

 export const userRequest = axios.create({
    base_Url: base_Url,
    headers: { token:`Bearer ${token}` }
});