import React, { Component } from "react";

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: 99,
      minutes: 59,
      seconds: 1,
    };

    this.countdown = this.countdown.bind(this);
  }

  countdown() {
    setTimeout(() => {
      let { seconds } = this.state;
      this.setState({ seconds: seconds + 1 });
    }, 1000);
  }

  render() {
    return (
      <h1>
        {this.countdown()}
        {this.state.seconds}s
      </h1>
    );
  }
}

export default Countdown;
