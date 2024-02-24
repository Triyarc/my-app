import styled from 'styled-components';

export const MainCardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border_Color};
  border-radius: 40px;
  background-color: ${({ theme }) => theme.color.home_container_bg};
  .container_head {
    font-size: ${({ theme }) => theme.text?.smallTextHead};
    font-weight: 700;
    margin-bottom: 20px;
  }
`;
