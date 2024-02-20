import * as config from "./config/config";

import { Routes } from "./routes";
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";

export async function initBot(): Promise<void> {
  const envVariables = config.default();
  const bot = new Telegraf(envVariables.bot_token);
  const routes:Routes = new Routes(bot);
  bot.on(message("text"), async (ctx) => {
    // Explicit usage
    await ctx.telegram.sendMessage(
      ctx.message.chat.id,
      `Hello!`
    );

    // Using context shortcut
    await ctx.reply(`This is a shortcut!`);
  });
  try{
    bot.launch();
    console.log("avviato correttamente")
  }catch(e){
    console.error(e)
  }

  // Enable graceful stop
  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
  
  
}
