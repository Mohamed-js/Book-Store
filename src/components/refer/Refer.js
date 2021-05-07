import React from 'react';
import { useParams } from 'react-router-dom';

const Refer = () => {
  const { specialist } = useParams();
  return (
    <>
      <h1 className="p-3 default center w-100">
        You have to see a {specialist.toUpperCase()} as soon as possible,
      </h1>
      <h2 className="p-5 secondary center w-100">Feel better soon!</h2>
    </>
  );
};

export default Refer;
