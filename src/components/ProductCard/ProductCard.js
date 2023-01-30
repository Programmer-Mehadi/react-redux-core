import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { id, thumbnail, title, price, description, rating } = product;
    console.log(product)
    return (
        <div className="card-item">
            <img src={thumbnail} alt="" className='thumbnail' />
            <div className='card-body'>
                <p><span className='card-content-type'>Title:</span> {title}</p>
                <p><span className='card-content-type'>Description:</span> {description}</p>
                <p><span className='card-content-type'>Price:</span> {price}</p>
                <p><span className='card-content-type'>Rating:</span> {rating}</p>
            </div>
            <div className="card-action">
                <button className='btn'>Add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard;