import React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function GridView({ products }) {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {products.map((curEle) => {
        return (
          <ProductCard
            key={curEle.id}
            product={curEle}
            displayRating={true}
            displayRemove={false}
            displayTotal={false}
          />
        );
      })}
    </div>
  );
}
