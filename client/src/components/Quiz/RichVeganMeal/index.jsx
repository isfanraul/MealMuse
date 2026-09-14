import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from './RVMElements'

const RichVeganMeal = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>What meal are we talking about?</Texth1>
        <ButtonWrapper>
          <Button1 href="/richveganbreakfast">Breakfast</Button1>
          <Button1 href="/richveganlunch">Lunch/Dinner</Button1>
          <Button1 href="/richvegandessert">Dessert</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default RichVeganMeal