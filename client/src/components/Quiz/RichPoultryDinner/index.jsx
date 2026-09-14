import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from '../BrokeRedDinner/BrokeRedDinnerElements'

const RichPoultryDinner= () => {
  return (
    <>
      <PageWrapper>
        <Texth1 data-heading="Which of these dishes do you prefer?">Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/rpd1">Pizza</Button1>
          <Button1 href="/rpd2">Pasta</Button1>
          <Button1 href="/rpd3">Shaorma</Button1>
          <Button1 href="/rpd4">Asian Food</Button1>
          <Button1 href="/rpd5">Mexican Food</Button1>
          <Button1 href="/rpd6">Kebab</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default RichPoultryDinner