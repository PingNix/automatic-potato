const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
message.delete(3000)
if(message.channel.id !== "647615928397463594") return message.channel.send("Komutlarımız Sadece Komutlar Chatinde Çalışır.")
.then(m=>m.delete(6000))
  const embedyardim = new Discord.RichEmbed()
  .setTitle("<a:sarisik:648204836596350986> AlleyCat Yardım Menüsü <a:sarisik:648204836596350986> ")
  .setDescription('')
  .setColor('RANDOM')
  .addField("**Küfür Koruması**", ` <a:elmas:648204846951956480> **a.oyunlar** = Oyun Komutlarını Gösterir. <a:elmas:648204846951956480> `)
  .addField("**Reklam Koruması**", ` <a:elmas:648204846951956480> **a.eğlence** = Eğlence Komutlarını Gösterir. <a:elmas:648204846951956480> `)
  .addField("**Ana Komutlar**", ` <a:elmas:648204846951956480> **a.anakomutlar** = Botun Kullanabileceğiniz Ana Komutlarını Gösterir. <a:elmas:648204846951956480> `)
  .addField("**Bilgilerimiz**", ` <a:elmas:648204846951956480> **a.bilgi** = Kendimiz Ve AlleyCat Hakkında Bilgileri Gösterir. <a:elmas:648204846951956480> `)
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