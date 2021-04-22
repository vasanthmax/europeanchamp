import React, { useState, useEffect } from 'react';
import eventValues from '../assets/table.json';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Widget3 = () => {
  const calendar =
    'https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Other_elements/PNG/calendar.png';

  const calendarPlus =
    'https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Other_elements/PNG/calendar-plus.png';

  const rightArrow =
    'https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Other_elements/SVG/chevron_right.svg';
  const leftArrow =
    'https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Other_elements/SVG/chevron_left.svg';
  const data = [...eventValues];
  const [fDate, setfDate] = useState(11);

  const filterByDate = data.filter(
    (ch) =>
      parseInt(
        new Date(ch.start).getDate().toLocaleString('UTC', {
          timeZone: 'CET',
          day: '2-digit',
        })
      ) === fDate
  );
  const [filteredData, setFilteredData] = useState(filterByDate);
  const [week, setWeek] = useState(
    new Date(filteredData[0]['start']).toLocaleString('UTC', {
      timeZone: 'CET',
      weekday: 'long',
    })
  );
  const sportList = [];
  const dropdownlist = [];
  for (let i = 0; i < filterByDate.length; i++) {
    const gender = filterByDate[i].gender;
    if (dropdownlist.indexOf(gender) === -1) {
      dropdownlist.push(gender);
    }
  }
  const dropdown2 = ['Yes', 'No'];
  const [gender, setGender] = useState('No Filter Selected');
  const [medal, setMedal] = useState('No Filter Selected');
  const [sport, setSport] = useState('No Filter Selected');
  for (let i = 0; i < filterByDate.length; i++) {
    const sports = filterByDate[i].sport;
    if (sportList.indexOf(sports) === -1) {
      sportList.push(sports);
    }
  }
  const sportListUpdate = () => {
    for (let i = 0; i < filterByDate.length; i++) {
      const sports = filterByDate[i].sport;
      if (sportList.indexOf(sports) === -1) {
        sportList.push(sports);
      }
    }
  };
  const nextbutton = () => {
    const num = fDate === 21 ? 11 : fDate + 1;
    setfDate(num);
    const filterByDate = data.filter(
      (ch) =>
        parseInt(
          new Date(ch.start).getDate().toLocaleString('UTC', {
            timeZone: 'CET',
            day: '2-digit',
          })
        ) === num
    );
    setFilteredData(filterByDate);
  };

  const previousbutton = () => {
    const num = fDate === 11 ? 21 : fDate - 1;
    setfDate(num);
    const filterByDate = data.filter(
      (ch) =>
        parseInt(
          new Date(ch.start).getDate().toLocaleString('UTC', {
            timeZone: 'CET',
            day: '2-digit',
          })
        ) === num
    );
    setFilteredData(filterByDate);
  };

  const WeekDay = () => {
    const week = new Date(filteredData[0]['start']).toLocaleString('UTC', {
      weekday: 'long',
    });
    setWeek(week);
  };
  const genderFilter = () => {
    if (
      gender === 'No Filter Selected' &&
      medal == 'No Filter Selected' &&
      sport == 'No Filter Selected'
    ) {
      const filterbyUser = setFilteredData(filterByDate);
    }
    if (gender === 'No Filter Selected' && medal == 'No Filter Selected') {
      const filterbyUser = filterByDate.filter((ch) => ch.sport === sport);
      if (filterbyUser.length === 0) {
        console.log(`${gender} is not Available`);
      } else {
        setFilteredData(filterbyUser);
      }
    }
    if (medal === 'No Filter Selected' && sport === 'No Filter Selected') {
      const filterbyUser = filterByDate.filter((ch) => ch.gender === gender);
      if (filterbyUser.length === 0) {
        console.log(`${gender} is not Available`);
      } else {
        setFilteredData(filterbyUser);
      }
    }

    if (gender === 'No Filter Selected' && sport === 'No Filter Selected') {
      const filterbyUser = filterByDate.filter((ch) => ch.medal === medal);
      if (filterbyUser.length === 0) {
        console.log(`${gender} is not Available`);
      } else {
        setFilteredData(filterbyUser);
      }
    }

    if (gender === 'No Filter Selected') {
      const filterbyUser = filterByDate.filter(
        (ch) => ch.sport == sport && ch.medal == medal
      );
      if (filterbyUser.length === 0) {
        console.log(`${gender} is not Available`);
      } else {
        setFilteredData(filterbyUser);
      }
    }

    if (medal === 'No Filter Selected') {
      const filterbyUser = filterByDate.filter(
        (ch) => ch.gender === gender && ch.sport == sport
      );
      if (filterbyUser.length === 0) {
        console.log(`${gender} is not Available`);
      } else {
        setFilteredData(filterbyUser);
      }
    }

    if (sport === 'No Filter Selected') {
      const filterbyUser = filterByDate.filter(
        (ch) => ch.gender == gender && ch.medal === medal
      );
      if (filterbyUser.length === 0) {
        console.log(`${gender} is not Available`);
      } else {
        setFilteredData(filterbyUser);
      }
    }

    if (gender && sport && medal) {
      const filterbyUser = filterByDate.filter(
        (ch) => ch.gender == gender && ch.sport == sport && ch.medal == medal
      );
      if (filterbyUser.length === 0) {
        console.log(`${gender} is not Available`);
      } else {
        setFilteredData(filterbyUser);
      }
    } else if (gender && sport && medal) {
      const filterbyUser = filterByDate.filter(
        (ch) => ch.gender == gender && ch.sport == sport
      );
      if (filterbyUser.length === 0) {
        console.log(`${gender} is not Available`);
      } else {
        setFilteredData(filterbyUser);
      }
    } else if (sport && medal) {
      const filterbyUser = filterByDate.filter(
        (ch) => ch.sport == sport && ch.medal == medal
      );
      if (filterbyUser.length === 0) {
        console.log(`${gender} is not Available`);
      } else if (gender && medal) {
        const filterbyUser = filterByDate.filter(
          (ch) => ch.gender == gender && ch.medal == medal
        );
        if (filterbyUser.length === 0) {
          console.log(`${gender} is not Available`);
        }
      } else {
        setFilteredData(filterbyUser);
      }
    }

    // if (gender && sport && medal == 'All') {
    //   const filterbyUser = filterByDate.filter(
    //     (ch) => ch.gender == gender && ch.sport === sport
    //   );
    //   if (filterbyUser.length === 0) {
    //     console.log(`${gender} is not Available`);
    //   } else {
    //     setFilteredData(filterbyUser);
    //   }
    // }
    // if (sport && medal == 'All') {
    //   const filterbyUser = filterByDate.filter((ch) => ch.sport === sport);
    //   if (filterbyUser.length === 0) {
    //     console.log(`${gender} is not Available`);
    //   } else {
    //     setFilteredData(filterbyUser);
    //   }
    // }

    // if (gender && medal == 'All') {
    //   const filterbyUser = filterByDate.filter((ch) => ch.gender === gender);
    //   if (filterbyUser.length === 0) {
    //     console.log(`${gender} is not Available`);
    //   } else {
    //     setFilteredData(filterbyUser);
    //   }
    // }
  };

  useEffect(() => {
    WeekDay();
    sportListUpdate();
    setGender('No Filter Selected');
    setMedal('No Filter Selected');
    setSport('No Filter Selected');
  }, [fDate]);
  useEffect(() => {
    genderFilter();
  }, [gender, medal, sport]);
  return (
    <div className='widget3'>
      <div className='header'>
        <div className='date-carousel'>
          <img
            src={leftArrow}
            className='left-arrow'
            alt=''
            onClick={() => previousbutton()}
          />
          <div className='previous-date'>
            <p className='day'>{fDate === 11 ? 21 : fDate - 1}</p>
            <p className='month'>AUGUST</p>
            <p className='mon'>AUG</p>
          </div>
          <img
            src={rightArrow}
            className='right-arrow'
            alt=''
            onClick={() => nextbutton()}
          />
          <div className='next-date'>
            <p className='day'>{fDate === 21 ? 11 : fDate + 1}</p>
            <p className='month'>AUGUST</p>
            <p className='mon'>AUG</p>
          </div>
          <div className='main-carousel'>
            <div className='date'>
              <p className='weekday'>{week}</p>
              <p className='day'>{fDate}</p>
              <p className='august'>AUGUST</p>
            </div>
            <div className='sport'>
              <h3>AUGUST</h3>
              <p>
                SPORTS:
                <span>
                  {/* CYLCING BMX, CYCLING TRACK, ARTISTICS GYMNASTICS, ROWING,
                  SPORT CLIMBING, TABLE TENNIS, TRIATHLON */}
                  {sportList.join(', ')}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='filters'>
        <hr />
        <div className='filter-selector'>
          <Dropdown
            options={sportList}
            onChange={(e) => {
              setSport(e.value);
            }}
            value={sport === 'No Filter Selected' ? 'SPORTS' : sport}
            placeholder='Select an option'
          />
          <Dropdown
            options={dropdownlist}
            onChange={(e) => {
              setGender(e.value);
            }}
            value={gender === 'No Filter Selected' ? 'GENDER' : gender}
            placeholder='Select an option'
          />
          <Dropdown
            options={dropdown2}
            onChange={(e) => {
              setMedal(e.value);
            }}
            value={medal === 'No Filter Selected' ? 'MEDAL EVENT' : medal}
            placeholder='Select an option'
          />
        </div>
        <hr />
        <div className='selected-filters'>
          <div className='filter'>
            <p>Selected Filters:</p>
            {gender === 'No Filter Selected' ? (
              ''
            ) : (
              <p>
                <span onClick={() => setGender('No Filter Selected')}>x</span>
                {gender}
              </p>
            )}
            {medal === 'No Filter Selected' ? (
              ''
            ) : (
              <p>
                <span onClick={() => setMedal('No Filter Selected')}>x</span>
                {medal}
              </p>
            )}
            {sport === 'No Filter Selected' ? (
              ''
            ) : (
              <p>
                <span onClick={() => setSport('No Filter Selected')}>x</span>
                {sport}
              </p>
            )}
          </div>
          <p
            onClick={() => {
              setGender('No Filter Selected');
              setMedal('No Filter Selected');
              setSport('No Filter Selected');
            }}
            style={{ cursor: 'pointer' }}
          >
            Clear all
          </p>
        </div>
      </div>
      <div className='time-zone'>
        <p>*All times in Munich time (GMT+2). Show in local time.</p>
      </div>
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
          {filteredData.map((ch) => {
            let SportName = ch.sport;
            let MedalEvent;
            if (ch.sport === 'Canoe') {
              SportName = 'canoesprint';
            }
            if (ch.sport === 'Volleyball') {
              SportName = 'beachvolleyball';
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

            if (ch.medal == 'Yes') {
              MedalEvent = baseUrlMedal;
            } else {
              MedalEvent = baseUrlDot;
            }

            const startTime = new Date(ch.start).toLocaleString('UTC', {
              timeZone: 'CET',
              hour: '2-digit',
              minute: '2-digit',
            });
            const endTime = new Date(ch.end).toLocaleString('UTC', {
              timeZone: 'CET',
              hour: '2-digit',
              minute: '2-digit',
            });
            // console.log(startTime);
            return (
              <tr>
                <th className='sport'>{ch.sport}</th>
                <th className='event'>{ch.event}</th>
                <th className='time'>
                  {startTime} - {endTime}
                </th>
                <th className='medal'>
                  <img src={MedalEvent} alt='' />
                </th>
                <th className='venue'>{ch.venue}</th>
                <th className='calendar'>
                  <img src={calendarPlus} alt='' />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className='content-table-mobile'>
        <thead>
          <tr>
            <th className='sport-event'>SPORT & EVENT NAME</th>
          </tr>
          <tr>
            <th>TIME*</th>
            <th>MEDAL</th>
            <th>VENUE</th>
            <th className='addTo'>
              ADD TO <img src={calendar} alt='' />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((ch) => {
            let SportName = ch.sport;
            let MedalEvent;
            if (ch.sport === 'Canoe') {
              SportName = 'canoesprint';
            }
            if (ch.sport === 'Volleyball') {
              SportName = 'beachvolleyball';
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

            if (ch.medal == 'Yes') {
              MedalEvent = baseUrlMedal;
            } else {
              MedalEvent = baseUrlDot;
            }

            const startTime = new Date(ch.start).toLocaleString('UTC', {
              timeZone: 'CET',
              hour: '2-digit',
              minute: '2-digit',
            });
            const endTime = new Date(ch.end).toLocaleString('UTC', {
              timeZone: 'CET',
              hour: '2-digit',
              minute: '2-digit',
            });
            // console.log(startTime);
            return (
              <div className='table-row'>
                <tr>
                  <th className='event'>
                    {ch.sport} - {ch.event}
                  </th>
                </tr>

                <tr>
                  <th>
                    {startTime} - {endTime}
                  </th>
                  <th className='medal'>
                    <img src={MedalEvent} alt='' />
                  </th>
                  <th className='venue'>{ch.venue}</th>
                  <th className='calendar'>
                    <img src={calendarPlus} alt='' />
                  </th>
                </tr>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Widget3;
