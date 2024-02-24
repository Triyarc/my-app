import styled from "styled-components";

export const DetailsComponent = styled.div`
  margin-top: 20px;

  .price {
    display: flex;
    color: ${({ theme }) => theme.color.main_grey};
    font-size: ${({ theme }) => theme.text.mainHeading};
    font-weight: 700;
  }
  .description_head {
    color: ${({ theme }) => theme.color.main_grey};
    font-size: ${({ theme }) => theme.text.smallTextHead};
    font-weight: 600;
  }
  .description_para {
    color: ${({ theme }) => theme.color.main_grey};
    font-size: ${({ theme }) => theme.text.smallText};
    line-height: 25px;
    text-align: justify;
  }
  .Details {
    color: ${({ theme }) => theme.color.main_grey};
    font-size: ${({ theme }) => theme.text.smallTextHead};
    font-weight: 600;
  }
  .details_content {
    color: ${({ theme }) => theme.color.main_grey};
    font-size: ${({ theme }) => theme.text.smallText};
    line-height: 25px;
    text-align: justify;
  }
  .Verified {
    display: flex;
    color: ${({ theme }) => theme.color.green};
    font-size: ${({ theme }) => theme.text.mainHeading};
    font-weight: 700;
  }
  .Info_details_box {
    border: 2px solid ${({ theme }) => theme.color.main_grey};
    border-radius: 8px;
    font-size: ${({ theme }) => theme.text.mainHeading};
    font-weight: 600;
  }
  hr {
    margin: 1rem 0;
    color: inherit;
    border: 0;
    border-top: 2px solid ${({ theme }) => theme.color.main_grey};
    opacity: 7.25;
  }
  .login_Button {
    border: 2px solid  ${({ theme }) => theme.color.main_grey};
    border-radius: 3px;
    font-size: ${({ theme }) => theme.text.smallText};
    font-weight: 600;
    width: 100%;
    height: 44px;
    background-color: ${({ theme }) => theme.color.yellow_background};
  }
  .detail_info {
    color: ${({ theme }) => theme.color.main_grey};
    font-size: ${({ theme }) => theme.text.mainContentRegularText};
    line-height: 25px;
    text-align: justify;
  }
  .detail_info_des {
    color: ${({ theme }) => theme.color.light_grey};
    font-size: ${({ theme }) => theme.text.mainContentRegularText};
  }
`;
