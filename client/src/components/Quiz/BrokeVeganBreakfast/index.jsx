import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from './BVBElements'

const BrokeVeganBreakfast = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/salataradacinoase">Salad</Button1>
          <Button1 href="/caluiflowerhummus">Acai Bowl</Button1>
          <Button1 href="/pinkybasil">Sandwich</Button1>
          <Button1 href="/omletavegana">Omelette</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default BrokeVeganBreakfast