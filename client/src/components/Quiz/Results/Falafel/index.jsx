import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const Falafel = () => {
  return (
    <>
    <Body>
      <RestaurantCard>
        <RestaurantImageWrapper>
          <RestaurantImage src="https://tazzcdn.akamaized.net/uploads/logo/logo-falafel-king738_1.png"/>
        </RestaurantImageWrapper>
      <RestaurantContent>
        <RestaurantName>Falafel King</RestaurantName>
      </RestaurantContent>
      </RestaurantCard>
      <ProductCard>
      <ProductImageWrapper>
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/3953/healthy.jpg"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Meniu Healthy
        </ProductName>
        <ProductDescription>
        Falafel 150 g, hummus, 120 g, salata 100 g, sos de susan 60 g, de post  430 g 
        </ProductDescription>
        <ProductPrice>
          <Price>32
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

export default Falafel

