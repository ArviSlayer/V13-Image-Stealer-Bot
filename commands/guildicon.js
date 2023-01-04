const { MessageEmbed, Discord } = require("discord.js") 

module.exports = {
name: "guildicon",
async execute(client, message, args) {

const embed = new MessageEmbed()
.setColor("#2F3136")
.setAuthor(`${message.guild.name} `,message.guild.iconURL({dynamic: true }))
.setImage(message.guild.iconURL({dynamic: true, size: 2048}))
.setFooter("Made by ❤️ ArviS#0011")

.setDescription(message.locale.guildicon({
  boyut1: message.guild.iconURL({ format: 'jpg', size: 512 }),
  boyut2: message.guild.iconURL({ format: 'jpg', size: 1024 }),
  boyut3: message.guild.iconURL({ format: 'jpg', size: 2048 })
}, {
  boyut1: message.guild.iconURL({ format: 'png', size: 512 }),
  boyut2: message.guild.iconURL({ format: 'png', size: 1024 }),
  boyut3: message.guild.iconURL({ format: 'png', size: 2048 })
}, {
  boyut1: message.guild.iconURL({ format: 'gif', size: 512 }),
  boyut2: message.guild.iconURL({ format: 'gif', size: 1024 }),
  boyut3: message.guild.iconURL({ format: 'gif', size: 2048 })
}, {
  boyut1: message.guild.iconURL({ format: 'webp', size: 512 }),
  boyut2: message.guild.iconURL({ format: 'webp', size: 1024 }),
  boyut3: message.guild.iconURL({ format: 'webp', size: 2048 })
}));

return message.reply( { embeds: [embed] } )
}
}
// ArviS#0011









//  ArviS#0011