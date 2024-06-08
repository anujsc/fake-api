import React, { useContext, useEffect } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../../utilis/Context";

function Home() {
  const [products, setProducts] = useContext(ProductContext);

  // useEffect(() => {
  //   // Simulating a fetch call to load products
  //   setTimeout(() => {
  //     setProducts([
  //       { id: 1, title: "Product 1", image: "/path/to/image1.jpg" },
  //       { id: 2, title: "Product 2", image: "/path/to/image2.jpg" },
  //     ]);
  //   }, 1000);
  // }, [setProducts]);

  if (!products) {
    return <div>Loading...</div>; // Handle case where products might be null
  }

  return (
    <>
      <Nav />
      <div className="w-[85%] h-full p-5 pt-[12.3vh] ml-[5.5vh] flex flex-wrap gap-3 overflow-x-hidden overflow-y-auto">
        {products.map((p) => (
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
            <h1 className=" text-[2.1vh] hover:text-zinc-300 hover:font-semibold tracking-tight">
              {p.title}
            </h1>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
