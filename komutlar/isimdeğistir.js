const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {}
  const ayarlar = require('../ayarlar.json');
  let ıd = ayarla.yetkili
  if(!message.member.roles.has(ıd)) return message.reply(`Malesef Yetkin Yetersiz Dostum!`)
  
  
let kullanıcı =  message.mentions.users.first();  
let isimlosenly = args.slice(1).join(' ');
if(!kullanıcı) return message.reply ("Bir Kullanıcı Etiketlemeyi Unuttun!")
if(!isimlosenly) return message.reply("Bir İsim Yazmayı Unuttun!")
if(isimlosenly.length > 32) return message.reply("Kullanıcı İsimleri 32 Karekteri Geçemez!")  
message.guild.members.get(kullanıcı.id).setNickname(`${isim}`)
  
  message.reply(`Başarıyla ${kullanıcı.tag} Kişiinin İsmini ${isim} Yaptım!`)
   // CodEming //  Losenly}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isimdeğiş','isim-değiştir'],
    permLevel: 0
}

exports.help = {
    name: 'nick'
}