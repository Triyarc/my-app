import React from "react";
import { DetailsComponent } from "../../style/ComponentStyle/Details.styled";

const Details: React.FC = () => {
  return (
    <DetailsComponent>
      <div className='row mt-5 '>
        <div className='col-8  ps-0 pe-5'>
          <div className='price'>
            <div className=''>Price For Adoption : </div>
            <div className=''>&nbsp;₹ 6,000</div>
          </div>
          <div className='description_head my-3'>Description about pet :</div>
          <div className='description_para'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            officia ipsam quasi doloribus excepturi ducimus libero asperiores,
            architecto nesciunt accusamus sed laudantium commodi rem ullam,
            nulla repellendus voluptatem fugit consectetur, consequatur eligendi
            magnam cumque et! Quas numquam rerum necessitatibus quis ipsum
            repudiandae repellat error soluta dolores voluptatibus sunt officia
            consequatur ut dignissimos, distinctio eius, itaque at. Maiores
            pariatur saepe asperiores eligendi velit. Exercitationem beatae
            obcaecati iste in, velit quibusdam eligendi. Aliquam suscipit,
            numquam repellendus ea tempora deserunt totam reiciendis facilis
            voluptates itaque inventore velit, accusamus pariatur atque
            voluptatibus, ullam impedit quas illum eius! Similique veritatis sit
            commodi cumque ex corrupti.
          </div>
          <div className=' Details  my-3'>Details :</div>
          <div className='row'>
            <div className='col-4 details_content'>
              Height&nbsp;:&nbsp;1.9ft
            </div>
            <div className='col-4 details_content'>
              weight&nbsp;:&nbsp;4.2kg
            </div>
            <div className='col-4 details_content'>color&nbsp;:&nbsp;brown</div>
            <div className='col-4 mt-3 details_content'>
              Age&nbsp;:&nbsp;6 Month
            </div>
            <div className='col-4 mt-3 details_content'>
              Certificate&nbsp;:&nbsp;Yes
            </div>
            <div className='col-4 mt-3 Verified'>Verified</div>
          </div>
        </div>
        <div className='col-4 '>
          <div className='ms-3 Info_details_box'>
            <div className='container p-4'>
              <div>Contact Details</div>
              <hr />
              <button className="login_Button my-2"> Login To Get Details</button>
              <div className="detail_info pt-3">Details Info :</div>
              <div className="detail_info_des">Contacts , Account Details and Certificate </div>
            </div>

          </div>
        </div>
      </div>
    </DetailsComponent>
  );
};

export default Details;
