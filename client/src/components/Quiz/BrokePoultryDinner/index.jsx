import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from '../BrokeRedDinner/BrokeRedDinnerElements'

const BrokePoultryDinner= () => {
  return (
    <>
      <PageWrapper>
        <Texth1 data-heading="Which of these dishes do you prefer?">Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/bpd1">Pizza</Button1>
          <Button1 href="/bpd2">Pasta</Button1>
          <Button1 href="/bpd3">Shaorma</Button1>
          <Button1 href="/bpd4">Asian Food</Button1>
          <Button1 href="/bpd5">Mexican Food</Button1>
          <Button1 href="/bpd6">Kebab</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default BrokePoultryDinner