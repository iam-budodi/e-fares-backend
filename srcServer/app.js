import express from 'express';
import { json, urlencoded } from 'body-parser';
import sql from 'mssql';
import { debug as Debug } from 'debug';
import chalk from 'chalk';
import morgan from 'morgan';
import cors from 'cors';
import db from '../models';
// @ts-ignore
import busRouter from '../routes/busRoutes';
// require("../routes/bus.routes")(app);

const app = express();
const port = process.env.PORT || 4000;
const debug = Debug('app');

// const config = {
//   user: 'sa',
//   password: 'B12js6dy$',
//   server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
//   database: 'BobShoes',
//   options: {
//     encrypt: true,
//     enableArithAbort: true,
//   },
// };

// // @ts-ignore
// sql.connect(config).catch((err) => debug(err));

db.sequelize.sync(); // for production

const corsOption = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOption));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use('/api/buses', busRouter);

// routes(app);

// for dev mode
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and re-sync db');
// });

app.get('/', (req, res) => {
  res.json({ message: 'If you see this, Angular is already connected!' });
});

app.listen(port, () => {
  // @ts-ignore
  debug(`App is listening on port ${chalk.green(port)}`);
});
