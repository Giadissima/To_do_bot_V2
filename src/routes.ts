import { BotType, ButtonListType } from "./types";

import { InlineKeyboardMarkup } from "telegraf/typings/core/types/typegram";
import { Markup } from "telegraf";
import { createList } from "./list/create";

export class Routes{
  bot: BotType;

  constructor(bot: BotType){
    this.bot = bot
    this.setupListRoutes()
    this.setupMenuRoutes()
  }

  setupListRoutes(){
    this.bot.command('done', (ctx) => {
      ctx.reply('Hai eseguito il comando /done!');
    });
    this.bot.command('undone', (ctx) => {
      ctx.reply('Hai eseguito il comando /undone!');
    });
    this.bot.command('uncheck', (ctx) => {
      ctx.reply('Hai eseguito il comando /uncheck!');
    });
    this.bot.command('check', (ctx) => {
      ctx.reply('Hai eseguito il comando /check!');
    });
  }
  setupMenuRoutes(){
    this.bot.command('start', async (ctx) => {
      const messageText = '*Menù principale*\n\nScegli l\'azione che vuoi eseguire:';
  
      const buttonsList: ButtonListType= Markup.inlineKeyboard([[
        Markup.button.callback('Aggiungi ➕', 'add'),
        Markup.button.callback('Modifica ✏', 'modify'),],
        [
          Markup.button.callback('Impostazioni gruppi 👥', 'action4'),
          Markup.button.callback('Mostra shortcuts', 'action4'),
        ],
        [Markup.button.callback('Tutorial', 'action3'),
        Markup.button.callback('Dona 💲', 'action2'),
        ],]);
  
      await ctx.replyWithMarkdownV2(messageText, buttonsList);
    });
  
    this.bot.action('add', (ctx) => {
      // Chiamare createList e gestire la Promise con .then()
      createList(this.bot, ctx).then(() => {
        // Continuare con il codice dopo che createList è stata completata
        console.log('Operazione completata');
      });
    });
    this.bot.action('modify', async (ctx) => {
      await ctx.answerCbQuery('Hai premuto Azione 1');
      // Puoi inserire qui la logica associata all'Azione 1
    });
  
    this.bot.action('action2', async (ctx) => {
      await ctx.answerCbQuery('Hai premuto Azione 2');
      // Puoi inserire qui la logica associata all'Azione 2
    });
  
    this.bot.action('action3', async (ctx) => {
      await ctx.answerCbQuery('Hai premuto Azione 3');
      // Puoi inserire qui la logica associata all'Azione 3
    });
  }
}