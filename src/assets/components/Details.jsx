import axios from "../../utilis/Axios";
import React, { useContext } from "react";

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../utilis/Context";

function Details() {

  const Nav=useNavigate();
  const { id } = useParams();
  const [pro, setpro] = useState(null);
  const [products, setProducts] = useContext(ProductContext);
  // const getsingleproducts =async() =>{
  //   try {
  //       const {data} = await axios.get(`/products/${id}`);
  //       setpro(data);
  //   } catch (error) {
  //       console.log(error);
  //   }
  // }

  const deleteHandler=()=>{
    const Filterproducts= products.filter((p)=>p.id !== id);
    setProducts(Filterproducts);
    localStorage.setItem('products', JSON.stringify(Filterproducts));
    Nav("/");
  }

  useEffect(() => {
    if (!products) return;
    setpro(products.find((product) => product.id == id));
  }, []);

  if (!pro) {
    return <div>Loading...</div>; // Handle case where pro might be null
  }

  return (
    <div className="w-[80%] h-full  m-auto p-[10%] flex items-center  gap-[9vh]  ">
      <Link
        to="/"
        className=" font-semibold text-sky-600 border rounded-3xl mb-3 border-sky-600 px-3 py-1 "
      >
        Home
      </Link>
      <img
        className="h-[60vh] w-[45vh] object-contain "
        src={`${pro.image}`}
        alt=""
      />
      <div className="content">
        <h1 className=" text-[4vh] font-semibold tracking-widest ">
          {pro.title}
        </h1>
        <h2 className=" text-red-500 text-[2.5vh]">{pro.price}</h2>
        <h3 className=" font-light text-[2.3vh] opacity-60 ">{pro.category}</h3>
        <p className=" text-[3vh] tracking-tight leading-6">
          {pro.description}
        </p>
        <div className="mt-[2.2vh]">
          <Link className="mr-[10vh] rounded-[1vh] px-4 py-[.8vh] bg-[#ff9f00] text-zinc-50 border border-zinc-200 font-semibold ">
            Edit
          </Link>
          <button onClick={()=>deleteHandler(products.id)} className=" rounded-[1vh] px-3 py-[.8vh] bg-[#FB641B] text-zinc-50 border border-zinc-200 font-semibold">
            Delete
          </button >
        </div>
      </div>
    </div>
  );
}

export default Details;
