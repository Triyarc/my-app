import styled from 'styled-components';

export const HomeContainer = styled.div`
  .heroImg {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 325px;
    width: 100%;
  }
  .view_all {
    font-size: ${({ theme }) => theme.text?.smallTextHead};
    font-weight: 600;
  }
  .right_arrow {
    font-size: 22px;
    font-weight: 600;
  }
`;
