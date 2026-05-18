import styled from 'styled-components'

export const StarterText = styled.div`
  font-family: "Source Code Pro", monospace;
  font-weight:400;
  font-size: clamp(1rem, 3vw + 1rem, 4rem);
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content:center;
  align-items:center;
  min-height:100vh;
  background:#fff7e6;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 10vh;
  justify-content: center;
  align-items: center;
`

export const Button1 = styled.a`
  appearance: none;
  background: none;
  border: none;
  outline: none;

  padding: 20px 40px;
  border-radius: 8px;
  color: #212121;
  font-size: 28px;
  font-weight: 600;
  margin: 0 15px;
  cursor: pointer;
  transition: 0.4s;
  position: relative;
  &:link { text-decoration: none; }
  &:visited { text-decoration: none; }
  &:hover { text-decoration: none; }
  &:active { text-decoration: none; }

`
