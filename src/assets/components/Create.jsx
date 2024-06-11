import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../utilis/Context";
import { nanoid } from "nanoid/non-secure";


function Create() {
  const navigate=useNavigate();

  const [products, setProducts] = useContext(ProductContext);

  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const addProductsHandler = (e) => {
    e.preventDefault();

    if(
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5 
    ) {
       alert("Each inp must have atleast 4 characters");
       return;
    }

    const producta = {
     id:nanoid(),
      image,
      title,
      category,
      price,
      description,
    };

    setProducts([...products,producta]);
    localStorage.setItem("products",JSON.stringify([...products,producta]));
    navigate("/");

    
  };
  return (
    <>
      <div className=" absolute p-4">
        <Link
          to="/"
          className="font-semibold text-sky-600 border rounded-3xl mb-3 border-sky-600 px-3 py-1"
        >
          home
        </Link>
      </div>
      <form
        onSubmit={addProductsHandler}
        className="flex flex-col items-center p-[5%] w-screen h-screen  "
      >
        <h1 className="  border-[#F4F4F5] border-2 px-3 py-2 w-1/2 capitalize font-medium tracking-tight text-3xl mb-[2.7vh] ">
          Add new product
        </h1>
        <hr className=" mb-3 w-[50%]" />
        <input
          type="url"
          placeholder="image url"
          className=" text-[2.4vh] mb-3 bg-zinc-100 border-opacity-50 rounded p-3 w-1/2 "
          onChange={(e) => setimage(e.target.value)}
          value={image}
        />

        <input
          type="text"
          placeholder="title"
          className=" text-[2.4vh] mb-3 bg-zinc-100 border-opacity-50 rounded p-3 w-1/2 "
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />

        <div className=" w-[50%] flex gap-3 justify-between ">
          <input
            type="text"
            placeholder="category"
            className=" text-[2.4vh] mb-3 bg-zinc-100 border-opacity-50 rounded p-3 w-1/2 "
            onChange={(e) => setcategory(e.target.value)}
            value={category}
          />
          <input
            type="number"
            placeholder="price"
            className=" text-[2.4vh] mb-3 bg-zinc-100 border-opacity-50 rounded p-3 w-1/2 "
            onChange={(e) => setprice(e.target.value)}
            value={price}
          />
        </div>
        <textarea
          rows="8"
          placeholder="Type Description ....."
          className=" text-[2.4vh] mb-3 bg-zinc-100 border-opacity-50 rounded p-3 w-1/2 "
          onChange={(e) => setdescription(e.target.value)}
          value={description}
        ></textarea>

        <button className=" bg-[#F4F4F5] px-3 py-1 border-2 font-semibold opacity-70 ">
          Add new product
        </button>
      </form>
    </>
  );
}

export default Create;
