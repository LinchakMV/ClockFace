import React, { useState, useRef, useEffect } from 'react';
import Clock from 'react-clock';
import TimePicker from './TimePicker';
import moment from 'moment';
import { dateFormat } from '../utils/utils';

export default function Content({ currentTime }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  let [prevCurrentTime, setPrevCurrentTime] = useState(null);

  if (currentTime !== prevCurrentTime) {
    setSelectedDate(currentTime);
    setPrevCurrentTime(currentTime);
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    window.localStorage.setItem('selectedDate', JSON.stringify(selectedDate));
  });
  useInterval(() => {
    setSelectedDate(
      new Date(
        moment(selectedDate)
          .add(1, 'seconds')
          .format(dateFormat),
      ),
    );
  }, 1000);

  const londonTime = new Date(
    moment(selectedDate)
      .tz('Europe/London')
      .format(dateFormat),
  );
  const NewYork = new Date(
    moment(selectedDate)
      .tz('America/New_York')
      .format(dateFormat),
  );
  return (
    <div className="body-wrapper">
      <div className="body-content">
        <div className="clock">
          <p>London</p>
          <Clock value={londonTime} renderSecondHand={false} />
        </div>
        <div className="clock">
          <p>Kyiv</p>
          <Clock value={selectedDate} renderSecondHand={false} />
        </div>
        <div className="clock">
          <p>New York</p>
          <Clock value={NewYork} renderSecondHand={false} />
        </div>
      </div>
      <TimePicker handleDateChange={handleDateChange} selectedDate={selectedDate} />
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
