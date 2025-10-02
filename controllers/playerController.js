import { v4 as uuidv4 } from "uuid";
import Player from "../models/Player.js";





export const getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find().sort({ createdAt: -1 });
        res.json({
            success: true,
            count: players.length,
            data: players
        });
    } catch (error) {
        console.error('Get all players error:', error);
        res.status(500).json({
            success: false,
            error: 'Server error while fetching players'
        });
    }

}

export const getPlayerById = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        if (!player) {
            return res.status(404).json({
                success: false,
                error: `Player not found with id: ${req.params.id}`
            });
        }
        res.json({
            success: true,
            data: player
        });
    } catch (error) {
        console.error('Get player by ID error:', error);

        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                error: 'Invalid player ID format'
            });
        }
        res.status(500).json({
            success: false,
            error: 'Server error while fetching player'
        });
    }
}

export const createPlayer = async (req, res) => {
    try {
        // const { firstName, lastName, position, team, number } = req.body;

        // if (!firstName || !lastName || !position || !team || !number) {
        //     return res.status(400).json({
        //         success: false,
        //         error: 'Missing required fields: firstName, lastName, position, team, number'
        //     });
        // }
        const player = new Player(req.body);
        await player.save();
        res.status(201).json({
            success: true,
            message: 'Player created successfully',
            data: player
        });
    } catch (error) {
        console.error('Create player error:', error);
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: errors.join(', ')
            });
        }
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
}

export const updatePlayer = async (req, res) => {
    try {
        const player = await Player.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { 
                new: true, 
                runValidators: true 
            }
        );
        if (!player) {
            return res.status(404).json({
                success: false,
                error: `Player not found with id: ${req.params.id}`
            });
        }
        
        res.json({
            success: true,
            data: player
        });
    } catch (error) {
        console.error('Update player error:', error);
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: errors.join(', ')
            });
        }
        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                error: 'Invalid player ID format'
            });
        }
        res.status(400).json({
            success: false,
            error: error.message 
        });
    }
}

export const deletePlayer = async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id);
        if (!player) {
            return res.status(404).json({
                success: false,
                error: `Player not found with id: ${req.params.id}`
            });
        }
        res.json({
            success: true,
            message: 'Player deleted successfully',
            data: player
        });
    } catch (error) {
        console.error('Delete player error:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                error: 'Invalid player ID format'
            });
        }
        res.status(500).json({
            success: false,
            error: 'Server error while deleting player'
        });
    }
}