const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`NOW Listening on Port ${PORT} ✅`));
});
