import React from 'react'
import { Body, Price, ProductCard, ProductContent, ProductDescription, ProductImage, ProductImageWrapper, ProductName, ProductPrice, RestaurantCard, RestaurantContent, RestaurantImage, RestaurantImageWrapper, RestaurantName } from '../SalataCartofi/SCElements'

const RichSchnitzel = () => {
    return (
        <>
            <Body>
                <RestaurantCard>
                    <RestaurantImageWrapper>
                        <RestaurantImage src="https://tazzcdn.akamaized.net/uploads/logo/LOGO_RESTAURANT_WINEBAR_WINESTONE_HOTEL_NOVOTEL_DEGUSTARE_VINURI_SERVE_BAUER_RECENZII_RESTAURANTE_BUCURESTI_ROMANIA_GHIDUL_LINGURIN.jpg"/>
                    </RestaurantImageWrapper>
                    <RestaurantContent>
                        <RestaurantName>Winestone</RestaurantName>
                    </RestaurantContent>
                </RestaurantCard>
                <ProductCard>
                    <ProductImageWrapper>
                        <ProductImage  src="https://tazzcdn.akamaized.net/uploads/menu/4601/orig/Snitel_gigant_de_porc_1.jpeg"/>
                    </ProductImageWrapper>
                    <ProductContent>
                        <ProductName>
                            Schnitzel vienez de pui
                        </ProductName>
                        <ProductDescription>
                            Pregatit din muschi de vita, tavalit in pesmet Panko, gatit dupa faimoasa reteta vieneza si servit langa cartofi rustici si salată
                        </ProductDescription>
                        <ProductPrice>
                            <Price>69
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

export default RichSchnitzel

