import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Home.css';

const Home = () => {

    const [products, setProducts] = useState(null);
    const state = useSelector((state) => state);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

    return (
        <div id='home'>
            {
                products ? <div>
                    <h2 className='heading'>Total Products: {products.length}</h2>
                    <div className='card-list'>
                        {
                            products.map((product) => {
                                return <ProductCard product={product}/>
                            })
                        }
                    </div>
                </div> :
                    <h2 className='heading'>No Products</h2>
            }
        </div>
    );
};

export default Home;