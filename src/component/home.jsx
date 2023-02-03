import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [fetchdata, setFetchData] = useState([]);
  const [count, setCount] = useState(1);
  const[search,setSeach]=useState("")
  const [showperpage, setShowPerPage] = useState(3);
  const [paginations, setPaginations] = useState({
    start: 0,
    end: showperpage,
  });

  const dispatch = useDispatch();
  const router = useNavigate();
  const onchanger = (start, end) => {
    setPaginations({ start: start, end: end });
  };
  const total = fetchdata.length;
  useEffect(() => {
    const value = showperpage * count;
    onchanger(value - showperpage, value);
  }, [count]);
  useEffect(() => {
    try {
      const data = async () => {
        const apidata = await axios.get("https://fakestoreapi.com/products");
        let res = await apidata.data;
        setFetchData(res);
      };
      data();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (count === 1) {
        setCount(1);
      } else {
        setCount(count - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showperpage) === count) {
        setCount(count);
      } else {
        setCount(count + 1);
      }
    }
  };

  const handleAddToCart = (fetching) => {
    dispatch(addToCart(fetching));
    router("/cart");
  };

  return (  
    <>
      <div className="container ">
        <div className="row ">
         <div className="d-flex justify-content-center">
         <input type="text"placeholder="Search Products ....." className="w-25 mt-4"onChange={(e)=>{setSeach(e.target.value)}}/>
         </div>
          {fetchdata.filter((items)=>{
            if(search==""){
              return items;
            }else if( items.title.toLowerCase().includes(search.toLowerCase())){
              return items;
            }
          })
            .slice(paginations.start, paginations.end)
            .map((items, id) => {
              return (
                <>
                  <div className="shadow p-5 mt-5 col-lg-4  " key={id}>
                    <h4>{items.id}</h4>
                    <h4>
                      <img
                        src={items.image}
                        width={200}
                        height={200}
                        alt="CAR"
                      />
                    </h4>
                    <h4 className="text-danger">Title:{items.title}</h4>
                    <h4 className="text-info">Price:${items.price}</h4>
                    <span
                      className="text-primary"
                      onClick={() => handleAddToCart(items)}
                    >
                      Add to cart
                    </span>
                  </div>
                </>
              );
            })}
          <div className="d-flex justify-content-between mt-5 mb-4">
            <button
              className="btn btn-primary"
              onClick={() => onButtonClick("prev")}
            >
              Previous
            </button>
            <button
              className="btn btn-primary"
              onClick={() => onButtonClick("next")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
