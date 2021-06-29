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
    const val = parseInt(event.target.id);
    const selectedMonth = this.state.selectedMonth;
    if (selectedMonth + val < 0) {
      this.setState({ selectedMonth: 12 + val });
    } 
    else if (selectedMonth + val > 11) {
      this.setState({ selectedMonth: -1 + val });
    }
    else {
      if (val === 0) {
        this.setState({ selectedMonth: new Date().getMonth() });
      } else {    
        selectedMonth = this.state.selectedMonth + val;
        this.setState({ selectedMonth: selectedMonth });
      }
    }
  }

  render() {

    return (
      <>
        <main>
          <p>Market details</p>
          <p><button id="-1" onClick={this.handleMonthChange}>Previous Month</button></p>
          <p><button id="0" onClick={this.handleMonthChange}>Current Month</button></p>
          <p><button id="1" onClick={this.handleMonthChange}>Next Month</button></p>

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
