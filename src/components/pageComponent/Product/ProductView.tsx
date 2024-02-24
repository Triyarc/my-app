import React, { useEffect, useState } from "react";
import { ProductViewComponent } from "../../style/ComponentStyle/ProductView.styled";
import { Col, Row } from "react-bootstrap";
import CustomCard from "../../custom/CustomCard";
import { ProductViewProps } from "../../../DataTypes";

const ProductView: React.FC<ProductViewProps> = ({ data, categoryResult }) => {
  return (
    <ProductViewComponent>
      <div className='Result_Head '>
        Result For : <span>{categoryResult}</span>
      </div>
      <Row xs={1} md={2} lg={3} className='g-4 mx-3'>
        {data?.map((el: any, i: React.Key | null | undefined) => (
          <Col key={i}>
            <CustomCard data={el} />
          </Col>
        ))}
      </Row>
    </ProductViewComponent>
  );
};

export default ProductView;
