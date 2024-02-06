import { Injectable } from '@nestjs/common';
import { RowDataPacket } from 'mysql2';
import * as mysql from 'mysql2/promise';
import * as config from '../../config/constant.json';

@Injectable()
export class UsersService {
  async getUsers() {
    try {
      const pool = mysql.createPool({
        host: config.DB_HOST,
        user: config.DB_USER,
        password: config.DB_PASS,
        port: config.DB_PORT,
        database: config.DB_DATABASE,
      });

      const query =
        'SELECT Id, BatchNumber, TransactionDate, LotNumber FROM tbl_user_reports LIMIT 100000';
      const [rows] = await pool.query<RowDataPacket[]>(query); // Specify the type here
      const total = rows.length;

      return {
        message: 'Running from NestJS',
        total,
        data: rows,
      };
    } catch (error) {
      console.error('Error executing database query:', error);
      throw new Error('Failed to retrieve user data from the database');
    }
  }
}
