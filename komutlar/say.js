const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let tag = "BÃÐ ₰" // tagınız
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField(":flying_disc:❜ Sunucudaki üye sayısı", message.guild.memberCount)
        .addField(":triangular_flag_on_post: Çevrimiçi üye sayısı", message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
        .addField(":telephone: Seslideki üye sayısı", count)
        .addField(":heartpulse: Tagdaki üye sayısı", message.guild.members.filter(m => m.user.username.includes(tag)).size) // tagınız yoksa bu satrı silin
        .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL)
    message.channel.send(embed);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayı'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
};