import React from "react";
import { Link } from "react-router-dom";

function Details() {
  return (
    <div className="w-[80%] h-full  m-auto p-[10%] flex items-center  gap-[9vh]  ">
      <img
      className="h-[60vh] w-[45vh] object-contain "
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <div className="content">
        <h1 className=" text-[4vh] font-semibold tracking-widest ">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h2 className=" text-red-500 text-[2.5vh]">109.95</h2>
        <h3 className=" font-light text-[2.3vh] opacity-60 ">men's clothing</h3>
        <p className=" text-[3vh] tracking-tight leading-6">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"</p>
        <div className="mt-[2.2vh]">
        <Link className="mr-[10vh] rounded-[1vh] px-4 py-[.8vh] bg-[#ff9f00] text-zinc-50 border border-zinc-200 font-semibold ">Edit</Link>
        <Link className=" rounded-[1vh] px-3 py-[.8vh] bg-[#FB641B] text-zinc-50 border border-zinc-200 font-semibold">Delete</Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
