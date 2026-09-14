import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, PriceSup, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const SalataRadacinoase = () => {
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
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/4349/salata_radacinoase_2.jpg"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Salată de rădăcinoase multicolor
        </ProductName>
        <ProductDescription>
        Morcov, țelină, sfeclă roșie, dovlecel, spanac, sos caju, semințe
        </ProductDescription>
        <ProductPrice>
          <Price>19
            <PriceSup>00</PriceSup>
            Lei
          </Price>
        </ProductPrice>
      </ProductContent>
      </ProductCard>
     </Body>
    </>
  )
}

export default SalataRadacinoase