import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const AcaiSmoothie = () => {
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
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/9143/Acai.png"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Acai Smoothie Bowl
        </ProductName>
        <ProductDescription>
        Ingrediente: banana, fructe de padure, pudra de acai, lapte, capsuni, afine, unt de arahide, granola, miere     Gramaj: 370 g    Valori nutritionale    Kcal: 402  Proteine: 6.8 g  Carbohidrati: 70.8 g  Grasimi: 9.7 g
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

export default AcaiSmoothie

