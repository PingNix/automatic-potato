const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("ArdaDemr Bot Yardım")
  .setDescription('')
  .setColor('RANDOM')
  .addField("**Küfür Koruması**", `Küfür Engelleme Açmak İçin {prefix}küfür-engelle aç "kapatmak için" {prefix}küfür-engelle kapat`)
  .addField("**Reklam Koruması**", `Link Engelleme Açmak İçin {prefix}link-engelle aç "kapatmak için" {prefix}link-engelle kapat`)
  .addField("**Everyone Koruması**", `Açmak için {prefix}everyone-engelle aç Kapatmak için {prefix}everyone-engelle kapat`)
  .addField("**Giriş Çıkış Ayarlaması**", `{prefix}giriş-çıkış-ayarla #kanal`)
  .setFooter('AlleyCat Discord Bot')
if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oyun', 'games', 'game', 'oyn'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};