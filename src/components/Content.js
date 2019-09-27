// import 'date-fns';
import React, { useState, useRef, useEffect } from 'react';
import Clock from 'react-clock';
import TimePicker from './TimePicker';
import moment from 'moment';

export default function Content() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useInterval(() => {
    setSelectedDate(
      new Date(
        moment(selectedDate)
          .add(1, 'seconds')
          .format('YYYY/MM/DD HH:mm:ss'),
      ),
    );
  }, 1000);

  const londonTime = new Date(
    moment(selectedDate)
      .tz('Europe/London')
      .format('YYYY/MM/DD HH:mm:ss'),
  );
  const NewYork = new Date(
    moment(selectedDate)
      .tz('America/New_York')
      .format('YYYY/MM/DD HH:mm:ss'),
  );
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <p>London</p>
          <Clock value={londonTime} renderSecondHand={false} />
          {console.log(londonTime)}
        </div>
        <div>
          <p>Kyiv</p>
          <Clock value={selectedDate} renderSecondHand={false} />
        </div>
        <div>
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
