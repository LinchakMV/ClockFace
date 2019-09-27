import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import PropTypes from 'prop-types';

export default class TimePicker extends Component {
  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={this.props.selectedDate}
            onChange={this.props.handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

TimePicker.propTypes = {
  selectedDate: PropTypes.object,
  handleDateChange: PropTypes.func,
};
