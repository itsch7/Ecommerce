import { publicRequest } from "../requestMethod"
import { Login_Begin,Login_Failure, Login_Sucess } from "./userRedux";




export const login = async(dispatch,user)=>{
    dispatch(Login_Begin());
    try{
         const res =await publicRequest.post("http://localhost:5000/api/auth/login",user);
         dispatch(Login_Sucess(res.data))
    }
    catch(err){
      dispatch(Login_Failure());
    }
}