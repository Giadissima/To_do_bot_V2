import { Context, Telegraf } from "telegraf";

import { Update } from "telegraf/typings/core/types/typegram";

export type BotType = Telegraf<Context<Update>>;