import React from 'react'
import Nav from '../Component/Nav'
import Sidebar from '../Component/Sidebar'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthDataContext } from '../context/AuthContext'
import axios from 'axios'
import { useEffect } from 'react'
import { SiEbox } from "react-icons/si";


function Orders() {
  let [orders,setOrders] = useState([])
  let {serverurl} = useContext(AuthDataContext)

  const fetchAllOrders = async () =>{
    try{
        const result = await axios.post(
          serverurl + "/api/order/list",
          {},
          { withCredentials: true }
        );
        setOrders(result.data);
    }catch(error){
      console.log(error)
    }
    
  }

  const statusHandler = async (e,orderId)=>{
    try{
      const result = await 
      axios.post(serverurl + '/api/order/status',
        {orderId,status:e.target.value},{withCredentials:true})
        if(result.data){
          await fetchAllOrders()
        }
    }catch(error){
      console.log(error)
      toast.error(result.data.messege)
    }
  }

  useEffect(()=>{
    fetchAllOrders()
  
  },[])

  return (
    <div
      className="w-[100vw] min-h-[100vh] 
      bg-gradient-to-l from-[#141414] 
      to-[#0c2025] text-[white]"
    >
      <Nav />
      <div
        className="w-[100%] h-[100%] flex 
      items-center lg:justify-start justify-center"
      >
        <Sidebar />
        <div
          className="lg:w-[85%] md:w-[70%] h-[100%]
         lg:ml-[310px] md:ml-[250px] mt-[70px] flex flex-col
          gap-[30px] overflow-x-hidden py-[50px] ml-[100px]"
        >
          <div
            className="w-[400px] h-[50px] text-[28px]
            md:text-[40px] mb-[20px] text-white"
          >
            All Orders List
          </div>
          {orders.map((order, index) => (
            <div
              key={order._id || index}
              className="w-[90%] h-[40%] bg-slate-600
                rounded-xl flex lg:items-center items-start 
                justify-between flex-col gap-[20px] lg:flex-row p-[10px] md:px-[20px]"
            >
              <SiEbox className="w-[60px] h-[60px] text-[black] p-[5px] rounded-lg bg-white" />
              <div
                className="flex items-center justify-center
                 flex-col gap-[5px] text-[16px] text-[#56dbfc]"
              >
                {order.items && order.items.length > 0 ? (
                  order.items.map((item, idx) => (
                    <span key={item._id || idx}>
                      {item.name && typeof item.name === "string"
                        ? item.name.toUpperCase()
                        : ""}{" "}
                      * {item.quantity} {item.size}
                      {idx !== order.items.length - 1 && <span>, </span>}
                    </span>
                  ))
                ) : (
                  <span>No items in this order.</span>
                )}
              </div>
              <div className="text-[15px] text-green-100">
                <p>{order.address.firstName + " " + order.address.lastName}</p>
                <p>{order.address.street + " "}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    " " +
                    order.address.country +
                    " " +
                    order.address.pincode}
                </p>
                <p>{order.address.phone}</p>
              </div>
              <div className="text-[15px] text-green-100">
                <p>Items: {order.items.length}</p>
                <p>Mwthod: {order.paymentMethod}</p>
                <p>Payment : {order.payment ? "Done" : "Pending"}</p>
                <p>Date : {new Date(order.date).toLocaleDateString()}</p>
                <p className='text-[20px] text-white'>₹ {order.amount}</p>
              </div>
              <select name="" id="" value={order.status}
               className='px-[5px] py-[10px] bg-slate-500
                rounded-lg border-1px border-[#96eef3]' onChange={(e)=>statusHandler(e,order._id)}>
                    <option value="Order Placed">Order placed</option>
                    <option value="packing">packing</option>
                    <option value="shipped">Shipped</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders
