import React from "react";

const Product = {
    physicalProduct: function physicalProduct(props) {
        return (
            <div>
                <h3>Fysisk produkt</h3>
                <p>Namn: {props.product.name}</p>
                <p>Pris: {props.product.price}</p>
                <p>Vikt: {props.product.weight}</p>
            </div>
        );
    },
    digitalProduct: function digitalProduct(props) {
        return (
            <div>
                <h3>Digital produkt</h3>
                <p>Namn: {props.product.name}</p>
                <p>Artist: {props.product.artist}</p>
                <p>Pris: {props.product.price}</p>
                <p>Storlek: {props.product.size}</p>
            </div>
        );
    },
};

export default Product;
