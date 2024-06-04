import { Options } from "sequelize";
import DataBaseConnection from "./DataBaseConnectionInterface";
import SequelizeConnection from "./SequelizeConnection";

export function provideDatabaseConnection(): DataBaseConnection {
  const options: Options = {
    port: 3306,
    host: 'localhost',
    username: 'root',
    password: '123',
    database: 'teste',
    dialect: 'mysql'
  } 
  const connection = new SequelizeConnection(options)
  connection.connect()
  return connection
}