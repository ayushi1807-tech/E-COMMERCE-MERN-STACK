import React, { useContext, useEffect, useState } from "react";
import Nav from "../Component/Nav";
import { MdDeleteForever } from "react-icons/md";
import Sidebar from "../Component/Sidebar";
import { AuthDataContext } from "../context/AuthContext";
import axios from "axios";

function List() {
  let [list, setList] = useState([]);
  let { serverurl } = useContext(AuthDataContext);

  const fetchlist = async () => {
    try {
      let result = await axios.get(serverurl + "/api/product/list", {
        withCredentials: true,
      });
      setList(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const removelist = async(id) =>{
    try{
      let result = await axios.post(`${serverurl}/api/product/remove/${id}`,{},{withCredentials:true});
      if(result.data){
        fetchlist()
      }else{
        console.log("Error in removing product");
      }
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchlist();
  }, []);
  return (
    <>
      <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#08171b] text-white">
        <Nav />

        <div className="w-[100%] h-[100%] flex items-center justify-start">
          <Sidebar />
          <div className="w-[82%] h-[100%] lg:ml-[320px] md:ml-[230px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] pl-[10%]">
            <div className="w-[400px] h-[50px] text-[28px] md:text-[40px] mb-[20px] text-white">
              All Listed Products
            </div>
            {list?.length > 0 ? (
              list.map((item, index) => (
                <div
                  className="w-[90%] md:h-[120px] h-[90px] bg-slate-600 
                  rounded-xl flex items-center justify-between gap-[20px] p-[10px] md:px-[30px]"
                  key={index}
                >
                  <div className="flex items-center gap-[20px]">
                    <img
                      src={item.image1}
                      alt=""
                      className="w-[80px] md:w-[120px] h-[70px] md:h-[90px] rounded-lg object-cover"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="md:text-[20px] text-[15px] text-[#bef0f3] font-semibold">
                        {item.name}
                      </div>
                      <div className="md:text-[17px] text-[15px] text-[#bef3da]">
                        {item.category}
                      </div>
                      <div className="md:text-[17px] text-[15px] text-[#bef3da]">
                        ₹ {item.price}
                      </div>
                    </div>
                  </div>
                  <div className="h-[100%] flex items-center">
                   
                      <MdDeleteForever className="w-[45px] h-[45px] rounded-md cursor-pointer hover:bg-red-300 p-1 transition" onClick={()=>removelist(item._id)}/>
                   
                  </div>
                </div>
              ))
            ) : (
              <div className="text-white text-lg">No Products Available</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
