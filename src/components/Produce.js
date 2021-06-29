import React from 'react';

function Produce({availableProduce, selectedMonth}) {
  return (
    <div className="content">
      <h3>In {availableProduce[selectedMonth].month}, the following produce will be available:</h3>
      <ul>
        {availableProduce[selectedMonth].selection.map((product, idx) => {
          return <li key={idx}>{product}</li>
        })
        }
      </ul>
    </div>
  )
}

export default Produce;