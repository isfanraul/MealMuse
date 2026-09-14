import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1} from './RichRedElements'

const RichRed = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>What meal are we talking about?</Texth1>
        <ButtonWrapper>
          <Button1 href="/richredbreak">Breakfast</Button1>
          <Button1 href="/richredlunch">Lunch</Button1>
          <Button1 href="/richreddinner">Dinner</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default RichRed