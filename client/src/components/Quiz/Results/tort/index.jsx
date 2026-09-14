import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const Tort = () => {
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
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/7054/10769996-tort-raw-vegan-cu-ciocolata-si-vanilie.9ef33b0-VhabKAJ.jpg"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Tort raw vegan cu ciocolata si vanilie
        </ProductName>
        <ProductDescription>
        Tort raw vegan cu ciocolata si vanilie
        </ProductDescription>
        <ProductPrice>
          <Price>9
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

export default Tort

