import React from 'react'
import { Container, Menu, Image } from "semantic-ui-react";
import CartSummary from './CartSummary';
import FavoriteSummary from './FavoriteSummary';
import { useSelector } from "react-redux";


function Navi() {
    const {cartItems} = useSelector(state => state.cart)
    const {favoriteItems} = useSelector(state => state.favorite)
    return (
        <div>
            <Menu inverted fixed= "top">
                <Container>
                  <Menu.Item>
                      <Image src="./hrms.PNG" rounded size='tiny'/>
                  </Menu.Item>
                   <Menu.Item name='home'/>
                   <Menu.Item name='messages'/>
                   <Menu.Item >
                        {cartItems.length>0&&<CartSummary/>}
                       
                   </Menu.Item>
                   <Menu.Item >
                        {favoriteItems.length>0&&<FavoriteSummary/>}
                       
                   </Menu.Item>
                </Container>
            </Menu>      
        </div>
    )
}

export default Navi
