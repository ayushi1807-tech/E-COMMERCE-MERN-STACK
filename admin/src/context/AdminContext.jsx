import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { AuthDataContext } from './AuthContext'
import axios from 'axios'
import { useEffect , useState} from 'react'

export const adminDataContext = createContext()
function AdminContext({children}) {
    let [adminData, setAdminData] = useState(null)
    let {serverurl} = useContext(AuthDataContext);


    const getAdmin = async () => {
        try{
          let result = await axios(serverurl + "/api/user/getadmin", {withCredentials: true});
            setAdminData(result.data);
            console.log(result.data);

        }catch(error){  
          setAdminData(null);
          console.log(error);
            }  
          }

          useEffect(()=>{
            getAdmin();
          },[])

          let value = {
            adminData,
            setAdminData,
            getAdmin
          }

            
  return (
    <div>
      <adminDataContext.Provider value={value}>
        {children}
      </adminDataContext.Provider>
    </div>
  )
}

export default AdminContext
