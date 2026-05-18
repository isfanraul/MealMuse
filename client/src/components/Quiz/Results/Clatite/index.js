import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const Clatite = () => {
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
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/7054/5746076-clatite.6bace71-OXZxVSg.jpg"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Clatite
        </ProductName>
        <ProductDescription>
        Clatite din faina de naut cu Nuccitella ( facuta de noi ) Gem de fructe de padure si curmale, banane si fructe decorative.
        </ProductDescription>
        <ProductPrice>
          <Price>29
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

export default Clatite

