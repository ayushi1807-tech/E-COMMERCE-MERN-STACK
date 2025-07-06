import React, { useContext, useState } from "react";
import Title from "../component/Title";
import CartTotal from "../component/CartTotal";
import razorpay from '../assets/razorpay.jpg'
import { data, useNavigate } from "react-router";
import { shopDataContext } from "../context/ShopContext";
import { authDataContext } from "../context/authContext";
import axios from "axios";

export default function PlaceOrder() {
  let [method, setMethod] = useState("cod");
  let navigate = useNavigate()
  const {cartItem,setCartItem , getCartAmount , delivery_fee ,products } = useContext(shopDataContext)
  let {serverurl} = useContext(authDataContext)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: "",
  })

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      let orderItems = []
      for (const items in cartItem){
        for(const item in cartItem[items]){
          if(cartItem[items][item] > 0){
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if(itemInfo){
              itemInfo.size = item
              itemInfo.quantity = cartItem[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address:formData,
        items:orderItems,
        amount:getCartAmount() + delivery_fee
      }
      switch(method){
        case 'cod' :
          const result = await axios.post(serverurl + '/api/order/placeorder', {
            address: formData,
            items: orderItems,
            amount: getCartAmount() + delivery_fee
          }, { withCredentials: true })
          console.log(result.data)
          if(result.data){
              setCartItem({})
              navigate("/order")
          }else{
            console.log(result.data.messege)
          }
          break;
          default:
          break;
      }
    } catch (error) {
      console.error("Order error:", error);
    }
  }

  return (
    <div className="w-screen min-h-screen flex flex-col md:flex-row bg-gradient-to-l from-[#141414] to-[#0c2025]">

      <div className="w-full md:w-1/2 flex items-center justify-center">
        <form action="" className="lg:w-[70%] w-[95%] lg:h-[70%] h-[100%]" onSubmit={handlePlaceOrder}>
          <div className="py-[10px]">
            <Title text1={"DELIVERY "} text2={" INFORMATION"} />
          </div>
          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
            <input
              type="text"
              placeholder="First Name"
              className="w-[48%] h-[50px] rounded-md bg-slate-700
             placeholder:text-white text-[18px] px-[20px] shadow-sm
              shadow-[#343434]"
              required
              name="firstName"
              value={formData.firstName}
              onChange={onChangeHandler}
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-[48%] h-[50px] rounded-md bg-slate-700
             placeholder:text-white text-[18px] px-[20px] shadow-sm
              shadow-[#343434]"
              required
              name="lastName"
              value={formData.lastName}
              onChange={onChangeHandler}
            />
          </div>

          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
            <input
              type="email"
              placeholder="Email address"
              className="w-[100%] h-[50px] rounded-md bg-slate-700
             placeholder:text-white text-[18px] px-[20px] shadow-sm
              shadow-[#343434]"
              required
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
            />
          </div>
          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
            <input
              type="text"
              placeholder="Street"
              className="w-[100%] h-[50px] rounded-md bg-slate-700
             placeholder:text-white text-[18px] px-[20px] shadow-sm
              shadow-[#343434]"
              required
              name="street"
              value={formData.street}
              onChange={onChangeHandler}
            />
          </div>

          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
            <input
              type="text"
              placeholder="City"
              className="w-[48%] h-[50px] rounded-md bg-slate-700
             placeholder:text-white text-[18px] px-[20px] shadow-sm
              shadow-[#343434]"
              required
              name="city"
              value={formData.city}
              onChange={onChangeHandler}
            />

            <input
              type="text"
              placeholder="State"
              className="w-[48%] h-[50px] rounded-md bg-slate-700
             placeholder:text-white text-[18px] px-[20px] shadow-sm
              shadow-[#343434]"
              required
              name="state"
              value={formData.state}
              onChange={onChangeHandler}
            />
          </div>
          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
            <input
              type="number"
              placeholder="Pincode"
              className="w-[48%] h-[50px] rounded-md bg-slate-700
             placeholder:text-white text-[18px] px-[20px] shadow-sm
              shadow-[#343434]" 
              required
              name="pincode"
              value={formData.pincode}
              onChange={onChangeHandler}
            />

            <input
              type="text"
              placeholder="Country"
              className="w-[48%] h-[50px] rounded-md bg-slate-700
             placeholder:text-white text-[18px] px-[20px] shadow-sm
              shadow-[#343434]"
              required
              name="country"
              value={formData.country}
              onChange={onChangeHandler}
            />
          </div>

          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
            <input
              type="tel"
              placeholder="Phone"
              className="w-[100%] h-[50px] rounded-md bg-slate-700
             placeholder:text-white text-[18px] px-[20px] shadow-sm
              shadow-[#343434]"
              required
              name="phone"
              value={formData.phone}
              onChange={onChangeHandler}
            />
          </div>

        </form>
      </div>

      <div
        className="lg:w-[50%] w-[100%] min-h-[100%] 
        flex items-center justify-center gap-[30px]"
      >
        <div
          className="lg:w-[70%] w-[90%] lg:h-[70%] h-[100%]
           flex flex-col items-center gap-[30px] "
        >
          <CartTotal />
          <div className="py-[10px]">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
          </div>
          <div className="w-full flex items-start justify-center gap-[50px] mt-[20px] lg:mt-0">
            <button onClick={() => setMethod('razorpay')}
              className={`w-[150px] h-[50px] rounded-sm ${method === 'razorpay' ? 'border-[5px] border-blue-900 rounded-sm' : ''}`}>
              <img src={razorpay} alt="" className="w-full h-full object-fill rounded-sm" />
            </button>
            <button onClick={() => setMethod('cod')}
              className={`w-[200px] h-[50px] bg-gradient-to-t from-[#95b3f8] to-[white]
                 text-[14px] px-[20px] rounded-sm text-[#332f6f] font-bold ${method === 'cod' ? 'border-[5px] border-blue-900 rounded-sm' : ''}`}>
              CASH ON DELIVERY
            </button>
          </div>
          <div className="w-full flex justify-center mt-2 ">
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="text-[18px] active:bg-slate-500 
                cursor-pointer bg-[#3bcee8] py-[10px] px-[50px] rounded-2xl
                text-white flex items-center gap-[20px] border border-[#80808049] 
                shadow-md transition hover:bg-[#2bb3c0]"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
