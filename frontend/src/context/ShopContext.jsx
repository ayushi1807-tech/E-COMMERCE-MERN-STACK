import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './authContext'
import Product from '../pages/Product'
import axios from 'axios'
import {userDataContext} from './Usercontex'
export const shopDataContext = createContext()
function ShopContext({children}) {

    let [products , setProducts] = useState([])
    let [search , setSearch ] = useState('')
    let {userData} = useContext(userDataContext)
    let [showSearch, setShowSearch] = useState(false)
    let [cartItem , setCartItem ] = useState({})
    let {serverurl} = useContext(authDataContext)
    let currency = "₹"
    let delivery_fee = 50;

    const getProducts = async () =>{
        try{
            let result = await axios.get(serverurl +"/api/product/list")
            console.log(result.data)
            setProducts(result.data)
        }catch(error){
            console.log(error)
        }
    }

    const addToCart = async (itemId,size)=>{
        if(!size){
            console.log("Select Product Size")
            return;
        }
        let cartData = structuredClone(cartItem);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData);

        if(userData){
            try{
            let result =  await axios.post(serverurl + '/api/cart/add',{itemId,size},{withCredentials:true}) 
                    console.log(result.data) 
                    console.log(cartData)
            }
            catch(error){
                console.log(error)
            }
        }
    }

    const getUserCart = async () =>{
            try{
                const result = await axios.post(serverurl + '/api/cart/get',{},{withCredentials:true})
                setCartItem(result.data)
            }catch(error){
                console.log(error)
                toast.error(error.messege)
            }
        }

        const updateQuantity = async (itemId,size,quantity) =>{
            try{
                let cartData = structuredClone(cartItem);
                cartData[itemId][size] = quantity
                setCartItem(cartData)
                if(userData){
                    try{
                        await axios.post(serverurl + '/api/cart/update',{itemId,size,quantity},{withCredentials:true})
                    }catch(error){
                        console.log(error)
                        toast.error(error.messege)
                    }
                }
            }catch(error){
                    console.log(error)
            }

        }



    const getCartCount = () =>{
        let totalCount = 0;
        for(const items in cartItem){
            for(const item in cartItem[items]){
                try{
                    if(cartItem[items][item] > 0){
                        totalCount += cartItem[items][item]
                    }
                }catch(error){

                }
            }
        }
        return totalCount
    }

    const getCartAmount = () => {
        try {
            let totalAmount = 0;
            for (const items in cartItem) {
                let itemInfo = products.find((product) => product._id === items);
                for (const item in cartItem[items]) {
                    try {
                        if (cartItem[items][item] > 0) {
                            totalAmount += itemInfo.price * cartItem[items][item];
                        }
                    } catch (error) {}
                }
            }
            return totalAmount;
        } catch (error) {
            return 0;
        }
    };

    useEffect(()=>{
        getProducts()
    },[])

    useEffect(()=>{
        getUserCart()
    },[])


    let value = {
        products, currency , delivery_fee ,getProducts,
        search , setSearch, showSearch, setShowSearch,cartItem,
        addToCart,getCartCount,setCartItem,updateQuantity,getCartAmount
    }
  return (
  <shopDataContext.Provider value={value}>
    {children}
  </shopDataContext.Provider>
)
}

export default ShopContext
