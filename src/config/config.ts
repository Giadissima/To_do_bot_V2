import { MongooseOptions } from 'mongoose';

export interface IEnvironment {
  environment: 'production' | 'development';
  port: number;
  mongoose: MongooseOptions;
  bot_token: string;
}


export default (): IEnvironment => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT ?? '3000', 10),
  bot_token: process.env.BOT_TOKEN,
  mongoose: <MongooseOptions>{
    appname: process.env.MONGO_APP_NAME ?? 'Send-Wise',
    authSource: process.env.MONGO_AUTH_SOURCE ?? 'admin',
    autoIndex: Boolean(process.env.MONGO_AUTO_INDEX ?? true),
    maxPoolSize: parseInt(process.env.MONGO_POOL_SIZE ?? '50'),
    serverSelectionTimeoutMS: parseInt(
      process.env.MONGO_SERVER_TIMEOUT ?? '10000',
    ),
    ignoreUndefined: true,
    family: parseInt(process.env.MONGO_IP_FAMILY ?? '4'),
    uri: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`,
  }

} as IEnvironment);
