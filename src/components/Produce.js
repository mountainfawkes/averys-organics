import React from 'react';

function Produce(props) {
  return (
    <div class="content">
      <h3>In {props.availableProduce[new Date().getMonth()].month}, the following produce will be available:</h3>
      <ul>
        {props.availableProduce[0].selection.map(product => {
          return <li>{product}</li>
        })
        }
      </ul>
    </div>
  )
}

export default Produce;