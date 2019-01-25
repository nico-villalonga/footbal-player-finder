import players from '../../config/mockData';

const fetchPlayers = () => new Promise(resolve => resolve(players));
const fetchMockPlayers = () => new Promise(resolve => resolve(players));

export default api = {
    fetchPlayers,
    fetchMockPlayers,
}