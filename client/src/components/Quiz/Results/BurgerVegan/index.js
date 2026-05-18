import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const BurgerVegan = () => {
  return (
    <>
    <Body>
      <RestaurantCard>
        <RestaurantImageWrapper>
          <RestaurantImage src="https://tazzcdn.akamaized.net/uploads/logo/e10_logo.jpeg"/>
        </RestaurantImageWrapper>
      <RestaurantContent>
        <RestaurantName>E10 Burgers</RestaurantName>
      </RestaurantContent>
      </RestaurantCard>
      <ProductCard>
      <ProductImageWrapper>
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/816/crispy_1.jpg"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Veggie Wild B
        </ProductName>
        <ProductDescription>
        Chifla artizanala/Briosa ,chiftea homemade de soia , rosii uscate ,capere, ceapa, rucola, ementaler, sos barbeque, maioneza cu usturoi .
        </ProductDescription>
        <ProductPrice>
          <Price>40
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

export default BurgerVegan