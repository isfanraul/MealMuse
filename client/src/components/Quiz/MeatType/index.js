import React from 'react'
import { DietWrapper, Texth1, Button1, ButtonWrapper } from './MeatElements'


const MeatType = () => {
  return (
    <>
      <DietWrapper>
        <Texth1>What type of meat do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/redbudget">Red meat</Button1>
          <Button1 href="/poultrybudget">Poultry </Button1>
          <Button1 href="/seabudget">Seafood </Button1>
        </ButtonWrapper>
      </DietWrapper>
    </>
  )
}

export default MeatType