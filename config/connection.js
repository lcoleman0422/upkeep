const development = {
  database: 'upKeep',
  username: 'upkeep_api',
  password: 'upKeep12',
  host: 'localhost',
  dialect: 'mysql',
};

const testing = {
  database: 'upKeep',
  username: 'upkeep_api',
  password: 'upKeep12',
  host: 'localhost',
  dialect: 'mysql',
};


const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'sqlite' || 'mysql' || 'postgres',
};

module.exports = {
  development,
  testing,
  production,
};
