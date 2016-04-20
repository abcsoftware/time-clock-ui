import React, { Component } from 'react';
import Day from '../day/Day';
import css from './TimeLog.css';
import appcss from '../App.css';

export default class TimeLog extends Component {

  componentWillMount() {
    this.props.fetch();
  }

  render() {

    const { days, daysFetching } = this.props;

    if (daysFetching) {
      return (
        <div className={css.timeLogPanel}>
          <div className={appcss.alertInfo}>
            Loading...
          </div>
        </div>
      );
    }

    if (!days || days.length<1) {
      return (
        <div className={css.timeLogPanel}>
          <div className={appcss.alertInfo}>
            No punches found, please add one.
          </div>
        </div>
      );
    }

    return (
      <div className={css.timeLogPanel}>
        <table>
            <thead>
                <tr>
                    <th colSpan="2">Time Log</th>
                </tr>
            </thead>
            <tfoot>
            </tfoot>
            <tbody>
                {days.map(this.getDayRow)}
            </tbody>
        </table>
      </div>
    )
  }

  getDayRow(day, index) {
    return  <Day key={day.date} className={css.day} day={day}/>;
  }

}
