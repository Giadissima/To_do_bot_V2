import { CallbackQuery, InlineKeyboardMarkup, Update } from "telegraf/typings/core/types/typegram";
import { Context, Markup, NarrowedContext, Telegraf } from "telegraf";

export type BotType = Telegraf<Context<Update>>;

export type ButtonListType = Markup.Markup<InlineKeyboardMarkup>

export type ContextType = NarrowedContext<Context<Update> & {
  match: RegExpExecArray;
}, Update.CallbackQueryUpdate<CallbackQuery>>