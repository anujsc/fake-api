import React from 'react'

function Nav() {
  return (
    <nav className=" bg-slate-100 w-[15%] h-full flex flex-col items-center pt-5 ">
    <a
      className=" px-5 py-3 border text-stone-500 border-slate-500 font-normal tracking-tight "
      href="/create"
    >
      Add New Products
    </a>

    <hr className="w-[85%] my-3 " />
    <h1 className=" text-[3.3vh] font-semibold mb-3 w-[80%]">
      Category Filter
    </h1>
    <ul className="w-[70%] text-sm font-thin">
      <li className="mb-1 flex items-center">
        <span className=" mr-1 h-[15px] w-[15px] rounded-sm bg-blue-400"></span>{" "}
        Category 1
      </li>
      <li className="mb-1 flex items-center">
        <span className=" mr-1 h-[15px] w-[15px] rounded-sm bg-red-400"></span>{" "}
        Category 2
      </li>
      <li className="mb-1 flex items-center">
        <span className=" mr-1 h-[15px] w-[15px] rounded-sm bg-green-400"></span>{" "}
        Category 3
      </li>
    </ul>
  </nav>

  )
}

export default Nav