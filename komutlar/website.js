const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`MC-AT Bot by: TheMost#5681`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField("<a:fast_parrot:599310200163401748> Linkler", `Website [TIKLA](https://MC-AT.glitch.me)`)              
  .setFooter(`${message.author.username} tarafından istendi. | © MC-AT Bot.  `, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['wwebsite'],
    permLevel: 0
  };

  exports.help = {
    name: 'website',
    description: 'yardım',
    usage: 'website'
  };
