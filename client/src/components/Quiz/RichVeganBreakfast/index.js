import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1} from '../BrokeVeganBreakfast/BVBElements'

const RichVeganBreakfast = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/salatagreceasca">Salad</Button1>
          <Button1 href="/veganbowl">Acai Bowl</Button1>
          <Button1 href="/morningrain">Sandwich</Button1>
          <Button1 href="/omletavegana">Omelette</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default RichVeganBreakfast