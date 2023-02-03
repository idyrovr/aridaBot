const TelegramAPI = require("node-telegram-bot-api")

 const axios = require("axios")
const token = "5768758550:AAGH88V1H1R3mZmg7MqJys5zAQx_1HL2JlA"

const firstArida = ["https://ibb.co/yqtGkYZ","https://ibb.co/jV3hZDb","https://ibb.co/3mZ261K","https://ibb.co/VHmFD0q","https://ibb.co/xLqWSDc", "https://ibb.co/3sNrxhK"]
const secondArida = ["https://ibb.co/gzzmk8v", "https://ibb.co/HtzWTMd","https://ibb.co/v49p5Xq","https://ibb.co/Xsntx6f","https://ibb.co/zFVgVNc","https://ibb.co/LCfWDqL"]
const aridaLogo = "https://ibb.co/Qkxvf1C"
const bot = new TelegramAPI(token, {polling: true})

const options = {
    reply_markup : JSON.stringify({
        inline_keyboard:[
            [{text: "Где мы находимся?", callback_data: 1}],
            [{text: "Фото с первого филиала?", callback_data: 9}, {text: "Фото со второго филиала?", callback_data: 10}],
            [{text: "Оплата в первом филиале?", callback_data: 2}, {text: "Оплата во втором филиале?", callback_data: 3}],
            [{text: "Сколько детей в группе?", callback_data:4}, {text: "Какие группы есть?", callback_data: 5}],
            [{text: "Какие кружки?", callback_data:6}, {text: "Онлайн наблюдение?", callback_data: 7}],
            [{text: "Со скольки лет принимаем?", callback_data: 8}]
        ]
    })
}


bot.on("message", async (msg) => {

    const id = msg.chat.id
    await bot.sendMessage(id, "Здравствуйте! Вас приветсвует Детский сад 'Арида'. Жмите на интересующий вас вопрос и вы сразу же получите ответ на него", options)
})

bot.on("callback_query", async(msg) =>
{

    switch (+msg.data) {
        case 1:

            await bot.sendMessage(msg.message.chat.id,  "<a href='https://2gis.kg/bishkek/firm/70000001056054152?m=74.605162%2C42.893904%2F15.57'><b>Первый филиал</b>\n<b>ул. Орозбекова 234</b></a>", { parse_mode: "HTML" }).then(() => {
                // reply sent!
            });


            await bot.sendMessage(msg.message.chat.id,  "<a href='https://2gis.kg/bishkek/search/%D0%B0%D1%80%D0%B8%D0%B4%D0%B0/firm/70000001041959164/74.574%2C42.839992?m=74.605162%2C42.893904%2F15.57'><b>Второй филиал</b>\n<b>ул. Бакаева 97/3</b></a>", { parse_mode: "HTML" }).then(() => {
                // reply sent!
            });
            await bot.sendMessage(msg.message.chat.id, ".", options)
            break


        case 2:
            await bot.sendMessage(msg.message.chat.id, "<b>Первый филиал</b>  - оплата <s>14000с</s> в месяц,\n" +
                "<b style='color: #ff0000 '>Акция!!!</b> Бонус код - \"телеграмм\" дает скидку 18%!!! Успей до конца февраля!\n" +
                "(11500som/14000som = 18%)\n" + "<i>Позвони на 0550777710 и скажи \"телеграмм\" или напиши нам в инстаграмм</i>",{parse_mode:"HTML"}).then(()=>{})
            await bot.sendMessage(msg.message.chat.id, ".", options)
            break

        case 3:

            await bot.sendMessage(msg.message.chat.id, "<b>Первый филиал</b>  - оплата <s>12000с</s> в месяц,\n" +
                "<b style='color: #ff0000 '>Акция!!!</b> Бонус код - \"телеграмм\" дает скидку 18%!!! Успей до конца февраля!\n" +
                "(9800som/12000som = 18%)\n" + "<i>Позвони на 0550777710 и скажи \"телеграмм\" или напиши нам в инстаграмм</i>",{parse_mode:"HTML"}).then(()=>{})
            await bot.sendMessage(msg.message.chat.id, ".", options)
            break


        case 4:
            await bot.sendMessage(msg.message.chat.id, "Детей  примерно по 10-15 в группе", options)
            break

        case 5:
            await bot.sendMessage(msg.message.chat.id, "Есть старшая (4 -7) , средняя (2 -4)  и младшая  группы (1.5 - 2)", options)
            break

        case 6:
            await bot.sendMessage(msg.message.chat.id, "Таэквандо, Шахматы, Танцы, летом плавание :) ", options)
            break

        case 7:
            await bot.sendMessage(msg.message.chat.id, "Да. Онлайн наблюдение с камер к которым вы можете подключаться через любое ваше устройство. Ведется запись до 30 дней. По всей территории установлены около 24 камер", options)
            break
        case 8:
            await bot.sendMessage(msg.message.chat.id, "Принимаем с 1,5 - до 7 лет",  options)

            break

        case 9:
            for (let i = 0; i < firstArida.length; i++) {
                await bot.sendPhoto(msg.message.chat.id, firstArida[i])
            }
            setTimeout(async () => {
                await bot.sendMessage(msg.message.chat.id,  "Спросите что-нибудь еще :)", options)
            }, 3000)

            break

        case 10:
            for (let i = 0; i < secondArida.length; i++) {
                await bot.sendPhoto(msg.message.chat.id, secondArida[i])
            }

            setTimeout(async ()=> {
                await bot.sendMessage(msg.message.chat.id,  "Спросите что-нибудь еще :)", options)
            }, 3000)

            break
    }
})