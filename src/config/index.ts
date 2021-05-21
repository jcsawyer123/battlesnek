import * as dotenv from 'dotenv';

// Set environment to development by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const path = require('path')
console.log(path.resolve(__dirname, '../../.env'))
const result = dotenv.config({ path: path.resolve(__dirname, '../../.env') })
if (result.error) {
  throw new Error("⚠️  Couldn't find .env file");
}


console.log(process.env.PORT)


export default {
  /**
   * Port
   */
  port: parseInt(process.env.PORT, 10),


  /** 
   * Database Uri
  */
  databaseURI: process.env.MONGOD_URI,

  /**
   * API 
   */
  api: {
    prefix: '/api'
  },

  /**
   * Winston Logging Config
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  }
};