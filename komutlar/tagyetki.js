const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`Bu komutu kullanabilmek için \`Sunucuyu Yönet\` iznine sahip olmalısın.`);
  
  const tag = args[0]
  let rol = message.mentions.roles.first()
  const memberss = message.guild.members.filter(member => member.user.username.includes(tag));
  
  if(!tag) return message.channel.send(`Bir tag girmelisin. \`${ayarlar.prefix}tag-yetki <tag> @Rol\``)
  if(!rol) return message.channel.send(`Bir rol girmelisin. \`${ayarlar.prefix}tag-yetki ${tag} @Rol\``)
  
  message.channel.send(`Kullanıcı adında ${tag} olan kişilere etiketlediğin rolü veriyorum.`, memberss.map(member => `${member} = ${member.user.username}`).join("\n") || `Kimsenin kullanıcı adında \`${tag}\` bulunmuyor.`)
  message.guild.members.forEach(u => {
    if(u.user.username.includes(tag)) {
      u.addRole(rol.id)
    }
  });
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'tag',
    description: 'Belirlenen taga sahip olan kullanıcılara belirtilen rolü verir.',
    usage: 'tag-yetki <tag> @Rol'
};
// arkadaşlar bunları linkte verecem siz buraya gelip sadece ayarlamaları yapın yete
// kız ve erkeği kayıt etmek için rol verme yetkisini açınnız
// tag ayarlamak için tagınızı koyup suncu id yazıp kanal id yazıp yerlerine yapıştirınız.