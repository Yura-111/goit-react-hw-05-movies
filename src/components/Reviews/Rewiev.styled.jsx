import styled from 'styled-components';

export const StyledRewievTitle = styled.h4`
  margin-bottom: 16px;
`;

export const StyledRewiev = styled.p`
  line-height: 1.5;
  margin-left: 16px;
`;

export const RewievItem = styled.li`
  padding: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;
