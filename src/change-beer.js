import React, { useState, useEffect } from 'react';
import FindBeer from './search-beer';

const ChangeBeer = (props) => {
  const [id, setId] = useState(25);
  const { onChange } = props;

  function onBeerChange(termId) {
    setId(+termId);
    onChange(+termId);
  }

  useEffect(() => {
    onChange(id);
  }, [id]);

  return (
    <div className="wrapp-for-buttons">
      <div className="buttons">
        <button onClick={() => setId((id) => id + 1)}>Next Beer</button>
        <button onClick={() => setId((id) => id - 1)} disabled={id === 1}>
          Prev Beer
        </button>
        <FindBeer onBeer={onBeerChange} />
      </div>
    </div>
  );
};

export default ChangeBeer;
