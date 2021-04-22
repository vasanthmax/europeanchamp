import React from 'react';

const Widget1 = () => {
  const chart = [
    {
      type: 'Competition',
      sport: 'Triathlon',
      discipline: 'Triathlon',
      class: 'Senior',
      session: 'Late Afternoon',
      gender: 'Women',
      phase: 'Final',
      event: 'Women&#039;s Individual',
      start: '2022-08-12T15:15:00+0000',
      end: '2022-08-12T17:15:00+0000',
      venue: 'Olympiasee',
      day: '1',
      medal: 'Yes',
    },
    {
      type: 'Competition',
      sport: 'Triathlon',
      discipline: 'Triathlon',
      class: 'Senior',
      session: 'Late Afternoon',
      gender: 'Men',
      phase: 'Final',
      event: 'Men&#039;s Individual',
      start: '2022-08-13T14:00:00+0000',
      end: '2022-08-13T16:00:00+0000',
      venue: 'Olympiasee',
      day: '2',
      medal: 'Yes',
    },
    {
      type: 'Competition',
      sport: 'Triathlon',
      discipline: 'Triathlon',
      class: 'Senior',
      session: 'Late Afternoon',
      gender: 'Mixed',
      phase: 'Final',
      event: 'Mixed Relay',
      start: '2022-08-14T16:00:00+0000',
      end: '2022-08-14T17:30:00+0000',
      venue: 'Olympiasee',
      day: '3',
      medal: 'Yes',
    },
    {
      type: 'Competition',
      sport: 'Cricket',
      discipline: 'Cricket',
      class: 'Senior',
      session: 'Late Afternoon',
      gender: 'Mixed',
      phase: 'Final',
      event: 'Mixed Relay',
      start: '2022-08-15T16:00:00+0000',
      end: '2022-08-15T17:30:00+0000',
      venue: 'Chennai',
      day: '3',
      medal: 'Yes',
    },
    {
      type: 'Competition',
      sport: 'Cricket',
      discipline: 'Cricket',
      class: 'Senior',
      session: 'Late Afternoon',
      gender: 'Mixed',
      phase: 'Final',
      event: 'Mixed Relay',
      start: '2022-08-17T16:00:00+0000',
      end: '2022-08-15T17:30:00+0000',
      venue: 'Chennai',
      day: '3',
      medal: 'No',
    },
  ];

  let temp = {};
  chart.forEach((item) => {
    if (!(item.sport in temp)) {
      temp[item.sport] = [];
      temp[item.sport]['venue'] = item.venue;
      temp[item.sport].push({
        date: item.start,
        medal: item.medal,
      });
    } else {
      temp[item.sport].push({
        date: item.start,
        medal: item.medal,
      });
    }
  });
  let newData = [];
  let keys = Object.keys(temp);
  for (var i = 0; i < keys.length; i++) {
    let k = Object.keys(temp)[i];
    newData.push({
      sport: keys[i],
      dates: temp[keys[i]],
    });
    // console.log(temp[k]);
  }

  return (
    <div>
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
          {newData.map((ch) => {
            const items = [];
            let mi;
            let t = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
            let datesList = [];
            for (var i = 0; i < ch.dates.length; i++) {
              const date = new Date(ch.dates[i]['date']).getDate();
              datesList.push(date);
            }
            console.log(t.length);
            console.log(datesList);
            for (var i = 0; i < datesList.length; i++) {
              console.log(t[i], datesList[i]);
              const value = datesList[i];
              for (let j = 0; j < t.length; j++) {
                if (parseInt(value) == t[j]) {
                  // mi = document.getElementById(value.toString);
                  // let l = document.createElement('p');
                  // l.textContent = 'hello';
                  // console.log(l);
                  // mi.appendChild(l);

                  items.push(<th></th>);
                } else {
                  items.push(<th></th>);
                }
              }
            }

            return (
              <tr>
                <th className='eventName'>{ch.sport}</th>
                <th className='place'>{ch.venue}</th>
                {items}
                <th id='11'></th>
                <th id='12'></th>
                <th id='13'></th>
                <th id='14'></th>
                <th id='15'></th>
                <th id='16'></th>
                <th id='17'></th>
                <th id='18'></th>
                <th id='19'></th>
                <th id='20'></th>
                <th id='21'></th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Widget1;
