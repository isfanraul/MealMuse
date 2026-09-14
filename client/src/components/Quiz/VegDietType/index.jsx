import React from 'react'
import { DietWrapper, Texth1, Button1, ButtonWrapper } from './VegDietElements'


const VegDietType = () => {
  return (
    <>
      <DietWrapper>
        <Texth1>What type of diet best resonates with you</Texth1>
        <ButtonWrapper>
          <Button1 href="/vegetarianbudget">Vegetarian</Button1>
          <Button1 href="/veganbudget">Vegan</Button1>
        </ButtonWrapper>
      </DietWrapper>
    </>
  )
}

export default VegDietType