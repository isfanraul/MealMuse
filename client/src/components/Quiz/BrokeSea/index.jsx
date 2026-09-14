import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from './BrokeSeaElements'

const BrokeSea = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>What meal are we talking about?</Texth1>
        <ButtonWrapper>
          <Button1 href="/brokeseabreak">Breakfast</Button1>
          <Button1 href="/brokesealunch">Lunch</Button1>
          <Button1 href="/brokeseadinner">Dinner</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default BrokeSea