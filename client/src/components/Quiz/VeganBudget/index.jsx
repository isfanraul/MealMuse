import React from 'react'
import { BudgetWrapper, Button1, ButtonWrapper, Texth1 } from './VeganBudgetElements'

const VeganBudget = () => {
  return (
    <>
      <BudgetWrapper>
        <Texth1>What's your budget</Texth1>
        <ButtonWrapper>
          <Button1 href="/brokevegan">I'm broke</Button1>
          <Button1 href="/richvegan">I can afford to splurge</Button1>
        </ButtonWrapper>
      </BudgetWrapper>
    </>
  )
}

export default VeganBudget