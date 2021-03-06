import styled from 'styled-components';

import TriangleLogo from '../../assets/TriangleLogo.png';
import Hamburguer from '../../assets/Hamburguer.png';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: TriangleLogo,
})``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    margin: 60px;
    width: 30%;
  }
`;

export const ButtonMoreInfo = styled.button`
  width: 219px;
  height: 60px;
  background: ${(props) => props.theme.colors.gradient};
  border-radius: 57px;
  color: ${(props) => props.theme.colors.primary};
  border: 0;
  font-family: Source Sans Pro;

  &:hover {
    cursor: pointer;
  }
`;

export const HamburguerButton = styled.img.attrs({
  src: Hamburguer,
})`
  width: 42.09px;
  height: 24.58px;

  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    margin: 20px;
  }
`;
