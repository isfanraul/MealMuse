import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from './BrokeRedDinnerElements'

const BrokeRedDinner= () => {
  return (
    <>
      <PageWrapper>
        <Texth1 data-heading="Which of these dishes do you prefer?">Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/brd1">Pizza</Button1>
          <Button1 href="/brd2">Pasta</Button1>
          <Button1 href="/brd3">Shaorma</Button1>
          <Button1 href="/brd4">Asian Food</Button1>
          <Button1 href="/brd5">Mexican Food</Button1>
          <Button1 href="/brd6">Kebab</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default BrokeRedDinner