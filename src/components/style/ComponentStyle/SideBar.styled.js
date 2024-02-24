import styled from "styled-components";

export const SideBarComponent = styled.div`
  .sidebar {
    font-size: ${({ theme }) => theme.text?.smallTextHead};
    color: ${({ theme }) => theme.color.main_grey};
    font-weight: 700;
    margin-bottom: 20px;
  }
  .sidebar_Head {
    font-size: ${({ theme }) => theme.text?.mainHeading};
    font-weight: 800;
    color: ${({ theme }) => theme.color.main_grey};
  }

  .radio-label {
   margin-bottom: 12px;
    align-items: center;
    cursor: pointer;
  }

  .radio-label input[type="checkbox"],
  .radio-label input[type="radio"] {
    margin-right: 8px;
    cursor: pointer;
  }
  
`;
