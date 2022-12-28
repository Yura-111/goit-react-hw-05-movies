import styled from 'styled-components';

export const StyledList = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, 220px);
    gap: 12px;
  }
`;

export const StyledItem = styled.li`
  padding: 16px;
  align-items: center;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  @media screen and (max-width: 767px) {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const Photo = styled.img`
  margin-bottom: 8px;
  width: 100px;
`;

export const Description = styled.p`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
