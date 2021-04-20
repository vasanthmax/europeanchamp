import React, { useState } from 'react';
import eventValues from '../assets/table.json';

const Widget3 = () => {
  const calendar =
    'https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Other_elements/PNG/calendar.png';

  const calendarPlus =
    'https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Other_elements/PNG/calendar-plus.png';

  const data = [...eventValues];
  const filterByDate = data.filter(
    (ch) =>
      new Date(ch.start).getDate().toLocaleString('UTC', {
        timeZone: 'CET',
        day: '2-digit',
      }) === '13'
  );
  const [filteredData, setFilteredData] = useState(filterByDate);

  return (
    <div className='widget3'>
      <div className='header'></div>
      <table className='date-event-table'>
        <thead>
          <th>SPORT</th>
          <th>EVENT NAME</th>
          <th>TIME*</th>
          <th>MEDAL</th>
          <th>VENUE</th>
          <th className='addTo'>
            ADD TO <img src={calendar} alt='' />
          </th>
        </thead>
        <tbody>
          {filteredData.map((sport) => {
            let SportName = sport.sport;
            let MedalEvent;
            if (sport.sport == 'Canoe') {
              sport = 'canoesprint';
            }
            if (sport.sport == 'Volleyball') {
              sport = 'beachvolleyball';
            }
            const baseUrlDot = `https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_${SportName.split(
              ' '
            )
              .join('')
              .toLowerCase()}_dot_rgb.svg`;
            const baseUrlMedal = `https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_${SportName.split(
              ' '
            )
              .join('')
              .toLowerCase()}_medalicon_rgb.svg`;

            if (sport.medal == 'Yes') {
              MedalEvent = baseUrlMedal;
            } else {
              MedalEvent = baseUrlDot;
            }

            const startTime = new Date(sport.start).toLocaleString('UTC', {
              timeZone: 'CET',
              hour: '2-digit',
              minute: '2-digit',
            });
            const endTime = new Date(sport.end).toLocaleString('UTC', {
              timeZone: 'CET',
              hour: '2-digit',
              minute: '2-digit',
            });
            console.log(startTime);
            return (
              <tr>
                <th className='sport'>{sport.sport}</th>
                <th className='event'>{sport.event}</th>
                <th className='time'>
                  {startTime} - {endTime}
                </th>
                <th className='medal'>
                  <img src={MedalEvent} alt='' />
                </th>
                <th className='venue'>{sport.venue}</th>
                <th className='calendar'>
                  <img src={calendarPlus} alt='' />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Widget3;
