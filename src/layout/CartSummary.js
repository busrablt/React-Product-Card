import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Dropdown ,Label} from "semantic-ui-react";

function CartSummary() {
  const {cartItems} = useSelector(state => state.cart) 
    return ( 
      <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {
            cartItems.map((cartItem)=>(
              <Dropdown.Item>
                {cartItem.product.brand+ " " + cartItem.product.category}
                <Label>
                  {cartItem.quantity}
                </Label>
              </Dropdown.Item>
            ))
          }
          <Dropdown.Divider/>
          <Dropdown.Item as={NavLink} to="">Sepete git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
     
      </div>
    )
}

export default CartSummary