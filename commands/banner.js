const { MessageEmbed, Discord } = require("discord.js") 

module.exports = {
name: "banner",
async execute(client, message, args) {

    const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find((member) => member.user.username.toLowerCase().includes(args[0])) || message.member;
    const banner = await client.banners.getBanner(target.user.id, { dynamic: true, size: 2048, format: 'png' });

    if (banner.includes('https')) {
      const arvis = new MessageEmbed()
      .setDescription(message.locale.user.banner.get(target))
      .setImage(banner)
      .setAuthor(`${message.author.tag} (${message.author.id})`,message.author.displayAvatarURL({dynamic: true}))
      .setFooter("Made by ❤️ ArviS#0011")
      .setColor('#2F3136');
      return message.reply({ embeds: [arvis] });

    } else if (!banner.includes('https')) {
      const arvis = new MessageEmbed()
      .setDescription(message.locale.user.banner.not(target))
      .setFooter("Made by ❤️ ArviS#0011")
      .setAuthor(`${message.author.tag} (${message.author.id})`,message.author.displayAvatarURL({dynamic: true}))
      .setColor('#2F3136')
      .setImage("https://media.discordapp.net/attachments/997105193256747028/1060128024282017843/nobannerdesignbyarvis0011.png"); 
      
      return message.reply({ embeds: [arvis] });
    }
  }
}
//ArviS#0011









// ArviS#0011