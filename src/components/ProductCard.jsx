import React , {useState} from "react";
import "../style/ProductCard.css";

export default function ProductCard( { product , onClick } )
{
    const [ isLiked , setIsLiked ] = useState( false );
    const [ showDetails , setShowDetails ] = useState( false );

    const Stars = () =>
    {
        return(
           <div className = "stars">
                { '★★★★★'.split('').map( ( star , index ) =>(
                    <span
                        key = {index}
                        className = {index < Math.floor ( product.rating) ? 'filled' : ''}
                    >{star}</span>
                ))}

                <span className = "rating-number">{product.rating}</span>

           </div>
        );
    };
    return(

        <div className = "product-card" onClick={onClick}>

            <div className = "product-image">

                <img src = {product.image} alt = {product.name} />

                <button
                    className = {`like-btn ${ isLiked ? 'liked' : ''}`}
                    onClick = { () => setIsLiked(!isLiked)}
                > { isLiked ? '♥' : '♡' }</button>

                 <span className="category-badge">{product.category}</span>
            </div>

            <div className = "product-content">
                <h3>{product.name}</h3>
                <p className = "brand">Brand : {product.brand}</p>
                <p className = "description">Description : {product.description}</p>

                <p className = "product-info">
                    {Stars()}
                    <p className = "product-price">Price : ${product.price.toFixed(2)}</p>
                </p>
            </div>

            <div className = "product-actions">
                <button
                    className = "detail-btn"
                    onClick = { () => setShowDetails(!showDetails)}   
                    >{showDetails ? '👆 Hide Details' : '👇 Show Details'}</button>
            </div>

            {showDetails && (
                <div className = "details-pannel">
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Brand:</strong> {product.brand}</p>
                    <p><strong>Rating:</strong> {product.rating}/5 stars</p>
                    <p><strong>ID:</strong> #{product.id}</p>
                    <p><strong>Colors:</strong> {product.colors.join(', ')}</p>
                </div>
            )}
        </div>
    );
}