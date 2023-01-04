const { MessageEmbed, Discord } = require("discord.js") 

module.exports = {
name: "guildbanner",
async execute(client, message, args) {

     if (!message.guild.banner) {
        var arvis1 = new MessageEmbed()
         .setColor("#2F3136")
         .setAuthor(`${message.guild.name} `,message.guild.iconURL({dynamic: true }))
         .setFooter("Made by ❤️ ArviS#0011")
         .setImage("https://media.discordapp.net/attachments/997105193256747028/1051895712792711178/image.png")
         .setDescription(message.locale.guild.banner.not)
      return message.reply({ embeds: [arvis1] });

     } else {
        const arvis2 = new MessageEmbed()
         .setColor("#2F3136")
         .setImage(`${message.guild.bannerURL({size: 4096, dynamic: true})}`)
         .setFooter("Made by ❤️ ArviS#0011")
         .setTitle(message.locale.guild.banner.get(message.guild.name));
      return message.reply({ embeds: [arvis2] });
     }
  }
}
// ArviS#0011









//ArviS#0011