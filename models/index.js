const sequelize = require('sequelize');
const db = new Sequelize('postgress://localhost:5432/wikistack2',
                         {logging : false});
