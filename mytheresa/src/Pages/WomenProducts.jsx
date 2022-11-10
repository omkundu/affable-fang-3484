import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WomenCard from "../Components/WomenCard";
import { Pagination } from "../Components/Pagination";
import { Button } from '@chakra-ui/react'

import { getWomensProducts } from "../Redux/Women/action";
// import "../Styles/women.css";
import WomenFilter from "../Components/WomenFilter";
import { useLocation, useSearchParams } from "react-router-dom";

const WomenProducts = () => {
  const womensdata = useSelector((state) => state.WomenReducer.womensdata);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const  location = useLocation();
  
  const handlePageChange = (change) => {
    setPage((prev) => prev + change);
  };

  // var data112 = require("../Components/product.json");
  // const [products, setProducts] = useState(data112.womensdata)


  // const handlechange = (e) => {
  //   if (e.target.value == "low-to-high") {
  //     setProducts((product) => [...products.sort((a, b) => (a.price - b.price))])
  //   }
  //   else if (e.target.value == "high-to-low") {
  //     setProducts((product) => [...products.sort((a, b) => (b.price - a.price))])
  //   }

  // }
  // // console.table(products);

  useEffect(() => {
    if(location || womensdata.length === 0){
      let getGroceriesParams = {
          params: {
              category: searchParams.getAll("category"),
              brand: searchParams.getAll("brand"),
          }
      }
      dispatch(getWomensProducts({page}, getGroceriesParams));
  }
  }, [page, location.search]);

  const handleSortBy = (sort, order) => {
    dispatch(getWomensProducts({ sort, order }));
  };


  return (
    <div className="groceries-container">
      <div className="top-Section" style={{marginTop:"110px"}}>
        <p> The </p>
        <p> Finest </p>
        <p> Edit</p>
      </div>
      <div className="groceries-body">
        <div className="left">{/* here write code for filtering */}
          <div className='filters-container'>
            <div className='filters-heading'>
               <p>Filters</p>
            </div>
            <div className="categories-cntr">
               <p>Categories</p>
               <WomenFilter />
            </div>
          </div>
        </div>
  {/* right section Start */}
        <div className="right">
          <div className="top-section-imgcontainer">
            
          </div>
    {/* Sorting section Start */}
          <div className="right-sorting-container">
            <p> 423 products </p>
            <div className="sort-box">
               {/* start sorting code */}
             
               <select>
                <option>Sort-By</option>
                <option onClick={() => handleSortBy("price", "asc")} >Price-Low To High</option>
                <option onClick={() => handleSortBy("price", "desc")}>Price-High To Low</option>
            </select>

                {/* <p>Sort by:</p>
                <Button colorScheme='teal' variant='outline' onClick={() => handleSortBy("title", "asc")} > Popularity </Button>
                <Button colorScheme='teal' variant='outline' onClick={() => handleSortBy("price", "desc")} > High to Low </Button>
                <Button colorScheme='teal' variant='outline' onClick={() => handleSortBy("price", "asc")} >  Low to High </Button>
                <Button colorScheme='teal' variant='outline' onClick={() => handleSortBy("discount", "desc")} >  Discount </Button>
                <Button colorScheme='teal' variant='outline'  onClick={() => handleSortBy("none", "none")} >  All Products </Button> */}
            </div>
          </div>
    {/* Sorting section End */}

    {/* middle section Start */}
          <div className="middle-section-parent">
            <div className="middle-section-heading">
              {/* <h3 className="heading">ALL PRODUCTS</h3> */}
            </div>
            <div className="middle-section">
              {womensdata.length > 0 &&
                womensdata.map((d) => {
                  return <WomenCard key={d.id} item={d} productData={d} />;
                })}
            </div>
          {/* ******* pagination start ************ */}
            <div className="pagination-container"> 
              <Pagination 
              totalPages={2}
              handlePageChange={handlePageChange}
              currentPage={page}
              />
            </div>
          {/* ******* pagination End ************ */}
          </div>
    {/* middle section End */}
        </div>
  {/* Right section End */}
      </div>
    </div>
  );
};

export default WomenProducts;
