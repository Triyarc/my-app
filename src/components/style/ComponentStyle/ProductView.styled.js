import styled from "styled-components";

export const ProductViewComponent = styled.div`
  border-left: 2px solid ${({ theme }) => theme.color.light_grey};
  height: 100%;

  .Result_Head {
    font-size: ${({ theme }) => theme.text?.smallTextHead};
    color: ${({ theme }) => theme.color.main_grey};
    font-weight: 700;
    margin-left: 20px;
    margin-bottom: 20px;
  }

  .Result_Head span {
    color: ${({ theme }) => theme.color.cherry_Red} !important;
  }
  
`;
