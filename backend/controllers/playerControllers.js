import mongoose from 'mongoose'
import { playerSchema } from '../models/playerModel'

const Player = mongoose.model('Player', playerSchema)

export const addPlayer = (req, res) => {
    const newPlayer = new Player(req.body)
    
    newPlayer.save((err, Player) => {
        if(err){
            res.send(err)
        }
        res.json(Player)
    })
}

export const getPlayers = (req, res) => {
    Player.find({}, (err, Players) => {
        if(err){
            res.send(err)
        }
        res.json(Players)
    })
}

export const getPlayersByID = (req, res) => {
    // console.log(req.params)
    Player.findById(req.params.PlayerId, (err, Player) => {
        if(err){
            res.send(err)
        }
        res.json(Player)
    })
}

export const updatePlayer = (req, res) => {
    Player.findOneAndUpdate({ _id : req.params.PlayerId }, req.body, {new : true}, (err, Player) => {
        if(err){
            res.send(err)
        }
        res.json(Player)
    })
}

export const deletePlayer = (req, res) => {
    Player.findOneAndDelete({ _id : req.params.PlayerId }, (err, Player) => {
        if(err){
            res.send(err)
        }
        res.json({'message' : 'Deleted Player Successfully'})
    })
}