import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleTrain() {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    fetch(`http://20.244.56.144/train/trains/${trainNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setTrain(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [trainNumber]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{train.trainName}</h1>
      <p>Train Number: {train.trainNumber}</p>
      
    </div>
  );
}

export default SingleTrain;
