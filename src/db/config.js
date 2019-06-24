import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  development: {
    database: process.env.LOCAL_DB_URL,
  },
  test: {
    database: process.env.TEST_DB_URL,
  },
  production: {
    use_env_variable: process.env.MONGO_DB_URI,
  },
};
