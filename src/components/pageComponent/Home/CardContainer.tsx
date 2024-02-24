import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Post } from "../../../data/post";
import CustomCard from "../../custom/CustomCard";
import { Col, Row } from "react-bootstrap";
import { MainCardContainer } from "../../style/ComponentStyle/CardContainer.styled";
import { productCategory } from "../../../data/product";
import { useNavigate } from "react-router-dom";

interface CardContainerProps {}

const CardContainer: React.FC<CardContainerProps> = () => {
  let mate = Post.filter((el: any) => el.category === "mating");
  let adopt = Post.filter((el: any) => el.category === "adoption");

  const navigate = useNavigate();

  // Set default limitedIterations value
  let limitedIterations = 6;

  const handleProductCategory = (props: string) => {
    if (props === "Mating") {
      navigate("/pets/mating");
    } else if (props === "Adoption") {
      navigate("/pets/adoption");
    }
  };

  return (
    <MainCardContainer>
      <div className='p-lg-4 ps-lg-5 pb-lg-5'>
        <p className='container_head mt-lg-4'>Recent Post For Mating</p>
        <Row xs={1} md={2} lg={3} className='g-4'>
          {mate
            ?.slice(0, limitedIterations)
            .map((el: any, i: React.Key | null | undefined) => (
              <Col key={i}>
                <CustomCard data={el} />
              </Col>
            ))}
        </Row>
        <Row className='align-items-center justify-content-end mt-3'>
          <Col sm={2}>
            <button
              className='text-decoration-none view_all d-block text-center btn btn-outline-primary text-end'
              onClick={() => handleProductCategory(productCategory?.Mating)}
            >
              View All <BsArrowRight className='right_arrow' />
            </button>
          </Col>
        </Row>

        <p className='container_head mt-lg-5'>Recent Post For Pet Adoption</p>
        <Row xs={1} md={2} lg={3} className='g-4'>
          {adopt
            ?.slice(0, limitedIterations)
            .map((el: any, i: React.Key | null | undefined) => (
              <Col key={i}>
                <CustomCard data={el} />
              </Col>
            ))}
        </Row>
        <Row className='align-items-center justify-content-end mt-3'>
          <Col sm={2}>
            <button
              className='text-decoration-none view_all text-center d-block btn btn-outline-primary text-end'
              onClick={() => handleProductCategory(productCategory?.adoption)}
            >
              View All <BsArrowRight className='right_arrow' />
            </button>
          </Col>
        </Row>
      </div>
    </MainCardContainer>
  );
};

export default CardContainer;
