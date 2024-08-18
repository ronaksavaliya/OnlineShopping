import React, { memo, useEffect, useState } from "react";
import "./Products.css";
import Sorting from "../Sorting/Sorting";
import ProductView from "../ProductView/ProductView";
import GridView from "../ProductView/GridView";
import ListView from "../ProductView/ListView";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import PriceRange from "../PriceRange/PriceRange";

// import { actualData } from "../ActualData";

function Products() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actualProducts, setActualProucts] = useState([]);
  const [productsBwRange, setProductsBwRange] = useState([]);
  const [view, setView] = useState({
    grid: true,
    list: false,
  });

  async function getData() {
    const response = await fetch(
      "https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products"
    );
    const actualData = await response.json();
    setActualProucts(actualData);
    setdata(actualData);
    setProductsBwRange(actualData);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  function productsSort(type) {
    if (type === "lowToHigh") {
      const tempData = [...data];
      const tempData2 = [...productsBwRange];

      tempData.sort((a, b) => {
        return a.price.value - b.price.value;
      });

      tempData2.sort((a, b) => {
        return a.price.value - b.price.value;
      });

      setdata(tempData);
      setProductsBwRange(tempData2);
    } else if (type === "highToLow") {
      // const tempData = [...data];
      // tempData.sort((a, b) => {
      //   return b.price.value - a.price.value;
      // });
      // setdata(tempData);
      // setProductsBwRange(tempData);
      const tempData = [...data];
      const tempData2 = [...productsBwRange];

      tempData.sort((a, b) => {
        return b.price.value - a.price.value;
      });

      tempData2.sort((a, b) => {
        return b.price.value - a.price.value;
      });

      setdata(tempData);
      setProductsBwRange(tempData2);
    } else {
      setdata(actualProducts);
    }
  }

  function changeView(type) {
    if (type === "grid") {
      setView({
        grid: true,
        list: false,
      });
    } else {
      setView({
        grid: false,
        list: true,
      });
    }
  }

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <>
        <div style={{marginBottom:'50px', display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", width: "100%" }}>
            <div className="productView">
              <ProductView changeView={changeView}/>
            </div>
              <Sorting productsSort={productsSort}/>
            <div className="priceRange">
              <PriceRange
                products={data}
                setProductsBwRange={setProductsBwRange}
              />
            </div>
          </div>
          {view.grid && <GridView products={productsBwRange}/>}
          {view.list && <ListView products={productsBwRange}/>}
        </div>
      </>
    );
  }
}

export default memo(Products);
