import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import playerRoutes from './routes/player.js';

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api', playerRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the NBA CRUD API');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
