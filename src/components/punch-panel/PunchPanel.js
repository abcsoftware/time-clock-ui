import React, { Component } from 'react';
import css from './PunchPanel.css';
import moment from 'moment';

export default class PunchPanel extends Component {

  componentDidMount() {
      this.timer = setInterval(this.digclock, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { isPunchedIn } = this.props;
    var bt = !isPunchedIn ? css.punchIn : css.punchOut;
    var btText = !isPunchedIn ? "Punch In" : "Punch Out";
    return (
      <div className={css.punchPanelWrapper}>
        <div className={css.clockPanel}>
          <div id="date" className={css.date}>Loading</div>
          <div id="clock" className={css.clock}>...</div>
        </div>
        <div className={css.buttonPanel}>
          <button type="button" className={bt}
                onClick={() => this.punch()}>{btText}</button>
        </div>
      </div>
    )
  }

  punch() {
    this.props.punchClock();
  }

  digclock() {
    var d = moment().format("dddd, MMMM D, YYYY");
    document.getElementById("date").innerHTML = d;
    var t = moment().format("h:mm:ss A");
    document.getElementById("clock").innerHTML = t;
  }
}
