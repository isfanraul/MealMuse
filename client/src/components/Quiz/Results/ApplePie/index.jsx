import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const ApplePie = () => {
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
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/9143/Apple_Porridge.png"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Apple Pie Oat Bowl
        </ProductName>
        <ProductDescription>
        Ingrediente: ovaz, lapte, miere, mar, scortisoara, nuci    Gramaj: 280g     Valori nutritionale    Kcal: 562.6  Proteine: 18 g  Carbohidrati: 83.5 g  Grasimi: 16.8 g
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

export default ApplePie

