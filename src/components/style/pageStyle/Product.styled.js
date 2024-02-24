import styled from "styled-components";

export const ProductContainer = styled.div`
  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
  }

  .page-item {
    margin: 0 5px;
  }

  .page-link {
    padding: 8px 12px;
    background-color: ${({ theme }) => theme.color.light_grey};
    color: #fff;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .page-link:hover {
    background-color: ${({ theme }) => theme.color.main_grey};
  }

  .active .page-link {
    background-color: ${({ theme }) => theme.color.main_grey};
  }
`;
