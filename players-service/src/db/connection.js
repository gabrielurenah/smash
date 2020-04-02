import { Sequelize } from 'sequelize';
import { DB_URI } from '../config/dotenv';

const sequelize = new Sequelize(DB_URI, {
  dialectOptions: {
    charset: 'utf8',
    multipleStatements: true,
  },
  logging: false,
});

export default sequelize;
