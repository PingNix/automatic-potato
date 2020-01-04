const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let yardım = new Discord.RichEmbed()
  .setTitle('CodEming Bot Yardım Menüsü')
  .setAuthor(message.member.user.username, message.author.avatarURL)
  .setDescription('Aşağıda CodEming botunun komutları verilmiştir.Bir sorun olursa sunucumuza gelip bizimle iletişime geçebilirsin!')
  .addBlankField()
  .addField('c!ban', 'kullanıcıyı sunucudan yasaklar')
  .addField('c!uyar', 'kullanıcıyı uyarır')
  .addField('c!at', 'kullanıcıyı sunucudan atar')
  .addField('c!reboot', 'botu yeniden başlatır.')
  .setFooter('CodEming Yardım Menüsü Örneği')
  .setTimestamp()
  .setThumbnail('https://goodgamers.biz/wp-content/uploads/2018/12/discord.jpg')
  .setURL('https://discord.gg/3vMKch')
  .setColor('RANDOM')
  message.channel.send(yardım)
  };
//CodEming /Yasin..
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'yardıms',
  description: 'taslak', 
  usage: 'yardıms'
};