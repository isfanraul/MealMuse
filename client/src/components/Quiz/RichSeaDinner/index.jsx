import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from '../BrokeRedDinner/BrokeRedDinnerElements'

const RichSeaDinner= () => {
  return (
    <>
      <PageWrapper>
        <Texth1 data-heading="Which of these dishes do you prefer?">Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/rsd1">Pizza</Button1>
          <Button1 href="/rsd2">Pasta</Button1>
          <Button1 href="/rsd3">Bagel Somon</Button1>
          <Button1 href="/rsd4">Fish and Chips</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default RichSeaDinner