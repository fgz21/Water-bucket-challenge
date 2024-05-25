import React, { useState } from 'react';
import Jar from '../components/jar';
import './style/section.css';

function Section() {
  const [bucketX, setBucketX] = useState(0);
  const [bucketY, setBucketY] = useState(0);
  const [hasSolution, setHasSolution] = useState(true);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value.match(/^\d+$/)) {
      setBucketX(parseInt(value));
      setBucketY(0);
      setHasSolution(true); 
    } else if (value === '') {
      setBucketX(0);
      setBucketY(0);
      setHasSolution(true); 
    }
  };

  const handleFillBucketX = () => {
    setBucketX(bucketX + parseInt(prompt("Enter the amount to add to cube X")));
    setBucketY(0);
    setHasSolution(true); 
  };

  const handleFillBucketY = () => {
    setBucketX(0);
    setBucketY(100);
    setHasSolution(true);
  };

  const handleEmptyBucketX = () => {
    setBucketX(0);
    setHasSolution(true); 
  };

  const handleEmptyBucketY = () => {
    setBucketY(0);
    setHasSolution(true); 
  };

  const handleTransfer = () => {
    const transferAmount = parseInt(prompt("Enter the amount to transfer from cube X to cube Y"));
    if (transferAmount <= bucketX && transferAmount <= 100 - bucketY) {
      setBucketX(bucketX - transferAmount);
      setBucketY(bucketY + transferAmount);
      setHasSolution(true); 
    } else {
      setHasSolution(false); 
    }
  };

  const handleTransferFromYtoX = () => {
    if (bucketY > 0 && bucketX < 100) {
      const transferAmount = Math.min(bucketY, 100 - bucketX);
      setBucketX(bucketX + transferAmount);
      setBucketY(bucketY - transferAmount);
      setHasSolution(true); 
    } else {
      setHasSolution(false); 
    }
  };

  return (
    <section className="app-container">
      <section className="input-container">
        <h2>Enter the numerical unit</h2>
        <input
          type="text"
          id="myInput"
          name="myInput"
          placeholder="Enter the numerical unit here"
          pattern="\d*"
          defaultValue={bucketX}
          value={null}
          onChange={handleInputChange}
        />
        <button className="fill-bucket-x-button" onClick={handleFillBucketX}>Fill bucket X</button>
        <button className="fill-bucket-y-button" onClick={handleFillBucketY}>Fill bucket Y</button>
        <button className="empty-bucket-x-button" onClick={handleEmptyBucketX}>Empty bucket X</button> 
        <button className="empty-bucket-y-button" onClick={handleEmptyBucketY}>Empty bucket Y</button> 
        <button className="transfer-to-bucket-y-button" onClick={handleTransfer}>Transfer from bucket X to Y</button>
        <button className="transfer-from-bucket-y-to-x-button" onClick={handleTransferFromYtoX}>Transfer from bucket Y to X</button>
      </section>
      <div className="jars-container">
        <h3>X</h3>
        <Jar measurement={bucketX} />
        <h3>Y</h3>
        <Jar measurement={bucketY} />
      </div>
      {hasSolution ? null : <p>No hay solución</p>} 
    </section>
  );
}

export default Section;