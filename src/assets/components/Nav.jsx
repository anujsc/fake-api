import React, { useContext } from 'react'
import { ProductContext } from '../../utilis/Context';
import { Link } from 'react-router-dom';

function Nav() {

  const [products, setProducts] = useContext(ProductContext);

  let dist_cat= products && products.reduce((acc,cv)=>[...acc,cv.category],[]);
  dist_cat=[...new Set(dist_cat)];
  

  return (
    
    <>
    
    <nav className=" bg-slate-100 w-[15%] h-full flex flex-col items-center pt-5 ">
    <Link to="/" className=' font-semibold shadow-lg shadow-blue-500/50  border rounded-3xl mb-3 border-sky-00 px-3 py-1 '>Home</Link>
      <Link to="/create"
        className=" px-5 py-3 border text-stone-500 border-slate-500 font-normal tracking-tight "
        
      >
        Add New Products
      </Link>
  
      <hr className="w-[85%] my-3 " />
      <h1 className=" text-[3.3vh] font-semibold mb-3 w-[80%]">
        Category Filter
      </h1>
      <div className="w-[70%] text-sm font-light capitalize tracking-wide">
        {dist_cat.map((c,i)=>
        <Link to={`/?category=${c}`} className="mb-1 flex items-center">
        <span className={`mr-1 h-[15px] w-[15px] rounded-sm ${i===1?"bg-green-500":""} ${i===2?"bg-red-500":""} ${i===3?" bg-yellow-500":"bg-blue-500"} `} ></span>{" "}
        {c}
      </Link>
        )}
        
        
      </div>
    </nav>
    </>

  )
}

export default Nav