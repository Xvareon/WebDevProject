import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
export default function Product(props) {
    const { product } = props
    return (
        <div key={product._id} className="card">
            <Link to={`/product/${product._id}`}>
                <img className="medium" src={product.image} alt={product.name} />
            </Link>
            <div className="card-body">
                <Link to={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </Link>
                <h2>
                    <Rating
                        rating={product.rating}
                        numReview={product.numReview}>
                    </Rating></h2>
                <div className="price"><h2>${product.price}</h2></div>
                <h2>{product.brand}</h2>
            </div>
        </div >
    )
}
