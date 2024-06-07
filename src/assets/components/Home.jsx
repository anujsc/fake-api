import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../../utilis/Context";

function Home() {
  const [products]=useContext(ProductContext);
  console.log(products);
  return (
    <>
      <Nav />
      <div className="w-[85%] h-full p-5 pt-[12.3vh] ml-[5.5vh] flex flex-wrap gap-3 overflow-x-hidden overflow-y-auto  ">

        {products.map((p) => (
             <Link to="/details/1" className="card p-3 w-[18%] h-[32vh] border border-slate-200 hover:shadow-2xl flex-col items-center justify-center  ">
             <div
               className=" w-full h-[78%] bg-contain bg-no-repeat bg-center mb-1 hover:scale-110 "
               style={{
                 backgroundImage:
                   `url(${p.image})`  ,
               }}
             ></div>
             <h1 className=" hover:text-zinc-300 hover:font-semibold tracking-tight">
               {p.title}
             </h1>
           </Link>
        
      ))}
  
      </div>
    </>
  );
}

export default Home;
