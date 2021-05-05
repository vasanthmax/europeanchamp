import axios from 'axios';

export const sportApi = async (dispatch) => {
  const sport = await axios.get(
    'https://services.europeanchampionships.com/schedulechampion/ec2022_all_events_en.json'
  );
  console.log(sport);
  dispatch({
    type: 'FETCH_HOLIDAYS',
    payload: sport.data,
  });
};
