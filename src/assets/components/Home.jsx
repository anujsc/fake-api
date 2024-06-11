import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../../utilis/Context";
import axios from "../../utilis/Axios";
import { data } from "autoprefixer";

function Home() {
  const [products, setProducts] = useContext(ProductContext);
  const {search}= useLocation();
  const category= decodeURIComponent(search.split("=")[1]);
  
 const [filterproducts, setfilterproducts] = useState(null)

  const getproducts = async()=>{
    try {
        const {data} = await axios.get(`/products/category/${category}`);
       setfilterproducts (data);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    if (!filterproducts || category=="undefined") 
      setfilterproducts(products)
    
    if (category != "undefined")  
      setfilterproducts(products.filter(p=>p.category==category));
    
  },[category,products]);



  if (!products) {
    return <div>Loading...</div>; 
  }

  console.log(products);

  return (
    <>
      <Nav />
      <div className="w-[85%] h-full p-5 pt-[12.3vh] ml-[5.5vh] flex flex-wrap gap-3 overflow-x-hidden overflow-y-auto">
        {filterproducts && filterproducts.map((p) => (
          <Link
            to={`/details/${p.id}`}
            key={p.id}
            className="card p-3 w-[18%] h-[32vh] border border-slate-200 hover:shadow-2xl overflow-hidden flex-col items-center justify-center"
          >
            <div
              className="w-full h-[78%] bg-contain bg-no-repeat bg-center mb-1 hover:scale-110"
              style={{
                backgroundImage: `url(${p.image})`,
              }}
            ></div>
            <h1 className="  text-[2.1vh] hover:text-zinc-300 hover:font-semibold tracking-tight">
              {p.title}
            </h1>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
