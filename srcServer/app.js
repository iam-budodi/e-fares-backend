import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import db from '../models';
import routes from '../routes/bus.routes';


const app = express();
const port = process.env.PORT || 8080;
var corsOption = {
  origin: 'http://localhost:8081',
}


app.use(cors(corsOption));
app.use(json());
app.use(urlencoded({extended: true}));

db.sequelize.sync(); // for production

// for dev mode
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and re-sync db');
// });

app.get('/', (reg, res) => {
  res.json({deliver: 'Hello Angular, Am coming for You!'});
});

routes(app);
// require("../routes/bus.routes")(app);

app.listen(port, () => {
  console.log(`App is listening on port require ${port}`);
});
