import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const BurgerVegetarian = () => {
  return (
    <>
    <Body>
      <RestaurantCard>
        <RestaurantImageWrapper>
          <RestaurantImage src="https://tazzcdn.akamaized.net/uploads/logo/images.jpg"/>
        </RestaurantImageWrapper>
      <RestaurantContent>
        <RestaurantName>Gratarul Cu Staif</RestaurantName>
      </RestaurantContent>
      </RestaurantCard>
      <ProductCard>
      <ProductImageWrapper>
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/482/Texas_BBQ_Burger.jpg"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Burger Vegetarian Cu Halloumi
        </ProductName>
        <ProductDescription>
        Chifla, 150 g branza Halloumi, rosii, castraveti murati, legume la gratar, tzatziky  350 g
        </ProductDescription>
        <ProductPrice>
          <Price>38
            <sup>00</sup>
            Lei
          </Price>
        </ProductPrice>
      </ProductContent>
      </ProductCard>
     </Body>
    </>
  )
}

export default BurgerVegetarian

