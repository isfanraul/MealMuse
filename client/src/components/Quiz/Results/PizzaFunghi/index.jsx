import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const PizzaFunghi = () => {
  return (
    <>
    <Body>
      <RestaurantCard>
        <RestaurantImageWrapper>
          <RestaurantImage src="https://tazzcdn.akamaized.net/uploads/logo/renditionDownload_37.jpg"/>
        </RestaurantImageWrapper>
      <RestaurantContent>
        <RestaurantName>Green Aware</RestaurantName>
      </RestaurantContent>
      </RestaurantCard>
      <ProductCard>
      <ProductImageWrapper>
        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/12582/pizza-funghi-porcini.jpg"/>
      </ProductImageWrapper>
      <ProductContent>
        <ProductName>
        Pizza Funghi Porcini
        </ProductName>
        <ProductDescription>
        Faina alba, mozzarella din caju, sos de rosii ,hribi, ulei de masline, busuioc si otet balsamic.
        </ProductDescription>
        <ProductPrice>
          <Price>36
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

export default PizzaFunghi