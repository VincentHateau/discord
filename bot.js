const Discord = require('discord.js')
const clientDiscord = new Discord.Client()
const config = require('./config.js');

var channel

clientDiscord.on('ready', function () {
  console.log("Bot connecté")
  channel = clientDiscord.channels.get(config.channelId)
  envoiMessage(":dragon_face: Bonjour à tous :dragon_face:")
})

clientDiscord.login(config.token)

function envoiMessage(message){
  channel.send(message)
}