import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const Shaorma = () => {
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
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/7054/6908202-shaorma.bdb7cd9-u5ZiPGF.jpg"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Shaorma
        </ProductName>
        <ProductDescription>
        Lipie , maioneza vegana, varza, ceapa rosie, ciuperci pleurotus caramelizate, castraveti murati, cartofi arabesti, sos de usturoi, sos de caju, sos de rosii
        </ProductDescription>
        <ProductPrice>
          <Price>12
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

export default Shaorma 

