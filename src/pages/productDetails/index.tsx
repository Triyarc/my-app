import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ImagePicker from "../../components/pageComponent/ProductDetails/ImagePicker";
import { ProductDetailsComponent } from "../../components/style/pageStyle/ProductDetails.styled";
import Details from "../../components/pageComponent/ProductDetails/Details";

const PetDetails: React.FC = () => {
  const { id } = useParams();

  return (
    <ProductDetailsComponent>
      <div className='container mt-5 '>
        <div className='head_and_upload mb-5'>
          <div className='breed_head'>
            <div className='mt-2 category_head'>Dog : </div>
            <div className='mb-0 breed_head'>&nbsp;Mustif</div>
          </div>
          <div className="uploaded ms-3 mt-2" >Uploaded On :&nbsp;14/08/2016</div>
        </div>
        {/* <p>Display details for pet with ID: {id}</p> */}
        <ImagePicker />
        <Details/>
      </div>
    </ProductDetailsComponent>
  );
};

export default PetDetails;
