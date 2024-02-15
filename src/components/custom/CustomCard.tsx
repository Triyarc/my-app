import React from 'react';
import { Card } from 'react-bootstrap';
import { CustomCard, CardDetails } from '../style/ComponentStyle/CustomCard';
import { StoreItemProps } from '../../DataTypes';
import { useNavigate } from 'react-router-dom';

const StoreItem: React.FC<StoreItemProps> = ({ data }) => {
  const camelCase = (data: { pet: string }) => {
    let pet_variety = data.pet[0].toUpperCase();
    let pet_variety_rest = data.pet.slice(1).split('');
    let pet_variety_data = pet_variety + pet_variety_rest.join('');
    return pet_variety_data;
  };

  const navigate = useNavigate();

  const handleNavigate = (props: any) => {
    navigate(`/pets/${data.category}/:${props}`);
  };

  return (
    <CustomCard>
      <div
        className='card text-decoration-none '
        onClick={() => handleNavigate(data.id)} style={{cursor: "pointer"}}
      >
        <img src={data.images.image_one} alt='Pet' />
        <Card.Body>
          <CardDetails className='d-flex justify-content-between'>
            <div>
              <span className='text-danger mb-0 main_catagory_head'>
                {camelCase(data)}
              </span>
              &nbsp;:&nbsp;
              <span>{data.breed}</span>
            </div>
            {data.images.birth_certificate.image_one !== '' && (
              <div className='certificate'>Certificate</div>
            )}
          </CardDetails>
          <CardDetails>
            <span>Age</span>&nbsp;:&nbsp;<span>{data.age}</span>
          </CardDetails>
          <CardDetails className='d-flex justify-content-between'>
            <div>
              <span>Gender</span>&nbsp;:&nbsp;<span>{data.gender}</span>
            </div>
            <div className='uploaded'>Post On&nbsp;{data.posted_on}</div>
          </CardDetails>
        </Card.Body>
      </div>
    </CustomCard>
  );
};

export default StoreItem;
