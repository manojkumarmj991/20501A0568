import React, { useEffect, useState } from 'react';

function AllTrains() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetch('http://20.244.56.144/train/trains')
      .then((response) => response.json())
      .then((data) => {
        setTrains(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <ul>
        {trains.map((train) => (
          <li key={train.trainNumber}>
            <a href={`/train/${train.trainNumber}`}>{train.trainName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTrains;
