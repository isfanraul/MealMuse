import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const SupaCrema = () => {
  return (
    <>
    <Body>
      <RestaurantCard>
        <RestaurantImageWrapper>
          <RestaurantImage src="https://tazzcdn.akamaized.net/uploads/logo/logo-biofresh.png"/>
        </RestaurantImageWrapper>
      <RestaurantContent>
        <RestaurantName>BIOfresh</RestaurantName>
      </RestaurantContent>
      </RestaurantCard>
      <ProductCard>
      <ProductImageWrapper>
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/167/supa_cruda_spanac.jpg"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Supa Crema de Mazare cu Crutoane
        </ProductName>
        <ProductDescription>
        Mazare, dovlecel, apio, ceapa  450ml
        </ProductDescription>
        <ProductPrice>
          <Price>18
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

export default SupaCrema

