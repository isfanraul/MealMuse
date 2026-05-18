import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1} from './RichSeaElements'

const RichSea = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>What meal are we talking about?</Texth1>
        <ButtonWrapper>
          <Button1 href="/richseabreak">Breakfast</Button1>
          <Button1 href="/richsealunch">Lunch</Button1>
          <Button1 href="/richseadinner">Dinner</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default RichSea