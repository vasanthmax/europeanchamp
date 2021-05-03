import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sportApi } from '../actions/sportApi';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';

const Widget1 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sportApi);
  }, []);
  const dataFile = useSelector((state) => state.sportReducer.sport);
  const [date, setdate] = useState(11);
  const [selectedFilters, setSelectedFilters] = useState();
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

  if (dataFile.length != 0) {
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
  }

  if (dataFile.length != 0) {
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
  }

  const filtered = [];

  if (dataFile != 0) {
    for (let i = 0; i < 12; i++) {
      const sport = sportDis[i].sport;
      const discipline = sportDis[i].discipline;
      const venue = sportDis[i].venue;

      const index = sportDis.findIndex(
        (ch) => ch.sport === sport && ch.discipline === discipline
      );

      const filter = sportDis[index].info.filter(
        (ch) => ch.date === date.toString()
      );
      filtered.push({
        sport: sport,
        discipline: discipline,
        venue: venue,
        info: [...filter],
      });
    }
  }

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
            if (sport == 'Cycling Track') {
              sport = 'Cycling';
            }
            if (sport == 'Cycling Road') {
              sport = 'Cycling';
            }
            if (sport == 'Cycling Mountain Bike') {
              sport = 'Cycling';
            }
            if (sport == 'Cycling BMX Freestyle') {
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
                  <a
                    href={`https://www.europeanchampionships.com/${
                      ch.sport === 'Canoe'
                        ? 'canoe-sprint'
                        : ch.sport === 'Volleyball'
                        ? 'beach-volleyball'
                        : ch.sport.toLowerCase().replace(' ', '-')
                    }`}
                    style={{ textDecoration: 'none', color: '#1c0e52' }}
                    target='_top'
                  >
                    {ch.discipline}
                  </a>
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
          {filtered.map((vs) => {
            let sport = vs.discipline;

            if (sport == 'Canoe Sprint') {
              sport = 'canoesprint';
            }
            if (sport == 'Beach Volleyball') {
              sport = 'beachvolleyball';
            }
            if (sport == 'Cycling Track') {
              sport = 'Cycling';
            }
            if (sport == 'Cycling Road') {
              sport = 'Cycling';
            }
            if (sport == 'Cycling Mountain Bike') {
              sport = 'Cycling';
            }
            if (sport == 'Cycling BMX Freestyle') {
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

            return (
              <tr>
                <th className='event'>
                  <a
                    href={`https://www.europeanchampionships.com/${
                      vs.sport === 'Canoe'
                        ? 'canoe-sprint'
                        : vs.sport === 'Volleyball'
                        ? 'beach-volleyball'
                        : vs.sport.toLowerCase().replace(' ', '-')
                    }`}
                    style={{ textDecoration: 'none', color: '#1c0e52' }}
                    target='_top'
                  >
                    {vs.discipline}
                  </a>
                </th>
                <th className='venue'>{vs.venue}</th>
                {vs.info[0].medal === 'Yes' ? (
                  <th className='marker'>
                    <img src={baseUrlMedal} alt='' />
                  </th>
                ) : vs.info[0].medal === 'No' ? (
                  <th className='marker'>
                    <img src={baseUrlDot} alt='' />
                  </th>
                ) : (
                  <th className='marker'></th>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Widget1;
