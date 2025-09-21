import { v4 as uuidv4 } from "uuid";

let players = [
    {
        id: uuidv4(),
        firstName: "LeBron",
        lastName: "James",
        position: "Small Forward",
        team: "Los Angeles Lakers",
        number: 23,
        height: "6 ft 9 in",
        weight: "250 lbs",
    },
    {
        id: uuidv4(),
        firstName: "Stephen",
        lastName: "Curry",
        position: "Point Guard",
        team: "Golden State Warriors",
        number: 30,
        height: "6 ft 3 in",
        weight: "185 lbs",
    },
    {
        id: uuidv4(),
        firstName: "Kevin",
        lastName: "Durant",
        position: "Power Forward",
        team: "Brooklyn Nets",
        number: 7,
        height: "6 ft 10 in",
        weight: "240 lbs",
    },
    {
        id: uuidv4(),
        firstName: "Kyrie",
        lastName: "Irving",
        position: "Shooting Guard",
        team: "Brooklyn Nets",
        number: 11,
        height: "6 ft 3 in",
        weight: "190 lbs",
    },
    {
        id: uuidv4(),
        firstName: "Giannis",
        lastName: "Antetokounmpo",
        position: "Power Forward",
        team: "Milwaukee Bucks",
        number: 34,
        height: "6 ft 11 in",
        weight: "242 lbs",
    },
    {
        id: uuidv4(),
        firstName: "James",
        lastName: "Harden",
        position: "Shooting Guard",
        team: "Philadelphia 76ers",
        number: 1,
        height: "6 ft 5 in",
        weight: "220 lbs",
    },
    {
        id: uuidv4(),
        firstName: "Luka",
        lastName: "Doncic",
        position: "Point Guard",
        team: "Dallas Mavericks",
        number: 77,
        height: "6 ft 7 in",
        weight: "230 lbs",
    },
    {
        id: uuidv4(),
        firstName: "Anthony",
        lastName: "Davis",
        position: "Power Forward",
        team: "Los Angeles Lakers",
        number: 3,
        height: "6 ft 10 in",
        weight: "253 lbs",
    },
    {
        id: uuidv4(),
        firstName: "Damian",
        lastName: "Lillard",
        position: "Point Guard",
        team: "Portland Trail Blazers",
        number: 0,
        height: "6 ft 2 in",
        weight: "195 lbs",
    },
    {
        id: uuidv4(),
        firstName: "Joel",
        lastName: "Embiid",
        position: "Center",
        team: "Philadelphia 76ers",
        number: 21,
        height: "7 ft 0 in",
        weight: "280 lbs",
    },
    {
        id: uuidv4(),
        firstName: "Chris",
        lastName: "Paul",
        position: "Point Guard",
        team: "Phoenix Suns",
        number: 3,
        height: "6 ft 1 in",
        weight: "175 lbs",
    },
    {
        id: uuidv4(),
        firstName: "Zion",
        lastName: "Williamson",
        position: "Power Forward",
        team: "New Orleans Pelicans",
        number: 1,
        height: "6 ft 6 in",
        weight: "284 lbs",
    },
];




export const getAllPlayers = (req, res) => {
  res.json(players);
};

export const getPlayerById = (req, res) => {
  const player = players.find(p => p.id === req.params.id);
  if (!player) return res.status(404).json({ error: "Player not found" });
  res.json(player);
};

export const createPlayer = (req, res) => {
  const { firstName, lastName, team } = req.body;
  if (!firstName || !lastName || !team) {
    return res.status(400).json({ error: "firstName, lastName and team are required" });
  }
  const newPlayer = { id: uuidv4(), ...req.body };
  players.push(newPlayer);
  res.status(201).json(newPlayer);
};

export const updatePlayer = (req, res) => {
  const playerIndex = players.findIndex(p => p.id === req.params.id);
  if (playerIndex === -1) return res.status(404).json({ error: "Player not found" });

  players[playerIndex] = { ...players[playerIndex], ...req.body };
  res.json(players[playerIndex]);
};

export const deletePlayer = (req, res) => {
  const playerIndex = players.findIndex(p => p.id === req.params.id);
  if (playerIndex === -1) return res.status(404).json({ error: "Player not found" });

  const deletedPlayer = players.splice(playerIndex, 1);
  res.status(200).json(deletedPlayer[0]);
};