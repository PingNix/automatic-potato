const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const ayarlar = require('../ayarlar.json');
  let ıd = ayarlar.yetkili
  if(!message.member.roles.has(ıd)) return message.reply(`Malesef Yetkin Yetersiz Dostum!`)
  
let kişi = message.mentions.members.first();
let kızrol = '662954133501771789'
if(!kişi) return message.reply("Bir Kişi Eitketle!")
  kişi.addRole(kızrol)
  message.reply(`${kişi} Kullanıcısını Kız Olarak Kaydettim!`)
 
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıtkız'],
    permLevel: 0
}

exports.help = {
    name: 'kız'
}