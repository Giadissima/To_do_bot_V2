import * as config from "./config/config";

import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";

export async function initBot(): Promise<void> {
  const envVariables = config.default();
  const bot = new Telegraf(envVariables.bot_token);
  bot.on(message("text"), async (ctx) => {
    // Explicit usage
    await ctx.telegram.sendMessage(
      ctx.message.chat.id,
      `Hello ${ctx.state.role}`
    );

    // Using context shortcut
    await ctx.reply(`Hello ${ctx.state.role}`);
  });
  bot.launch();

  // Enable graceful stop
  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
}
