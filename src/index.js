import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Product from "./Product";

const products = [
    {
        id: 1,
        productType: "digital",
        name: "GTA3",
        artist: "Rockstar games",
        price: 340,
        size: "498 Gb",
    },
    {
        id: 13,
        productType: "digital",
        name: "New rules",
        artist: "Dua Lipa",
        price: 17,
        size: "6 Mb",
    },
    {
        id: 38,
        name: "Glassmaskin R92",
        manufacturer: "Electrolux",
        price: 800,
        size: "39 x 12 x 17cm (b x h x d)",
        weight: 3,
    },
    {
        id: 123,
        name: "Laptop Acer 3r8 128Gb",
        price: 3349,
        weight: 4.3,
    },
];

const Products = products.map((product) => {
    if (product.productType === "digital") {
        return <Product.digitalProduct product={product} />;
    } else {
        return <Product.physicalProduct product={product} />;
    }
});

ReactDOM.render(<div>{Products}</div>, document.getElementById("root"));
