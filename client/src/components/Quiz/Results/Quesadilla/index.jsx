import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const Quesadilla = () => {
  return (
    <>
    <Body>
      <RestaurantCard>
        <RestaurantImageWrapper>
          <RestaurantImage src="https://tazzcdn.akamaized.net/uploads/logo/logo_52_3.jpg"/>
        </RestaurantImageWrapper>
      <RestaurantContent>
        <RestaurantName>FriesHub</RestaurantName>
      </RestaurantContent>
      </RestaurantCard>
      <ProductCard>
      <ProductImageWrapper>
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/12980/Quesadilla_Vegana.jpg"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Quesadilla Vegana
        </ProductName>
        <ProductDescription>
        Tortilla, ardei rosu, ceapa, porumb, fasole rosie, usturoi, patrunjel, cascaval vegetal, cartofi prajiti cu sos cheddar vegan
        </ProductDescription>
        <ProductPrice>
          <Price>29
            <sup>50</sup>
            Lei
          </Price>
        </ProductPrice>
      </ProductContent>
      </ProductCard>
     </Body>
    </>
  )
}

export default Quesadilla

