import React, { useState } from 'react';
import eventValues from '../assets/widget1.json';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';

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
          <tr>
            <th className='sport'>
              <Link
                to='/sport/Athletics'
                style={{ textDecoration: 'none', color: '#1c0e52' }}
              >
                Athletics
              </Link>
            </th>
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
            <th className='sport'>
              <Link
                to='/sport/Athletics'
                style={{ textDecoration: 'none', color: '#1c0e52' }}
              >
                Athletics Marathon
              </Link>
            </th>
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
            <th className='sport'>
              <Link
                to='/sport/Athletics'
                style={{ textDecoration: 'none', color: '#1c0e52' }}
              >
                Athletics Race Walk
              </Link>
            </th>
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
            <th className='sport'>
              <Link
                to='/sport/Volleyball'
                style={{ textDecoration: 'none', color: '#1c0e52' }}
              >
                Beach Volleyball
              </Link>
            </th>
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
            <th className='sport'>
              {' '}
              <Link
                to='/sport/Canoe'
                style={{ textDecoration: 'none', color: '#1c0e52' }}
              >
                Canoe Sprint
              </Link>
            </th>
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
            <th className='sport'>
              {' '}
              <Link
                to='/sport/Cycling'
                style={{ textDecoration: 'none', color: '#1c0e52' }}
              >
                Cycling Track
              </Link>
            </th>
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
            <th className='sport'>
              <Link
                to='/sport/Cycling'
                style={{ textDecoration: 'none', color: '#1c0e52' }}
              >
                Cycling Road
              </Link>
            </th>
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
            <th className='sport'>
              <Link
                to='/sport/Cycling'
                style={{ textDecoration: 'none', color: '#1c0e52' }}
              >
                Cycling Mountain Bike
              </Link>
            </th>
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
            <th className='sport'>
              <Link
                to='/sport/Cycling'
                style={{ textDecoration: 'none', color: '#1c0e52' }}
              >
                Cycling BMX
              </Link>
            </th>
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
            <th className='sport'>
              <Link
                to='/sport/Gymnastics'
                style={{ textDecoration: 'none', color: '#1c0e52' }}
              >
                Artistic Gymnastics
              </Link>
            </th>
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
            <th className='sport'>
              <Link
                to='/sport/Rowing'
                style={{ textDecoration: 'none', color: '#1c0e52' }}
              >
                Rowing
              </Link>
            </th>
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
            <th className='sport'>
              <Link
                to='/sport/Sport Climbing'
                style={{ textDecoration: 'none', color: '#1c0e52' }}
              >
                Sport Climbing
              </Link>
            </th>
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
            <th className='sport'>
              <Link
                to='/sport/Table Tennis'
                style={{ textDecoration: 'none', color: '#1c0e52' }}
              >
                Table Tennis
              </Link>
            </th>
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
            <th className='sport'>
              <Link
                to='/sport/Triathlon'
                style={{ textDecoration: 'none', color: '#1c0e52' }}
              >
                Triathlon
              </Link>
            </th>
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
                    to={`/sport/${vs.sport}`}
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
