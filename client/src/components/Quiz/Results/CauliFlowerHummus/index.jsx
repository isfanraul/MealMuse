import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const CauliflowerHummus= () => {
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
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/9143/Cauliflower.png"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Cauliflower Hummus
        </ProductName>
        <ProductDescription>
        Ingrediente: paine integrala, naut, sfecla rosie, usturoi, conopida, rucola  Gramaj: 210-240 g    Valori nutritionale    Kcal: 469  Proteine: 14 g  Carbohidrati: 44.5 g  Grasimi: 23.6 
        </ProductDescription>
        <ProductPrice>
          <Price>15
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

export default CauliflowerHummus

