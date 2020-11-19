import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {withRouter} from 'react-router-dom';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.action';

import './cart-dropdown.styles.scss';


const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        
            {
                cartItems.length ? (
            cartItems.map(cartItem =>(
            <CartItem key ={cartItem.id} item={cartItem}></CartItem>

            ))
                ) : (
                    <span className = 'empty-message'> Your cart is empty</span>
                )
            }
        
        </div>
        <CustomButton onClick = {()=>{history.push('/checkout');
         dispatch(toggleCartHidden());}}>Go To CheckOut</CustomButton>
        </div>     
)

    const mapStateToProps = state => ({
    cartItems : selectCartItems(state)
})



export default withRouter(connect(mapStateToProps) (CartDropDown));