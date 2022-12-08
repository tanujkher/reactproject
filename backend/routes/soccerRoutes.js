import { addPlayer, getPlayers, getPlayersByID } from '../controllers/playerControllers'

const routes = (app) => {
    app.route('/players')
        // POST endpoint
        .post(addPlayer)
        // GET endpoint
        .get(getPlayers)
    app.route('/players/:PlayerId')
        // GET by ID endpoint
        .get(getPlayersByID)
}

export default routes