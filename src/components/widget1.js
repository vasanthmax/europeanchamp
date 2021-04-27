import React, { useState } from 'react';
import eventValues from '../assets/table.json';
import tableValues from '../assets/widget1.json';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';

const Widget1 = () => {
  const data = [...tableValues];
  const dataFile = [...eventValues];
  const [date, setdate] = useState(11);
  const [selectedFilters, setSelectedFilters] = useState();

  const filteredValues = data.filter((ch) => ch.date == date);
  const [filteredData, setFilteredData] = useState([...filteredValues]);
  const dropdown2 = [
    'Thu 11 Aug',
    'Fri 12 Aug',
    'Sat 13 Aug',
    'Sun 14 Aug',
    'Mon 15 Aug',
    'Tue 16 Aug',
    'Wed 17 Aug',
    'Thu 18 Aug',
    'Fri 19 Aug',
    'Sat 20 Aug',
    'Sun 21 Aug',
  ];
  const sportDis = [];
  for (let i = 0; i < dataFile.length; i++) {
    const sport = dataFile[i].sport;
    const discipline = dataFile[i].discipline;
    const venue = dataFile[i].venue;

    if (
      sportDis.findIndex(
        (ch) => ch.sport === sport && ch.discipline === discipline
      ) === -1
    ) {
      sportDis.push({
        sport: sport,
        discipline: discipline,
        venue: venue,
        info: [
          {
            date: '11',
            medal: 'na',
          },
          {
            date: '12',
            medal: 'na',
          },
          {
            date: '13',
            medal: 'na',
          },
          {
            date: '14',
            medal: 'na',
          },
          {
            date: '15',
            medal: 'na',
          },
          {
            date: '16',
            medal: 'na',
          },
          {
            date: '17',
            medal: 'na',
          },
          {
            date: '18',
            medal: 'na',
          },
          {
            date: '19',
            medal: 'na',
          },
          {
            date: '20',
            medal: 'na',
          },
          {
            date: '21',
            medal: 'na',
          },
        ],
      });
    }
  }

  for (let i = 0; i < dataFile.length; i++) {
    const sport = dataFile[i].sport;
    const discipline = dataFile[i].discipline;
    const medal = dataFile[i].medal;
    const date = new Date(dataFile[i].start).toLocaleString('GMT', {
      timeZone: 'CET',
      day: 'numeric',
    });
    const index = sportDis.findIndex(
      (ch) => ch.sport === sport && ch.discipline === discipline
    );

    if (
      sportDis[index]['info']
        .map((ch) => {
          return ch.date;
        })
        .indexOf(date) === -1
    ) {
    }

    sportDis[index].info.forEach((ele) => {
      if (ele.date === date && medal == 'Yes') {
        ele.medal = 'Yes';
      } else if (ele.date === date && ele.medal == 'na') {
        ele.medal = 'No';
      }
    });
  }

  console.log(sportDis);

  return (
    <div className='widget1'>
      <div className='month'>
        <h2>AUGUST</h2>
      </div>
      <div className='table-filter'>
        <hr />
        <div className='filter-selector'>
          <Dropdown
            options={dropdown2}
            onChange={(e) => {
              const selectedFilters = e.value;
              setSelectedFilters(selectedFilters);
              const date = new Date(e.value).getDate();
              setdate(parseInt(date));
            }}
            value='Select a Date'
          />
          <p>
            Selected Filters : <span>{selectedFilters}</span>
          </p>
        </div>
      </div>
      <table className='content-table'>
        <thead>
          <th className='sport'>SPORT / DISCIPLINE</th>
          <th className='venue'>VENUE</th>
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
          {sportDis.map((ch) => {
            const items = [];
            let sport = ch.discipline;

            if (sport == 'Canoe Sprint') {
              sport = 'canoesprint';
            }
            if (sport == 'Beach Volleyball') {
              sport = 'beachvolleyball';
            }
            if (sport == 'Track') {
              sport = 'Cycling';
            }
            if (sport == 'Road') {
              sport = 'Cycling';
            }
            if (sport == 'Mountain Bike') {
              sport = 'Cycling';
            }
            if (sport == 'BMX Freestyle') {
              sport = 'Cycling';
            }
            if (sport == 'Artistic Gymnastics') {
              sport = 'Gymnastics';
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
            for (let i = 0; i < 11; i++) {
              if (
                parseInt(ch.info[i].date) - 11 == i &&
                ch.info[i].medal == 'Yes'
              ) {
                items.push(
                  <th>
                    <img src={baseUrlMedal} alt='' />
                  </th>
                );
              } else if (
                parseInt(ch.info[i].date) - 11 == i &&
                ch.info[i].medal == 'No'
              ) {
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
                <th className='sport'>
                  <Link
                    to={`/sport/${ch.discipline}`}
                    style={{ textDecoration: 'none', color: '#1c0e52' }}
                  >
                    {ch.discipline}
                  </Link>
                </th>

                <th className='venue'>{ch.venue}</th>
                {items}
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className='content-table-mobile'>
        <thead>
          <th>SPORT / DISCIPLINE</th>
          <th>VENUE</th>
          <th className='date'>
            <Link
              to={`/date/${date}`}
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              {date} AUG
            </Link>
          </th>
        </thead>
        <tbody>
          {filteredValues.map((vs) => {
            let SportName = vs.sport;
            let MedalEvent;
            if (vs.sport === 'Canoe') {
              SportName = 'canoesprint';
            }
            if (vs.sport === 'Volleyball') {
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

            if (vs.medal == 'Yes') {
              MedalEvent = baseUrlMedal;
            } else if (vs.medal == 'No') {
              MedalEvent = baseUrlDot;
            } else {
              MedalEvent = ' ';
            }

            return (
              <tr>
                <th className='event'>
                  <Link
                    to={`/sport/${vs.discipline}`}
                    style={{ textDecoration: 'none', color: '#1c0e52' }}
                  >
                    {vs.discipline}
                  </Link>
                </th>
                <th className='venue'>{vs.venue}</th>
                <th className='marker'>
                  <img src={MedalEvent} alt='' />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Widget1;
