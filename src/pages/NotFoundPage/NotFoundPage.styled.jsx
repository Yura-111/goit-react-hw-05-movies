import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 148px;
  margin: 0px auto 10px;
  z-index: -1;

  @media screen and (min-width: 480px) {
    height: 200px;
    margin: 0px auto 20px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 86px;
  font-weight: 200;
  margin: 0px;
  color: #211b19;
  text-transform: uppercase;
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  @media screen and (min-width: 375px) {
    font-size: 102px;
  }

  @media screen and (min-width: 480px) {
    font-size: 148px;
  }

  @media screen and (min-width: 768px) {
    font-size: 236px;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: #211b19;
  background: #fff;
  padding: 10px 5px;
  max-width: 420px;
  margin: auto;
  display: inline-block;
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;

  @media screen and (min-width: 480px) {
    font-size: 26px;
  }
`;

export const HomeLink = styled(Link)`
  display: inline-block;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  padding: 7px 15px;
  font-size: 14px;
  background: orangered;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;

  :hover,
  :focus {
    color: orangered;
    background: #211b19;
  }

  @media screen and (min-width: 480px) {
    padding: 13px 23px;
    font-size: 18px;
  }
`;
