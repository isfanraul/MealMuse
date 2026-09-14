import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from '../BrokeVeganBreakfast/BVBElements'

const BrokeVegetarianBreakfast = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/salatacartofi">Salad</Button1>
          <Button1 href="/applepie">Acai Bowl</Button1>
          <Button1 href="/caprese">Sandwich</Button1>
          <Button1 href="/omletaciuperci">Omelette</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default BrokeVegetarianBreakfast