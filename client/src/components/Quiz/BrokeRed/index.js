import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from './BrokeRedElements'

const BrokeRed = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>What meal are we talking about?</Texth1>
        <ButtonWrapper>
          <Button1 href="/brokeredbreak">Breakfast</Button1>
          <Button1 href="/brokeredlunch">Lunch</Button1>
          <Button1 href="/brokereddinner">Dinner</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default BrokeRed