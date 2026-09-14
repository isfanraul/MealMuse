import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const SalataCartofi = () => {
  return (
    <>
    <Body>
      <RestaurantCard>
        <RestaurantImageWrapper>
          <RestaurantImage src="https://tazzcdn.akamaized.net/uploads/logo/logo-biofresh.png"/>
        </RestaurantImageWrapper>
      <RestaurantContent>
        <RestaurantName>Biofresh</RestaurantName>
      </RestaurantContent>
      </RestaurantCard>
      <ProductCard>
      <ProductImageWrapper>
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/167/41.jpg"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Salată greceasca
        </ProductName>
        <ProductDescription>
        Amestec de salata verde, rosii, ardei, masline, castraveti, tofu
        </ProductDescription>
        <ProductPrice>
          <Price>25
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

export default SalataCartofi

