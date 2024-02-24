import styled from "styled-components";

export const ProductDetailsComponent = styled.div`
  .breed_head {
    display: flex;
  }
  .head_and_upload {
    justify-content: space-between;
    display: flex;
  }
  .breed_head {
    color: ${({ theme }) => theme.color.main_grey};
    font-size: 22px;
    font-weight: 800;
  }
  .category_head {
    color: ${({ theme }) => theme.color.main_grey};
    font-size: ${({ theme }) => theme.text.smallTextHead};
    font-weight: 600;
  }
  .uploaded {
    color: ${({ theme }) => theme.color.light_grey};
    font-size: ${({ theme }) => theme.text.smallText};
    font-weight: 600;
  }
`;
