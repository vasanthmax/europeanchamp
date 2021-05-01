import axios from 'axios';

export const sportApi = async (dispatch) => {
  const sport = await axios.get(
    'https://services.digotel.com/schedulechampion/sc_jsonp_server_callback.php'
  );

  dispatch({
    type: 'FETCH_HOLIDAYS',
    payload: JSON.parse(sport.data.replace('(', '').replace(')', '')),
  });
};
