import React from 'react';
import { useParams } from 'react-router-dom';

const PetDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Pet Details</h2>
      <p>Display details for pet with ID: {id}</p>
    </div>
  );
};

export default PetDetails;
