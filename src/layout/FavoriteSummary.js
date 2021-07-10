import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Dropdown } from "semantic-ui-react";

function FavoriteSummary() {
  const {favoriteItems} = useSelector(state => state.favorite)
    return ( 
      <div>
      <Dropdown item text="Favorileriniz">
        <Dropdown.Menu>
          {
            favoriteItems.map((favoriteItem)=>(
              <Dropdown.Item>
                {favoriteItem.product.brand+ " " + favoriteItem.product.category}
              </Dropdown.Item>
            ))
          }
          <Dropdown.Divider/>
          <Dropdown.Item as={NavLink} to="">Favorilerini Gör</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
     
      </div>
    )
}

export default FavoriteSummary