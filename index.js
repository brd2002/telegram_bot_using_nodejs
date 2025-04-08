const { Telegraf } = require("telegraf");
const { message } = require('telegraf/filters')
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("Welcome to bharat's bot"));
bot.command("hello", (ctx) => ctx.reply("Hello World!"));
bot.on(('sticker'), (ctx) => ctx.reply('👍'))
bot.command("bharat", (ctx) => ctx.reply("i love you anu"));

bot.launch();
