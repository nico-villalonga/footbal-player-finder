import axios from 'axios';
import players from '../players/data';

const api = {
    fetchPlayers: () => axios.get('https://football-players-b31f2.firebaseio.com/players.json?print=pretty'),
    fetchMockPlayers: () => players,
};

export default api;
