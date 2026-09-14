import styled from 'styled-components'

export const PageWrapper = styled.div`
  background-color: #FFF;
  font-family: "Playfair Display", "Didot", "Times New Roman", Times, serif;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content:center;
  align-items:center;
  min-height:100vh;
`

export const Texth1 = styled.h1`
  position: relative;
  font-size: 80px;

`

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 10vh;
  justify-content: center;
  align-items: center;

`

export const Button1 = styled.a`
  margin: 0 15px;
  color: #000;
  outline: 0;
  grid-gap: 8px;
  align-items: center;   
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: 2px solid #000;
  border-radius: 3px;
  color: #fff;
  background: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  padding: 15px 22px;
  text-align:center;
  transition-duration: .15s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  &:hover{
      color: #000;
      background: rgb(255, 218, 87);
  }
                
  &:link { text-decoration: none; }
  &:visited { text-decoration: none; }
  &:hover { text-decoration: none; }
  &:active { text-decoration: none; }
`