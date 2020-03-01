const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if(!message.member.roles.has("673706812800892932")) return message.channel.send(`Bu komutu kullanabilmek için \`🔦❜ Registrar.†\` yetkisine sahip olmasınız.`);
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Kullanıcıyı etiketlemeyi unuttun kanka.')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.addRole('673707723078107137')
  member.removeRole('673707957858467881')
    let embed = new Discord.RichEmbed()
  .setColor('RED')
  .setDescription(` ${kullanıcı} **üyesine** <@&673707723078107137> **rolü verildi!**`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}

exports.help = {
  name: 'erkek',
  description: "Hadi erkek olalımm",
  usage: 'erkek'
}