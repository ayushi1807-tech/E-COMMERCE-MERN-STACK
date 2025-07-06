import React, { useContext, useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import Card from "../component/Card";

function Collections() {
  let [showFilter, setShowFilter] = useState(false);
  let { products,search , showSearch } = useContext(shopDataContext);
  let [filterProducts, setFilterProduct] = useState([]);
  let [category, setCategory] = useState([]);
  let [subCategory, setSubCategory] = useState([]);
  let [sortType, setSortType] = useState("relavent");

  const applyFilter = () => {
    let productCopy = products.slice();
    if(showSearch && search){
      productCopy = productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProduct(productCopy);
  };

  const sortProducts = (e) =>{
    let fbCopy = filterProducts.slice()

    switch(sortType){
        case 'low-high':
          setFilterProduct(fbCopy.sort((a,b)=>(a.price - b.price)))
          break;
        
        case 'high-low':
          setFilterProduct(fbCopy.sort((a,b)=>(b.price - a.price)))
          break;
        
        default:
          applyFilter()
          break;
    }
    }

    useEffect(()=>{
      sortProducts()
    },[sortType])
  

  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search,showSearch]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const togglesubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  return (
    <div
      className="w-[99vw] min-h-[100vh] 
    bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start flex-col 
    md:flex-row justify-start pt-[70px] overflow-x-hidden z-[2] pb-[110px]"
    >
      <div
        className={`md:w-[30px] lg:w-[20vw] w-[100vw]
      md:min-h-[100vh] ${
        showFilter ? "h-[45vh]" : "h-[8vh]"
      } p-[20px] border-r-[1px] border-gray-400
       text-[#aaf5fa] lg:fixed`}
      >
        <p
          className="text-[25px] font-semibold flex gap-[5px]
        items-center justify-start cursor-pointer"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
          {!showFilter && <FaAngleRight className="text-[18px] md:hidden" />}
          {showFilter && <FaChevronDown className="text-[18px] md:hidden" />}
        </p>
        <div
          className={`border-[2px] border-[#dedcdc] 
        pl-5 py-3 mt-6 bg-slate-600 ${showFilter ? "" : " hidden"} md:block`}
        >
          <p className="text-[18px] text-[#f8fafa]">Categories</p>
          <div
            className="w-[230px]  h-[120px] flex items-start
          justify-center gap-[10px] flex-col"
          >
            <p className="flex items-center justify-center gap-[10px] text-[16px] font-light">
              {" "}
              <input
                type="checkbox"
                value={"Men"}
                className="w-3"
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex items-center justify-center gap-[10px] text-[16px] font-light">
              {" "}
              <input
                type="checkbox"
                value={"Women"}
                className="w-3"
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex items-center justify-center gap-[10px] text-[16px] font-light">
              {" "}
              <input
                type="checkbox"
                value={"Men"}
                className="w-3"
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>
        <div
          className={`border-[2px] border-[#dedcdc] 
        pl-5 py-3 mt-6 bg-slate-600 ${showFilter ? "" : "hidden"} md:block`}
        >
          <p className="text-[18px] text-[#f8fafa]">Sub-Categories</p>
          <div
            className="w-[230px]  h-[120px] flex items-start
          justify-center gap-[10px] flex-col"
          >
            <p className="flex items-center justify-center gap-[10px] text-[16px] font-light">
              <input
                type="checkbox"
                value={"TopWear"}
                className="w-3"
                onChange={togglesubCategory}
              />
              TopWear
            </p>
            <p className="flex items-center justify-center gap-[10px] text-[16px] font-light">
              <input
                type="checkbox"
                value={"BottomWear"}
                className="w-3"
                onChange={togglesubCategory}
              />
              BottomWear
            </p>
            <p className="flex items-center justify-center gap-[10px] text-[16px] font-light">
              <input
                type="checkbox"
                value={"WinterWear"}
                className="w-3"
                onChange={togglesubCategory}
              />
              WinterWear
            </p>
          </div>
        </div>
      </div>
      <div className="lg:pl-[20%] md:py-[10px]">
        <div
          className=" md:w-[80vw] 
          w-[100vw] p-[20px] flex justify-between 
          flex-col lg:flex-row lg:px-[50px]"
        >
          <Title text1={"All"} text2={" Collections"} />
          <select
            name=""
            id=""
            className="bg-slate-600 
            w-[60%] md:w-[200px] h-[50px] text-[white] 
            rounded-lg hover:border-[#46d1f7] border-[2px]"
            onChange={(e)=>setSortType(e.target.value)}
          >
            <option value="relavent" className="w-[100%] h-[100%]">
              Sort By: Relavent
            </option>
            <option value="low-high" className="w-[100%] h-[100%]">
              Sort By: Low to High
            </option>
            <option value="high-low" className="w-[100%] h-[100%]">
              Sort By: High to Low
            </option>
          </select>
        </div>
        <div
          className="lg:w-[80vw] md:w-[60vw] w-[100vw] min-h-[70vh] flex justify-center 
          items-center flex-wrap gap-[30px]"
        >
          {filterProducts.map((item, index) => (
            <Card
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;
