import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const VeganBowl = () => {
  return (
    <>
    <Body>
      <RestaurantCard>
        <RestaurantImageWrapper>
          <RestaurantImage src="https://tazzcdn.akamaized.net/uploads/logo/logo-lifebolw-_300ppi_16bit.jpg"/>
        </RestaurantImageWrapper>
      <RestaurantContent>
        <RestaurantName>Life Bowls</RestaurantName>
      </RestaurantContent>
      </RestaurantCard>
      <ProductCard>
      <ProductImageWrapper>
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/9143/Vegan_Bowl.png"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Vegan Bowl
        </ProductName>
        <ProductDescription>
        Ingrediente: orez, tofu, mix de seminte, morvoc, rosii cherry, edamame, varza rosie, sos sweet chili  Gramaj: 500 g    Valori nutritionale    Kcal: 494  Proteine: 16.1 g  Carbohidrati: 93.2 g  Grasimi: 5.9 g
        </ProductDescription>
        <ProductPrice>
          <Price>37
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

export default VeganBowl

