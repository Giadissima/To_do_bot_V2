import { BotType, ContextType } from "../types";

export async function createList(bot: BotType, ctx:any){
  await ctx.reply('Inserisci il titolo della lista:').then(() => {
    // Aspetta l'input del titolo tramite un callback
    bot.on('text', async (ctx) => {
        const title = ctx.message.text;

        // Puoi eseguire le operazioni desiderate qui, ad esempio, memorizzare il titolo in un database
        // In questo esempio, rispondiamo con il titolo
        await ctx.reply(`Titolo aggiunto: ${title}`);})
      }
    );
  };