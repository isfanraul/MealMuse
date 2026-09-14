import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from '../BrokeRedDinner/BrokeRedDinnerElements'

const BrokeSeaDinner= () => {
  return (
    <>
      <PageWrapper>
        <Texth1 data-heading="Which of these dishes do you prefer?">Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/bsd1">Pizza</Button1>
          <Button1 href="/bsd2">Pasta</Button1>
          <Button1 href="/bsd3">Bagel Somon</Button1>
          <Button1 href="/bsd4">Fish and Chips</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default BrokeSeaDinner