const TelegramBot = require('node-telegram-bot-api');

const token = '5899720537:AAHiE5RatDfpgUUQVWjpVyLqDhcqtFYdwwk';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Добро пожаловать в OpenSwap - самый быстрый сервис по обмену валют @openswap_bot. Нажмите кнопку меню, чтобы начать.");
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if (msg.text === "Меню") {
    bot.sendMessage(chatId, "Что вы хотите сделать?", {
      reply_markup: {
        inline_keyboard: [
          [
            {text: "Начать обмен", callback_data: "start_exchange"},
            {text: "Курсы валют", callback_data: "currency_rates"}
          ],
          [
            {text: "Как происходит обмен?", callback_data: "how_exchange_works"},
            {text: "Мой аккаунт", callback_data: "my_account"}
          ],
          [
            {text: "Как получить кэшбэк?", callback_data: "cashback"},
            {text: "Оператор", callback_data: "operator"}
          ],
          [
            {text: "Отзывы", callback_data: "reviews"}
          ]
        ]
      }
    });
  }
});

bot.on("callback_query", (query) => {
  const action = query.data;
  const chatId = query.message.chat.id;
  
  if (action === "start_exchange") {
    bot.sendMessage(chatId, "Вы выбрали начать обмен.");
  } else if (action === "currency_rates") {
    bot.sendMessage(chatId, "Вы выбрали просмотр курсов валют.");
  }

        
        chatId, "Вы выбрали просмотр курсов валют.");
    } else if (action === "how_exchange_works") {
      bot.sendMessage(chatId, "Обмен происходит путем сопоставления лучшего курса среди различных валютных пар и позволяет пользователю выполнить торговлю.");
    } else if (action === "my_account") {
      bot.sendMessage(chatId, "Вы выбрали просмотр своего аккаунта.");
    } else if (action === "cashback") {
      bot.sendMessage(chatId, "Чтобы получить кэшбэк, пожалуйста, обратитесь на наш сайт за дополнительной информацией.");
    } else if (action === "operator") {
      bot.sendMessage(chatId, "Вы выбрали связаться с оператором.");
    } else if (action === "reviews") {
      bot.sendMessage(chatId, "Вы выбрали просмотр отзывов.");
    }
  });
  