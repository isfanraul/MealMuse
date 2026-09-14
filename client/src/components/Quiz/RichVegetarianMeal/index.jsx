import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1} from './RVMElements'

const RichVegetarianMeal = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>What meal are we talking about?</Texth1>
        <ButtonWrapper>
          <Button1 href="/richvegetarianbreakfast">Breakfast</Button1>
          <Button1 href="/richvegetarianlunch">Lunch/Dinner</Button1>
          <Button1 href="/richvegetariandessert">Dessert</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default RichVegetarianMeal