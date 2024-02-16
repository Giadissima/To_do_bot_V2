import dotenv from 'dotenv';
import { initBot } from './src/bot';

async function bootstrap(): Promise<void>{
  
  dotenv.config();
  
  const bot = await initBot();
}

bootstrap();
