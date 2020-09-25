import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Products from '../Products/Products';

const Shop = (props) => {
    const {products, addToCart} = props; //props come from cartReducer.js with below code of redux
    return (
        <div>
            {
                products.map(pd=><Products 
                                    key={pd.id} 
                                    product={pd} 
                                    addToCart = {addToCart}
                                />)
            }
        </div>
    );
};
//below all work doing for call every work what we do on other file as redux add with this file as props
const mapStateToProps = state=>{
    return {
        products : state.products
    }
}

const mapDispatchToProps = {
    addToCart : addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);