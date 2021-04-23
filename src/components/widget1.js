import React, { useState } from 'react';
import eventValues from '../assets/widget1.json';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Widget1 = () => {
  const data = [...eventValues];
  const [date, setdate] = useState(11);
  const [selectedFilters, setSelectedFilters] = useState();

  const filteredValues = data.filter((ch) => ch.date == date);
  const [filteredData, setFilteredData] = useState([...filteredValues]);
  console.log(filteredData);
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
            <h2>11</h2>
            <p>Thu</p>
          </th>
          <th>
            <h2>12</h2>
            <p>Fri</p>
          </th>
          <th>
            <h2>13</h2>
            <p>Sat</p>
          </th>
          <th>
            <h2>14</h2>
            <p>Sun</p>
          </th>
          <th>
            <h2>15</h2>
            <p>Mon</p>
          </th>
          <th>
            <h2>16</h2>
            <p>Tue</p>
          </th>
          <th>
            <h2>17</h2>
            <p>Wed</p>
          </th>
          <th>
            <h2>18</h2>
            <p>Thu</p>
          </th>
          <th>
            <h2>19</h2>
            <p>Fri</p>
          </th>
          <th>
            <h2>20</h2>
            <p>Sat</p>
          </th>
          <th>
            <h2>21</h2>
            <p>Sun</p>
          </th>
        </thead>
        <tbody>
          <tr>
            <th className='sport'>Athletics</th>
            <th className='venue'>Olympiapark</th>
            <th className='11'></th>
            <th className='12'></th>
            <th className='13'></th>
            <th className='14'></th>
            <th className='15'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_athletics_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='16'>
              {' '}
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_athletics_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='17'>
              {' '}
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_athletics_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='18'>
              {' '}
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_athletics_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='19'>
              {' '}
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_athletics_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='20'>
              {' '}
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_athletics_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='21'>
              {' '}
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_athletics_medalicon_rgb.svg'
                alt=''
              />
            </th>
          </tr>
          <tr>
            <th className='sport'>Athletics Marathon</th>
            <th className='venue'>City of Munich</th>
            <th className='11'></th>
            <th className='12'></th>
            <th className='13'></th>
            <th className='14'></th>
            <th className='15'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_athletics_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='16'></th>
            <th className='17'></th>
            <th className='18'></th>
            <th className='19'></th>
            <th className='20'></th>
            <th className='21'></th>
          </tr>
          <tr>
            <th className='sport'>Athletics Race Walk</th>
            <th className='venue'>City of Munich</th>
            <th className='11'></th>
            <th className='12'></th>
            <th className='13'></th>
            <th className='14'></th>
            <th className='15'></th>
            <th className='16'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_athletics_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='17'></th>
            <th className='18'></th>
            <th className='19'></th>
            <th className='20'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_athletics_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='21'></th>
          </tr>
          <tr>
            <th className='sport'>Beach Volleyball</th>
            <th className='venue'>Konigsplatz</th>
            <th className='11'></th>
            <th className='12'></th>
            <th className='13'></th>
            <th className='14'></th>
            <th className='15'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_beachvolleyball_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='16'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_beachvolleyball_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='17'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_beachvolleyball_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='18'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_beachvolleyball_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='19'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_beachvolleyball_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='20'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_beachvolleyball_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='21'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_beachvolleyball_medalicon_rgb.svg'
                alt=''
              />
            </th>
          </tr>
          <tr>
            <th className='sport'>Canoe Sprint</th>
            <th className='venue'>Munich Olympic Regatta Centre</th>
            <th className='11'></th>
            <th className='12'></th>
            <th className='13'></th>
            <th className='14'></th>
            <th className='15'></th>
            <th className='16'></th>
            <th className='17'></th>
            <th className='18'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_canoesprint_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='19'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_canoesprint_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='20'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_canoesprint_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='21'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_canoesprint_medalicon_rgb.svg'
                alt=''
              />
            </th>
          </tr>
          <tr>
            <th className='sport'>Cycling Track</th>
            <th className='venue'>Messe Munchen</th>
            <th className='11'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_cycling_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='12'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_cycling_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='13'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_cycling_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='14'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_cycling_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='15'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_cycling_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='16'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_cycling_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='17'></th>
            <th className='18'></th>
            <th className='19'></th>
            <th className='20'></th>
            <th className='21'></th>
          </tr>
          <tr>
            <th className='sport'>Cycling Road</th>
            <th className='venue'>City of Munich</th>
            <th className='11'></th>
            <th className='12'></th>
            <th className='13'></th>
            <th className='14'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_cycling_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='15'></th>
            <th className='16'></th>
            <th className='17'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_cycling_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='18'></th>
            <th className='19'></th>
            <th className='20'></th>
            <th className='21'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_cycling_medalicon_rgb.svg'
                alt=''
              />
            </th>
          </tr>
          <tr>
            <th className='sport'>Cycling Mountain Bike</th>
            <th className='venue'>Olympiapark</th>
            <th className='11'></th>
            <th className='12'></th>
            <th className='13'></th>
            <th className='14'></th>
            <th className='15'></th>
            <th className='16'></th>
            <th className='17'></th>
            <th className='18'></th>
            <th className='19'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_cycling_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='20'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_cycling_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='21'></th>
          </tr>
          <tr>
            <th className='sport'>Cycling BMX</th>
            <th className='venue'>Olympiapark</th>
            <th className='11'>
              {' '}
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_cycling_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='12'>
              {' '}
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_cycling_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='13'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_cycling_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='14'></th>
            <th className='15'></th>
            <th className='16'></th>
            <th className='17'></th>
            <th className='18'></th>
            <th className='19'></th>
            <th className='20'></th>
            <th className='21'></th>
          </tr>
          <tr>
            <th className='sport'>Artistic Gymnastics</th>
            <th className='venue'>Olympiapark</th>
            <th className='11'>
              {' '}
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_gymnastics_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='12'></th>
            <th className='13'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_gymnastics_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='14'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_gymnastics_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='15'></th>
            <th className='16'></th>
            <th className='17'></th>
            <th className='18'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_gymnastics_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='19'></th>
            <th className='20'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_gymnastics_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='21'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_gymnastics_medalicon_rgb.svg'
                alt=''
              />
            </th>
          </tr>
          <tr>
            <th className='sport'>Rowing</th>
            <th className='venue'>Munich Olympic Regatta Centre</th>
            <th className='11'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_rowing_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='12'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_rowing_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='13'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_rowing_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='14'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_rowing_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='15'></th>
            <th className='16'></th>
            <th className='17'></th>
            <th className='18'></th>
            <th className='19'></th>
            <th className='20'></th>
            <th className='21'></th>
          </tr>
          <tr>
            <th className='sport'>Sport Climbing</th>
            <th className='venue'>Konigsplatz</th>
            <th className='11'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_sportclimbing_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='12'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_sportclimbing_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='13'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_sportclimbing_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='14'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_sportclimbing_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='15'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_sportclimbing_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='16'></th>
            <th className='17'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_sportclimbing_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='18'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_sportclimbing_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='19'></th>
            <th className='20'></th>
            <th className='21'></th>
          </tr>
          <tr>
            <th className='sport'>Table Tennis</th>
            <th className='venue'>Rudi-Sedlmayer-Halle</th>
            <th className='11'></th>
            <th className='12'></th>
            <th className='13'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_tabletennis_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='14'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_tabletennis_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='15'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_tabletennis_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='16'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_tabletennis_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='17'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_tabletennis_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='18'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_tabletennis_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='19'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Dots/SVG/ec_tabletennis_dot_rgb.svg'
                alt=''
              />
            </th>
            <th className='20'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_tabletennis_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='21'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_tabletennis_medalicon_rgb.svg'
                alt=''
              />
            </th>
          </tr>
          <tr>
            <th className='sport'>Triathlon</th>
            <th className='venue'>Olympiapark</th>
            <th className='11'></th>
            <th className='12'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_triathlon_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='13'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_triathlon_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='14'>
              <img
                src='https://ecm-ecmdotcom.s3.eu-west-1.amazonaws.com/SPW/Medals/SVG/ec_triathlon_medalicon_rgb.svg'
                alt=''
              />
            </th>
            <th className='15'></th>
            <th className='16'></th>
            <th className='17'></th>
            <th className='18'></th>
            <th className='19'></th>
            <th className='20'></th>
            <th className='21'></th>
          </tr>
        </tbody>
      </table>
      <table className='content-table-mobile'>
        <thead>
          <th>SPORT / DISCIPLINE</th>
          <th>VENUE</th>
          <th className='date'>{date} AUG</th>
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
                <th className='event'>{vs.discipline}</th>
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
