import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from '../BrokeVegetarianDessert/BVDElements'

const BrokeVeganDessert = () => {
  return (
    <>
      <PageWrapper>
        <Texth1 data-heading="Which of these dishes do you prefer?">Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/ciocovega">Ice cream</Button1>
          <Button1 href="/clatite">Pancake</Button1>
          <Button1 href="/sweetrefresh">Fruit Cup</Button1>
          <Button1 href="/tort">Cake</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default BrokeVeganDessert