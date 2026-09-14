import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const CiocoVega = () => {
  return (
    <>
    <Body>
      <RestaurantCard>
        <RestaurantImageWrapper>
          <RestaurantImage src="https://tazzcdn.akamaized.net/uploads/logo/logo_alma_dulce.jpg"/>
        </RestaurantImageWrapper>
      <RestaurantContent>
        <RestaurantName>Alma Gelato</RestaurantName>
      </RestaurantContent>
      </RestaurantCard>
      <ProductCard>
      <ProductImageWrapper>
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/3963/Ciocco_Vega_Stevia.jpg"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Ciocco Vega & Stevia alma gelato
        </ProductName>
        <ProductDescription>
        Boabele de cacao,  considerate 'super-alimente'datorita continutului ridicat de substante  sanatoase, sunt starurile acestei gustari dulci de vara, o degustare savuroasa  si sanatoasa fara adaos de lactate sau zaharuri
        </ProductDescription>
        <ProductPrice>
          <Price>55
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

export default CiocoVega

