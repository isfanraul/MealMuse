import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from './RichPoultryBreakElements'

const RichPoultryBreak = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/rpb1">Wrap</Button1>
          <Button1 href="/rpb2">Sandwich</Button1>
          <Button1 href="/rpb3">Omelette</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default RichPoultryBreak