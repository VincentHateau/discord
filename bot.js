const Discord = require('discord.js')
const bot = new Discord.Client()
var auth = require('./auth.js');

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong !')
    }
    if (message.content === 'Botvince es-tu là ?') {
      message.reply('Oui...')
    }
  })

bot.login(auth.token)