import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const KebabHrisca = () => {
  return (
    <>
    <Body>
      <RestaurantCard>
        <RestaurantImageWrapper>
          <RestaurantImage src="https://tazzcdn.akamaized.net/uploads/logo/logo-hrana-reloaded-2-.png"/>
        </RestaurantImageWrapper>
      <RestaurantContent>
        <RestaurantName>Hrana Pamantului</RestaurantName>
      </RestaurantContent>
      </RestaurantCard>
      <ProductCard>
      <ProductImageWrapper>
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/7054/7348175-kebap-hrisca.907df30-1HpbjZZ.jpg"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Kebab Hrisca
        </ProductName>
        <ProductDescription>
        Paine din hrisca si nuci, ciuperci pleurotus caramelizate, ardei kapia sote, varza, ceapa rosie, sos de maioneza vegana, sos de caju, sos de usturoi, cartofi arabesti, sos de rosii
        </ProductDescription>
        <ProductPrice>
          <Price>13
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

export default KebabHrisca

