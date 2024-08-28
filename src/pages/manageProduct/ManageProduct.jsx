import React from 'react';
import { useParams } from 'react-router-dom';
import AllProducts from './AllProducts';
import PendingProduct from './PendingProduct';
import ProductReview from './ProductReview';

const ManageProduct = () => {
    const { product } = useParams();
    // const link = product

    const renderContent = ()=>{
        switch(product){
            case "All Product":
                return <AllProducts/>
            case "Pending Product":
                return <PendingProduct/>
            case "Product Review":
                return <ProductReview/>
            default:
                return <div>select a valid product</div>
        }
    }

    return (
        <div>
            {renderContent()}
            
        </div>
    );
};

export default ManageProduct;
