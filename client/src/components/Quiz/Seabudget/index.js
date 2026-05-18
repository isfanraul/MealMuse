import React from 'react'
import { BudgetWrapper, Button1, ButtonWrapper, Texth1 } from './SeaBudgetElements'

const SeaBudget = () => {
  return (
    <>
      <BudgetWrapper>
        <Texth1>What's your budget</Texth1>
        <ButtonWrapper>
          <Button1 href="/brokesea">I'm broke</Button1>
          <Button1 href="/richsea">I can afford to splurge</Button1>
        </ButtonWrapper>
      </BudgetWrapper>
    </>
  )
}

export default SeaBudget