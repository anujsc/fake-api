import React, { useState } from "react";

function Create() {
  const [Image, setImage] = useState("");
  const [Title, setTitle] = useState("");
  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState("");
  const [Desc, setDesc] = useState("");
  return (
    <form className="flex flex-col items-center p-[5%] w-screen h-screen  ">
      <h1 className="  border-[#F4F4F5] border-2 px-3 py-2 w-1/2 capitalize font-medium tracking-tight text-3xl mb-[2.7vh] ">
        Add new product
      </h1>
      <hr className=" mb-3 w-[50%]" />
      <input
        type="url"
        placeholder="Image url"
        className=" text-[2.4vh] mb-3 bg-zinc-100 border-opacity-50 rounded p-3 w-1/2 "
        onChange={(e) => setImage(e.target.value)}
        value={Image}
      />

      <input
        type="text"
        placeholder="Title"
        className=" text-[2.4vh] mb-3 bg-zinc-100 border-opacity-50 rounded p-3 w-1/2 "
        onChange={(e) => setTitle(e.target.value)}
        value={Title}
      />

      <div className=" w-[50%] flex gap-3 justify-between ">
        <input
          type="text"
          placeholder="Category"
          className=" text-[2.4vh] mb-3 bg-zinc-100 border-opacity-50 rounded p-3 w-1/2 "
          onChange={(e) => setCategory(e.target.value)}
          value={Category}
        />
        <input
          type="number"
          placeholder="Price"
          className=" text-[2.4vh] mb-3 bg-zinc-100 border-opacity-50 rounded p-3 w-1/2 "
          onChange={(e) => setPrice(e.target.value)}
          value={Price}
        />
      </div>
      <textarea
        rows="10"
        placeholder="Type Description ....."
        className=" text-[2.4vh] mb-3 bg-zinc-100 border-opacity-50 rounded p-3 w-1/2 "
        onChange={(e) => setDesc(e.target.value)}
          value={Desc}
      ></textarea>
    </form>
  );
}

export default Create;
