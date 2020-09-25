import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    console.log(cart)
    return (
        <div>
            <ul>
                {
                    cart.map(product=><li 
                                        key={product.cartId}>
                                        {product.productId} 
                                        <button 
                                            onClick={()=>removeFromCart(product.cartId)}
                                        >X</button>
                                    </li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps= state=>{
    return {cart: state.cart}
};
const mapDispatchToProps = {
    removeFromCart : removeFromCart
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);