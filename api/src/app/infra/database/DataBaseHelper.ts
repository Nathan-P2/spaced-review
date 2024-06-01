import { Options } from "sequelize";
import DataBaseConnection from "./DataBaseConnectionInterface";
import SequelizeConnection from "./SequelizeConnection";

export function provideDatabaseConnection(): DataBaseConnection {
  const options: Options = {
    port: 3306,
    host: 'localhost',
    username: '',
    password: '',
    database: 'mysql'
  } 
  const connection = new SequelizeConnection(options)
  connection.connect()
  return connection
}