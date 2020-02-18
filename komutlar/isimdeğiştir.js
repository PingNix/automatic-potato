const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  let isim = args.slice(1).join(' ');
  let kullanici = message.mentions.users.first();
  if(!kullanici) return message.reply(`:warning: Lütfen bir kullanıcı giriniz! \nDoğru Kullanım; \`${prefix}nick @${client.user.username}#${client.user.discriminator} <yeni isim>\``)
  if(!isim) return message.reply(`:warning: Lütfen bir kullanıcı adı giriniz! \nDoğru Kullanım; \`${prefix}nick @${client.user.username}#${client.user.discriminator} <yeni isim>\``)
  if(isim.length > 32) return message.reply(`:warning: Lütfen \`32\` karakteri Geçmeyecek Şekilde Bir İsim Giriniz!`)
  message.guild.members.get(kullanici.id).setNickname(`${isim}`)
  message.channel.send(`\`${kullanici.username}\` adlı kişinin kullanıcı adı \`🥏❜${isim}\` olarak başarıyla değiştirildi. :white_check_mark:`)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['takmaad', 'isim', 'nick'],
    permLevel: 0
}

exports.help = {
    name: 'nick',
    description: 'Belirttiğiniz kullanıcının kullanıcı adını değiştirir.',
    usage: 'isimdeğiştir @kullanıcı <kullanıcı adı>'
}