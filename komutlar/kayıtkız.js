const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {

const kız = message.guild.roles.find(r => r.id === "ERKEK ROL İD")

if (!message.member.hasPermission("MANAGES_ROLES")) return message.reply(`Bu komutu kullanabilmek için yeterli yetkin yok!!`);
 let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send(new Discord.RichEmbed().setColor('BLUE').setDescription("Bir kullanıcı girin."))
      
          const kayıt = message.guild.member(member)
    let isim = args[1]
let yas = args[2]
let kişi = message.mentions.members.first();
 if(!kişi) return 

      if (!isim) return message.channel.send(new Discord.RichEmbed().setColor('BLUE').setDescription("bir isim girin."))
      if (!yas) return message.channel.send(new Discord.RichEmbed().setColor('BLUE').setDescription("bir yaş girin."))
     kayıt.addRole(kız)
      kayıt.setNickname(`${isim} ${yas}`)
      return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLUE').setDescription(`${kişi} Başarıyla  kaydettim.`)
      )
}
      
      exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['kız-kayıt','kız','kaydet'],
      permLevel: 2,
      }
      
      exports.help = {
      name: 'kız',
      description: 'Erkek Kaydı yapar.',
      usage: 'kız'
      }