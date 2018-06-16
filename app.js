const Discord = require('discord.js');
const client = new Discord.Client();
const token =require('./settings.json').token;

client.on('ready', () => {
  console.log('I\'m online\nI\'m Online');
})
//var prefix = "~"

client.on('message', message => {

		console.log('มีคนพิม')

	if (message.author === client.user) return;
  if (message.content.startsWith('ดูหนัง')){
    message.channel.sendMessage('https://www.youtube.com/watch?v=SDUgGXmyTrg');
  }
});

client.login(token);