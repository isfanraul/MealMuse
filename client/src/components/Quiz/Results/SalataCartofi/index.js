import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from './SCElements'

const SalataCartofi = () => {
  return (
    <>
    <Body>
      <RestaurantCard>
        <RestaurantImageWrapper>
          <RestaurantImage src="https://tazzcdn.akamaized.net/uploads/logo/Vegline_logo2.jpg"/>
        </RestaurantImageWrapper>
      <RestaurantContent>
        <RestaurantName>Vegline</RestaurantName>
      </RestaurantContent>
      </RestaurantCard>
      <ProductCard>
      <ProductImageWrapper>
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/4349/orig/salata_de_cartofi_2.jpg"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Salată de cartofi cu rucola
        </ProductName>
        <ProductDescription>
        Cartofi copti, ardei, masline, caju, lapte cocos, ceapă roșie, ceapă verde
        </ProductDescription>
        <ProductPrice>
          <Price>19
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

