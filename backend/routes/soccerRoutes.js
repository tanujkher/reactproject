import { addPlayer, deletePlayer, getPlayers, getPlayersByID, updatePlayer } from '../controllers/playerControllers'

const routes = (app) => {
    app.route('/players')
        // POST endpoint
        .post(addPlayer)
        // GET endpoint
        .get(getPlayers)
    app.route('/players/:PlayerId')
        // GET by ID endpoint
        .get(getPlayersByID)
        // PUT by ID endpoint
        .put(updatePlayer)
        // DELETE BY ID endpoint
        .delete(deletePlayer)
}

export default routes