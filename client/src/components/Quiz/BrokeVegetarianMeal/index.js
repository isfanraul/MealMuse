import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from './BVMElements'

const BrokeVegetarianMeal = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>What meal are we talking about?</Texth1>
        <ButtonWrapper>
          <Button1 href="/brokevegetarianbreakfast">Breakfast</Button1>
          <Button1 href="/brokevegetarianlunch">Lunch/Dinner</Button1>
          <Button1 href="/brokevegetariandessert">Dessert</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default BrokeVegetarianMeal