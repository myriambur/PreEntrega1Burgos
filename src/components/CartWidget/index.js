import React from 'react';
import './CartWidget.css';

export const CartWidget=({cantidad})=>{
    return (<>
    <i className="bi bi-cart2" ></i>
    <p className='cantidad'>{cantidad}</p>
    </>)
}

export default CartWidget;