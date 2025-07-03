import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'
import { authDataContext } from './authContext'
import axios from 'axios'



export const userDataContext = createContext()
function Usercontex({ children }) {
  let [userData, setUserData] = useState("")
  let { serverurl } = useContext(authDataContext)

  const getCurrentUser = async () => {
  try {
    let result = await axios.post(
      serverurl + "/api/user/getcurrentuser",
      {}, 
      { withCredentials: true } // config
    );
    setUserData(result.data);
    console.log(result.data);
  } catch (error) {
    setUserData(null);
    console.log(error);
  }
};

  useEffect(()=>{
    getCurrentUser()
  },[])


  let value = {
    userData,setUserData,getCurrentUser

  }

  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default Usercontex
