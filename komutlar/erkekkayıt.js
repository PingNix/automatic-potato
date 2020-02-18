const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args, member, client, level) => {
  const dogrulandi = bot.emojis.find(emoji => emoji.name === "emojiismi");
  if (!message.member.hasPermission("ADMINISTRATOR"))
  if (!message.member.hasPermission("MANAGE_ROLES"))
  if (!message.member.roles.find('name', ' | 🤖')) return message.channel.send('Yetkin yetmiyor.');
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**LAN ETİKET ATMAYI UNUTMAYIN KAÇKERE DEYECEM !**");
  user.addRole('679356908339200012')
  user.removeRole('679357020280848415')
const ky = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`${user}, ** KAYDIN OLUŞTURULMUŞTUR! İYİ EĞLENCELER.SIRADAKİ GELSİN.**`)
        .setColor('BLACK')
        .setTimestamp()
        message.channel.send(ky)
        message.react(dogrulandi)
  
} 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["erkek,e"],
    permLevel: 0
}
exports.help = {
    name: 'erkek',
    description: 'erkek',
    usage: 'erkek'
}