import styled from 'styled-components'

export const Body = styled.body`
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  display: grid;
  gap: -10px 5px;
`

export const RestaurantCard = styled.div`
  height: 310px;
  width: 320px;
  background-color: #fff;
  border-radius: 20px;
  position: relative;
  margin-bottom: 100px;
  margin-left: 15px;
`


export const RestaurantImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const RestaurantImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const RestaurantContent = styled.div`
  padding: 10px;
`

export const RestaurantName = styled.h3`
  text-align: center;
  font-size: 30px;
`


export const ProductCard = styled.div`
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  display: grid;
  font-family: 'Trebuchet MS', sans-serif;
  height: 200px;
  margin: 20px auto;
  width: 350px;
  margin-top: -560px;
  z-index: 3;

`

export const ProductImageWrapper = styled.div`
width: 100%;
height: 200px;
overflow: hidden;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
`

export const ProductImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

export const ProductContent = styled.div`
padding: 10px;
`

export const ProductName = styled.h3`
font-size: 20px;
`

export const ProductDescription = styled.p`
  font-size: 15px;
    font-weight: 500;
`

export const ProductPrice = styled.div`
margin-top: 10px;
    display: flex;
    justify-content: space-between;
`

export const Price = styled.span`
margin-top: 10px;
    display: flex;
    justify-content: space-between;
`

export const PriceSup = styled.sup`
  font-size: 12px;
`
