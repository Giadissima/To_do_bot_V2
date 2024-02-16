import { BotType } from "./types";
import { Markup } from "telegraf";

export function setupRoutes(bot: BotType){
  bot.command('start', async (ctx) => {
    // Testo del messaggio
    const messageText = '*Menù principale*\nSeleziona un\'azione';

    // Opzioni per i pulsanti
    const keyboard = Markup.inlineKeyboard([
      Markup.button.callback('✏', 'action1'),
      Markup.button.callback('Azione 2', 'action2'),
      Markup.button.callback('Azione 3', 'action3'),
    ]);

    // Invia il messaggio con i pulsanti
    await ctx.replyWithMarkdownV2(messageText, keyboard);
  });

  // Gestisci le azioni dei pulsanti
  bot.action('action1', async (ctx) => {
    await ctx.answerCbQuery('Hai premuto Azione 1');
    // Puoi inserire qui la logica associata all'Azione 1
  });

  bot.action('action2', async (ctx) => {
    await ctx.answerCbQuery('Hai premuto Azione 2');
    // Puoi inserire qui la logica associata all'Azione 2
  });

  bot.action('action3', async (ctx) => {
    await ctx.answerCbQuery('Hai premuto Azione 3');
    // Puoi inserire qui la logica associata all'Azione 3
  });
  bot.command('done', (ctx) => {
    ctx.reply('Hai eseguito il comando /done!');
  });
  bot.command('undone', (ctx) => {
    ctx.reply('Hai eseguito il comando /undone!');
  });
  bot.command('uncheck', (ctx) => {
    ctx.reply('Hai eseguito il comando /uncheck!');
  });
  bot.command('check', (ctx) => {
    ctx.reply('Hai eseguito il comando /check!');
  });
}

function listRoutes(bot:BotType){

}

function menuRoutes(bot:BotType){
  
}