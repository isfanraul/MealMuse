import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const BrokeSchnitzel = () => {
    return (
        <>
            <Body>
                <RestaurantCard>
                    <RestaurantImageWrapper>
                        <RestaurantImage src="https://tazzcdn.akamaized.net/uploads/logo/logo-danez-2-_250x250.jpeg"/>
                    </RestaurantImageWrapper>
                    <RestaurantContent>
                        <RestaurantName>Danez Food House
                        </RestaurantName>
                    </RestaurantContent>
                </RestaurantCard>
                <ProductCard>
                    <ProductImageWrapper>
                        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/10492/orig/meniu_snitel_pui.jpg"/>
                    </ProductImageWrapper>
                    <ProductContent>
                        <ProductName>
                            Schnitzel pui
                        </ProductName>
                        <ProductDescription>
                            Schnitzel pui 170 g, cartofi pai, salată varză sau sos
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

export default BrokeSchnitzel

