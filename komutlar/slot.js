const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const slots = ['🍇', '🍊', '🍐', '🍒', '🍋'];

exports.run = function(client, message) {
message.delete(3000)
if(message.channel.id !== "647615928397463594") return message.channel.send("Komutlarımız Sadece Komutlar Chatinde Çalışır.")
.then(m=>m.delete(6000))

	var slot1 = slots[Math.floor(Math.random() * slots.length)];
	var slot2 = slots[Math.floor(Math.random() * slots.length)];
	var slot3 = slots[Math.floor(Math.random() * slots.length)];
	
	if (slot1 === slot2 && slot1 === slot3) {
		message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		Tebrikler, kazandınız!
		`); 
	} else {
		message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		Eyvah, kaybettin!
		`);	
	}

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['slot','slotçevir','slotoyna'],
  permLevel: 0
};

exports.help = {
  name: 'slots', 
  description: 'Slots oyunu oynatır',
  usage: 'slots'
};