import styled, { keyframes } from 'styled-components';
import { Button } from 'semantic-ui-react';

const fontSize = (size) => {
  switch(size) {
    case 'lrg':
      return '14rem';
    case 'sm':
      return '4rem';
    default:
      return '8rem';
  }
}
export const HomeHeader = styled.h1`
  background: pink;
  color: white;
  font-size: ${props => fontSize(props.fSize)}; 
`
export const CoolImg = styled.img`
  width: 300px;
  border: 2px solid green;
`
export const HomeContainer = styled.div`
  background: linear-gradient(to bottom right, aliceblue, pink);
`
export const Btn = styled(Button)`
  width: 100%;
  color: yellow !important;
  &:hover {
    color: red !important;
  }
  @media (max-width: 768px) {
    color: purple !important;
  }
`
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to { 
    transform: rotate(360deg);
  }
`
export const Star = styled.div`
  display: inline-block;
  color: yellow; 
  animation: ${rotate360} 2s linear infinite ;
`