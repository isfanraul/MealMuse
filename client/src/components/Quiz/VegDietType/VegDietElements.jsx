import styled from 'styled-components'

export const DietWrapper = styled.div`
  background-color: #e7e5e4;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content:center;
  align-items:center;
  min-height:100vh;
`

export const Texth1 = styled.h1`
  font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
  color: #131313;
  font-size: 92px;
  letter-spacing: .15em;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const ButtonWrapper = styled.div`
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
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 0;
    right: 0;
    border-bottom: 3px solid #212121;
    border-right: 3px solid #212121;
    transition: all 0.4s, opacity 0.1s 0.4s;
    opacity: 0;
  }
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 0;
    border-top: 3px solid #212121;
    border-left: 3px solid #212121;
    transition: all 0.4s, opacity 0.1s 0.4s;
    opacity: 0;
  }
  &:hover {
    &:after {
      width: calc(100% + 15px);
      height: calc(100% + 15px);
      transition: all 0.4s, opacity 0.1s;
      opacity: 1;
    }
    &:before {
      width: calc(100% + 15px);
      height: calc(100% + 15px);
      transition: all 0.4s, opacity 0.1s;
      opacity: 1;
    }
  }
  &:link { text-decoration: none; }
  &:visited { text-decoration: none; }
  &:hover { text-decoration: none; }
  &:active { text-decoration: none; }
`
