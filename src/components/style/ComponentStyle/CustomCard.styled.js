import styled from 'styled-components';

export const CustomCardComponent = styled.div`
  a {
    border: 1px solid ${({ theme }) => theme.color.border_Color};
  }
`;
export const CardDetails = styled.div`
  font-size: ${({ theme }) => theme.text.mainContentRegularText};

  .main_catagory_head {
    font-size: ${({ theme }) => theme.text.smallTextHead};
    font-weight: 600;
  }
  .uploaded {
    font-size: 11px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.light_grey};
  }
  .certificate {
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.green};
  }
`;
