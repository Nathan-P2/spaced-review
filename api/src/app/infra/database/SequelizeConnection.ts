import { Options, Sequelize } from "sequelize";
import DataBaseConnection from "./DataBaseConnectionInterface";


class SequelizeConnection implements DataBaseConnection {
  private sequelize: Sequelize;

  constructor(options: Options) {
    this.sequelize = new Sequelize(options);
  }

  async connect(): Promise<void> {
    await this.sequelize.authenticate()
  }

  async disconnect(): Promise<void> {
    await this.sequelize.close() 
  }

  async executeQuery(query: string, params?: any): Promise<any> {
    return await this.sequelize.query(query, params);
  }
}

export default SequelizeConnection;