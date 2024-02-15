import styled from 'styled-components';

export const FooterContainer = styled.div`
  color: ${({ theme }) => theme.color.main_grey};
  background-color: ${({ theme }) => theme.color.yellow_background};
  left: 0;
  bottom: 0;
  width: 100%;

  div .f_logo_description {
    font-size: 14px;
    color: ${({ theme }) => theme.color.main_grey};
    font-weight: 400;
    line-height: 24px;
  }
  .f_copyright_section {
    background-color: ${({ theme }) => theme.color.main_grey};
  }
  .f_social_media_icons svg {
    font-size: 20px;
    margin-right: 14px;
    color: ${({ theme }) => theme.color.main_grey};
  }
  .f_enquiry_input textarea {
    margin-top: 10px;
    border-radius: 10px;
  }
  .f_enquiry_input input[type='submit'] {
    background: ${({ theme }) => theme.color.main_grey};
    margin-top: 5px;
    margin-bottom: 20px;
    border-radius: 25px;
    font-size: 14px;
    padding: 5px 15px;
    color: ${({ theme }) => theme.color.white};
  }
  .f_copyright_section .f_useFull_links a {
    color: ${({ theme }) => theme.color.white};
    padding-right: 15px;
    text-decoration: none;
    font-size: 14px;
  }
  .f_copyright_section p {
    color: ${({ theme }) => theme.color.white};
    font-size: 13px;
    padding-top: 7px;
  }
  .f_copyright_section {
    text-align: center;
  }
  .f_head {
    font-size: ${({ theme }) => theme.text.smallTextHead};
    font-weight: 600;
  }
  .f_useful_link_links ul li a {
    color: ${({ theme }) => theme.color.main_grey};
    padding-right: 15px;
    text-decoration: none;
    font-size: ${({ theme }) => theme.text.smallText};
    line-height: 30px;
    font-weight: 500;
  }
  .f_useful_link_links ul {
    list-style: none;
    padding: 0px;
  }
  textarea::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color.main_grey};
    font-size: 13px;
    font-weight: 400;
    opacity: 0.9;
    font-family: Open Sans;
    padding: 5px;
  }
  //  ------- min 768

  @media (min-width: 1024px) {
  }

  // -------- max 767

  @media (max-width: ${({ theme }) => theme.tablet}) {
  }
`;
