import React, { useState, useEffect } from 'react';
import eventValues from '../assets/table.json';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';

const Widget2 = () => {
  const data = [...eventValues];
  let sport = window.location.pathname.split('/').pop().replace('%20', ' ');
  console.log(sport);
  const filteredValues = data.filter((ch) => ch.sport === sport);
  const [filteredData, setFilteredData] = useState(filteredValues);

  if (sport == 'Canoe') {
    sport = 'canoesprint';
  }
  if (sport == 'Volleyball') {
    sport = 'beachvolleyball';
  }
  const baseUrlDot = `https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_${sport
    .split(' ')
    .join('')
    .toLowerCase()}_dot_rgb.svg`;
  const baseUrlMedal = `https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_${sport
    .split(' ')
    .join('')
    .toLowerCase()}_medalicon_rgb.svg`;
  const baseUrlPicto = `https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Pictograms/PNG/ec_${sport
    .split(' ')
    .join('')
    .toLowerCase()}_pictogram_fc_rgb.png`;

  let sportDates = [];
  let sportColors = {
    Athletics: '#FF7900',
    beachvolleyball: '#F18A61',
    'Canoe Sprint': '#B9CE00',
    Cycling: '#D52B1E',
    Gymnastics: '#CA005D',
    Rowing: '#00B2A9',
    'Sport Climbing': '#E71D73',
    'Table Tennis': '#1D71B8',
    Triathlon: '#FECB00',
  };
  for (let i = 0; i < filteredData.length; i++) {
    const date = new Date(filteredData[i].start).toLocaleString('UTC', {
      timeZone: 'CET',
      day: '2-digit',
    });

    if (sportDates.indexOf(date) === -1) {
      sportDates.push(date);
    }
  }
  let colorp = `${sportColors[sport]}`;
  const dropdownlist = [];
  for (let i = 0; i < filteredValues.length; i++) {
    const gender = filteredValues[i].gender;
    if (dropdownlist.indexOf(gender) === -1) {
      dropdownlist.push(gender);
    }
  }
  const dropdown2 = ['Yes', 'No', 'All'];
  const [gender, setGender] = useState('No Filter Selected');
  const [medal, setMedal] = useState('No Filter Selected');

  const genderFilter = () => {
    if (gender === 'No Filter Selected' && medal == 'No Filter Selected') {
      const filterbyUser = setFilteredData(filteredValues);
    }
    if (gender === 'No Filter Selected') {
      const filterbyUser = filteredValues.filter((ch) => ch.medal == medal);
      if (filterbyUser.length === 0) {
        console.log(`${gender} is not Available`);
      } else {
        setFilteredData(filterbyUser);
      }
    }
    if (medal === 'No Filter Selected') {
      const filterbyUser = filteredValues.filter((ch) => ch.gender == gender);
      if (filterbyUser.length === 0) {
        console.log(`${gender} is not Available`);
      } else {
        setFilteredData(filterbyUser);
      }
    }
    if (gender) {
      const filterbyUser = filteredValues.filter((ch) => ch.gender == gender);
      if (filterbyUser.length === 0) {
        console.log(`${gender} is not Available`);
      } else {
        setFilteredData(filterbyUser);
      }
    }

    if (gender && medal == 'All') {
      const filterbyUser = filteredValues.filter((ch) => ch.gender == gender);
      if (filterbyUser.length === 0) {
        console.log(`${gender} is not Available`);
      } else {
        setFilteredData(filterbyUser);
      }
    } else {
      const filterbyUser = filteredValues.filter(
        (ch) => ch.gender == gender && ch.medal == medal
      );
      if (filterbyUser.length === 0) {
        console.log(`${gender} is not Available`);
      } else {
        setFilteredData(filterbyUser);
      }
    }
  };
  useEffect(() => {
    genderFilter();
  }, [gender, medal]);

  return (
    <div className='widget2'>
      <div className='header'>
        <img id='pitco' src={baseUrlPicto} alt='' />
        <div className='sportdetails'>
          <h1 className='sportName' style={{ color: `${colorp}` }}>
            {filteredData[0]['discipline'].toUpperCase()}
          </h1>
          <p>
            DATES : <span>AUGUST {sportDates.join(',')}</span>
          </p>
          <p>
            VENUE : <span>{filteredData[0]['venue'].toUpperCase()}</span>
          </p>
        </div>
      </div>
      <div className='filters'>
        <hr />
        <div className='filter-selector'>
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
          </div>
          <p
            onClick={() => {
              setGender('No Filter Selected');
              setMedal('No Filter Selected');
            }}
            style={{ cursor: 'pointer' }}
          >
            Clear all
          </p>
        </div>
      </div>

      <div className='month'>
        <h2>AUGUST</h2>
      </div>
      <table className='content-table'>
        <thead>
          <th className='sport'>EVENT NAME</th>
          <th>
            <Link
              to='/date/11'
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              <h2>11</h2>
              <p>Thu</p>
            </Link>
          </th>
          <th>
            <Link
              to='/date/12'
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              <h2>12</h2>
              <p>Fri</p>
            </Link>
          </th>
          <th>
            <Link
              to='/date/13'
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              <h2>13</h2>
              <p>Sat</p>
            </Link>
          </th>
          <th>
            <Link
              to='/date/14'
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              <h2>14</h2>
              <p>Sun</p>
            </Link>
          </th>
          <th>
            <Link
              to='/date/15'
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              <h2>15</h2>
              <p>Mon</p>
            </Link>
          </th>
          <th>
            <Link
              to='/date/16'
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              <h2>16</h2>
              <p>Tue</p>
            </Link>
          </th>
          <th>
            <Link
              to='/date/17'
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              <h2>17</h2>
              <p>Wed</p>
            </Link>
          </th>
          <th>
            <Link
              to='/date/18'
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              <h2>18</h2>
              <p>Thu</p>
            </Link>
          </th>
          <th>
            <Link
              to='/date/19'
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              <h2>19</h2>
              <p>Fri</p>
            </Link>
          </th>

          <th>
            <Link
              to='/date/20'
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              <h2>20</h2>
              <p>Sat</p>
            </Link>
          </th>
          <th>
            <Link
              to='/date/21'
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              <h2>21</h2>
              <p>Sun</p>
            </Link>
          </th>
        </thead>
        <tbody>
          {filteredData.map((ch) => {
            const items = [];
            const date = new Date(ch.start).toLocaleString('UTC', {
              timeZone: 'CET',
              day: '2-digit',
            });
            console.log(date);
            for (let i = 0; i < 11; i++) {
              if (date - 11 == i && ch.medal == 'Yes') {
                items.push(
                  <th>
                    <img src={baseUrlMedal} alt='' />
                  </th>
                );
              } else if (date - 11 == i) {
                items.push(
                  <th>
                    <img src={baseUrlDot} alt='' />
                  </th>
                );
              } else {
                items.push(<th></th>);
              }
            }

            return (
              <tr>
                <th className='eventName'>{ch.event}</th>
                {items}
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className='content-table-mobile'>
        <thead>
          <th className='sport'>EVENT NAME</th>
          <th>DATE</th>
          <th>MEDAL</th>
        </thead>
        <tbody>
          {filteredData.map((ch) => {
            let medal;
            if (ch.medal == 'Yes') {
              medal = baseUrlMedal;
            } else {
              medal = baseUrlDot;
            }

            const month = new Date(ch.start)
              .toLocaleString('UTC', {
                timeZone: 'CET',
                month: 'short',
                day: '2-digit',
                weekday: 'short',
              })
              .toString();
            console.log(month.replace(',', ''));
            const date = new Date(ch.start).toLocaleString('UTC', {
              day: '2-digit',
            });
            return (
              <tr>
                <th className='event-name'>{ch.event}</th>
                <th className='date'>
                  <Link
                    to={`/date/${date}`}
                    style={{ textDecoration: 'none', color: '#1c0e52' }}
                  >
                    {month.replace(',', '')}
                  </Link>
                </th>
                <th className='medals'>
                  <img src={medal} alt='' />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Widget2;
