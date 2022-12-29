import styled from 'styled-components';

export const DescriptionStyled = styled.div`
  margin-bottom: 8px;
  padding: 16px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 32px;

    gap: 24px;
  }
`;

export const Poster = styled.img`
  max-width: 320px;

  @media screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
`; 
