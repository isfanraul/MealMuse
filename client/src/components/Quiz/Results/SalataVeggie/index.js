import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, PriceSup, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const SalataVeggie = () => {
  return (
    <>
    <Body>
      <RestaurantCard>
        <RestaurantImageWrapper>
          <RestaurantImage src="https://tazzcdn.akamaized.net/uploads/logo/logo-mesopotamia-250x250_23.jpg"/>
        </RestaurantImageWrapper>
      <RestaurantContent>
        <RestaurantName>Mesopotamia</RestaurantName>
      </RestaurantContent>
      </RestaurantCard>
      <ProductCard>
      <ProductImageWrapper>
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/8870/mesopotamia-salata-veggie.jpg"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Salata Veggie
        </ProductName>
        <ProductDescription>
        Salata verde, rosii, sos alb, masline, branza feta, ceapa, ardei, patrunjel
        </ProductDescription>
        <ProductPrice>
          <Price>28
            <PriceSup>99</PriceSup>
            Lei
          </Price>
        </ProductPrice>
      </ProductContent>
      </ProductCard>
     </Body>
    </>
  )
}

export default SalataVeggie