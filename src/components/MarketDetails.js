import React, { Component } from 'react';
import Location from './Location';
import Produce from './Produce';
import availableProduce from './availableProduce.json';
import marketSchedule from './marketSchedule.json';

class MarketDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: new Date().getMonth(),
      availableProduce: availableProduce,
      marketSchedule: marketSchedule,
    }
  }

  handleMonthChange = (event) => {
    console.log(event.target)
    this.setState({ selectedMonth: event.target.id })
    
  }

  render() {
    return (
      <>
        <main>
          <p>Market details</p>
          <p>Previous month</p>
          <p>Current month</p>
          <p>Next month</p>

          <Produce
            availableProduce = { this.state.availableProduce }
            selectedMonth = { this.state.selectedMonth }
          />
          <Location />
        </main>
      </>
    );
  }
}


export default MarketDetails;

