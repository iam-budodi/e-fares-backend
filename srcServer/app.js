import express from 'express';
import { json, urlencoded } from 'body-parser';
import { debug as Debug } from 'debug';
import chalk from 'chalk';
import morgan from 'morgan';
import cors from 'cors';
import db from '../models';
import routes from '../routes/bus.routes';
// require("../routes/bus.routes")(app);

const app = express();
const port = process.env.PORT || 8080;
const debug = Debug('app');
// routes(app);

const corsOption = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOption));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('tiny'));

db.sequelize.sync(); // for production
routes(app);

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
