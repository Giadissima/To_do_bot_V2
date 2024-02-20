import { Context, Markup, Telegraf } from "telegraf";
import { InlineKeyboardMarkup, Update } from "telegraf/typings/core/types/typegram";

export type BotType = Telegraf<Context<Update>>;

export type ButtonListType = Markup.Markup<InlineKeyboardMarkup>