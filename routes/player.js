import express from "express";
import {
  createPlayer,
  deletePlayer,
  getAllPlayers,
  getPlayerById,
  updatePlayer,
} from "../controllers/playerController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Player:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - team
 *         - position
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the player
 *         firstName:
 *           type: string
 *           description: The player's first name
 *         lastName:
 *           type: string
 *           description: The player's last name
 *         position:
 *           type: string
 *           description: The player's position
 *         team:
 *           type: string
 *           description: The player's team
 *         number:
 *           type: integer
 *           description: The player's jersey number
 *         height:
 *           type: string
 *           description: The player's height
 *         weight:
 *           type: string
 *           description: The player's weight
 *       example:
 *         id: dkadlakdlda-2342-2342-2342-234asdasd
 *         firstName: LeBron
 *         lastName: James
 *         position: Small Forward
 *         team: Los Angeles Lakers
 *         number: 23
 *         height: "6 ft 9 in"
 *         weight: "250 lbs"
 */

/**
 * @swagger
 * tags:
 *   name: Players
 *   description: NBA player management API
 */

/**
 * @swagger
 * /api/players:
 *   get:
 *     summary: Returns the list of all players
 *     tags: [Players]
 *     responses:
 *       200:
 *         description: The list of players
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Player'
 */
router.get("/players", getAllPlayers);

/**
 * @swagger
 * /api/players/{id}:
 *   get:
 *     summary: Get a player by id
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The player id
 *     responses:
 *       200:
 *         description: The player description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Player'
 *       404:
 *         description: Player not found
 */
router.get("/players/:id", getPlayerById);

/**
 * @swagger
 * /api/players:
 *   post:
 *     summary: Create a new player
 *     tags: [Players]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Player'
 *     responses:
 *       201:
 *         description: The player was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Player'
 *       400:
 *         description: Missing required fields
 */
router.post("/players", createPlayer);

/**
 * @swagger
 * /api/players/{id}:
 *   put:
 *     summary: Update a player by id
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The player id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Player'
 *     responses:
 *       200:
 *         description: The player was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Player'
 *       404:
 *         description: Player not found
 */
router.put("/players/:id", updatePlayer);

/**
 * @swagger
 * /api/players/{id}:
 *   delete:
 *     summary: Remove a player by id
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The player id
 *     responses:
 *       200:
 *         description: The player was deleted
 *       404:
 *         description: Player not found
 */
router.delete("/players/:id", deletePlayer);

export default router;
