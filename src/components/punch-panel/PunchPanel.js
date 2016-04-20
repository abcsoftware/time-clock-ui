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
    var s = true;
    var bt = s ? css.punchIn : css.punchOut;
    var btText = s ? "Punch In" : "Punch Out";
    return (
      <div className={css.punchPanelWrapper}>
        <div className={css.clockPanel}>
          <div id="date" className={css.date}>Loading</div>
          <div id="clock" className={css.clock}>...</div>
        </div>
        <button type="button" className={bt}
                onClick={() => this.punch()}>{btText}</button>
      </div>
    )
  }

  punch() {
    var days = [{
      date: "Monday April 11, 2016",
      isExpanded: false,
      total: {
        hours: 1,
        minutes: 0
      },
      punches: [{
        id: "asdfdf",
        in : "4:47",
        out: "8:30"
      }, {
        id: "afasdf",
        in : "8:47",
        out: "9:30"
      }]
    }, {
      date: "Tuesday April 12, 2016",
      isExpanded: false,
      total: {
        hours: 5,
        minutes: 15
      },
      punches: [{
        id: "asdfdf",
        in : "4:47",
        out: "8:30"
      }, {
        id: "afasdf",
        in : "8:47",
        out: "9:30"
      }, {
        id: "asdfaf",
        in : "10:00",
        out: "10:40"
      }, {
        id: "asdfas",
        in : "10:47",
        out: "12:50"
      }]
    }, {
      date: "Wednesday April 13, 2016",
      isExpanded: true,
      total: {
        hours: 5,
        minutes: 0
      },
      punches: [{
        id: "asdfd",
        in : "8:30",
        out: "12:30"
      }, {
        id: "sdfas",
        in : "1:00",
        out: "-"
      }]
    }];
    debugger;
    this.props.saveDays(days);
  }

  digclock() {
    var d = moment().format("dddd, MMMM D, YYYY");
    document.getElementById("date").innerHTML = d;
    var t = moment().format("h:MM:ss A");
    document.getElementById("clock").innerHTML = t;
  }
}
