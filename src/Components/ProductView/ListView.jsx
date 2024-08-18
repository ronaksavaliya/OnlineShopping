import React from "react";
import ProductCardForList from "../ProductCardForList/ProductCardForList";

export default function ListView({ products }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {products.map((cur, index) => {
        return <ProductCardForList key={index} product={cur} />;
      })}
    </div>
  );
}
