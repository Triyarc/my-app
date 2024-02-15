import styled from 'styled-components';

export const NavContainer = styled.div`
  background-color: rgb(252, 200, 2);
  .f_search_container {
    float: left;
    width: 400px;
  }

  .f_search_container input[type='text'] {
    padding: 6px;
    font-size: 17px;
    border: none;
    font-weight: 600;
    color: ${({ theme }) => theme.color.main_grey};
  }
  .login_Btn {
    width: 100px;
    background: ${({ theme }) => theme.color.main_grey};
    border: none;
  }
  input {
    border-radius: 20px;
  }
  .search_btn {
    border-radius: 20px;
    background: ${({ theme }) => theme.color.main_grey};
    margin: 5px;
  }
  .nav-link {
    font-size: ${({ theme }) => theme.text.smallTextHead};
    font-weight: 600;
  }

  // ====== min 550
  .search_btn {
    width: 100px;
  }

  // ------ max 550

  @media (max-width: 550px) {
    position: none;

    .f_search_container {
      float: left;
      width: 60%;
    }
    .search_btn {
      width: 50px;
    }
  }
`;
