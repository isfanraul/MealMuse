import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from './BVMElements'

const BrokeVeganMeal = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>What meal are we talking about?</Texth1>
        <ButtonWrapper>
          <Button1 href="/brokeveganbreakfast">Breakfast</Button1>
          <Button1 href="/brokeveganlunch">Lunch/Dinner</Button1>
          <Button1 href="/brokevegandessert">Dessert</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default BrokeVeganMeal