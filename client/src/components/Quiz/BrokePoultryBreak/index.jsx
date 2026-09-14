import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from './BrokePoultryBreakElements'

const BrokePoultryBreak = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/bpb1">Wrap</Button1>
          <Button1 href="/bpb2">Sandwich</Button1>
          <Button1 href="/bpb3">Omelette</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default BrokePoultryBreak