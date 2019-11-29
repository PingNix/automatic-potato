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
  .addField("**Küfür Koruması**", `Küfür Engelleme Açmak İçin {prefix}küfür-engelle aç "kapatmak için" {prefix}küfür-engelle kapat`)
  .addField("**Reklam Koruması**", `Link Engelleme Açmak İçin {prefix}link-engelle aç "kapatmak için" {prefix}link-engelle kapat`)
  .addField("**Everyone Koruması**", `Açmak için .everyone-engelle aç Kapatmak için .everyone-engelle kapat`)
  .addField("**Bilgilerimiz**", `Oyun Komutlarını Gösterir.`)
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