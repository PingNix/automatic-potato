const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  if(!message.member.roles.has("673706812800892932")) return message.channel.send(`Bu komutu kullanabilmek için \`🔦❜ Registrar.†\` yetkisine sahip olmasınız.`);
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!member) return message.channel.send('Bir üye etiketlemelisin kanka')
  if (!isim) return message.channel.send('Bir isim yazmalısın kanka')
  member.setNickname(`🥏❜ ${isim}`)
  const embed = new Discord.RichEmbed()
  .addField(`• Kullanıcının takma adı değiştirildi.`, `Değiştirilen kullanıcı : ${member.user} \n Düzenlenmiş kullanıcı adı : \`🥏' ${isim}\``)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`)  
  .setThumbnail(client.user.avatarURL)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['isim'],
  permLevel: 0
}
exports.help = {
  name: 'isim',
  description: "İsim değiştirmeye ne dersin yakışıklı",
  usage: 'isim <yeni nick>'
}