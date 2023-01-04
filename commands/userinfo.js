const { MessageEmbed } = require("discord.js")
const timestamp = require('discord-timestamp');
const fetch = require(`node-fetch`);

module.exports = {
  name: "userinfo",
  async execute(client, message, args) {

    const user = message.mentions.users.first() || message.author;
    const member = await fetch(`https://discord.com/api/v9/users/${user.id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bot ${client.token}`
      }

    }).then(arvis => arvis.json());
    const rozet = user.flags.toArray().join(", ")
    .replace('DISCORD_EMPLOYEE', '<:staff_arvis0011:1060133154196824094>')
    .replace('PARTNERED_SERVER_OWNER', '<:partner_arvis0011:1060133152867225620>')
    .replace('HYPESQUAD_EVENTS', '<:hypesquad_arvis0011:1060133151504089088>')
    .replace('HOUSE_BRAVERY', '<:bravery_arvis0011:1060133148698103809>')
    .replace('HOUSE_BRILLIANCE', '<:brilliance_arvis0011:1060133147234279464>')
    .replace('HOUSE_BALANCE', '<:balance_arvis0011:1060133144776429648>')
    .replace('BUGHUNTER_LEVEL_1', '<:bughunter_arvis0011:1060133143291629568>')
    .replace('BUGHUNTER_LEVEL_2', '<:gbughunter_arvis0011:1060133141785874482>')
    .replace('EARLY_SUPPORTER', '<:early_arvis0011:1060133139340595240>')
    .replace('EARLY_VERIFIED_DEVELOPER', '<:verifieddeveloper_arvis0011:1060133137558020106>')
    .replace('VERIFIED_DEVELOPER', '<:earlydeveloper_arvis0011:1060133135263731813>')
    .replace('VERIFIED_BOT', '<:verifiedbot_arvis0011:1060133038450814996>');

    if ((member).banner) {
      const arvis1 = new MessageEmbed()
      .setColor("#2F3136")
      .setAuthor(`${user.tag} (${user.id})`,message.author.displayAvatarURL({dynamic: true}))
      .setThumbnail(user.displayAvatarURL({dynamic: true}))
      .addField(message.locale.user_info.get('1').name(), message.locale.user_info.get('1').value(user, timestamp, rozet, `<:nitrobadge_arvis0011:1060134367701237842> <:boostbadge_arvis0011:1060134365335670854>`))
      .setFooter("Made by ❤️ ArviS#0011");
      message.channel.send({ embeds: [ arvis1 ] });

    } else if (!(member).banner && (member).banner_color) {

      const arvis2 = new MessageEmbed()
      .setColor("#2F3136")
      .setAuthor(`${user.tag} (${user.id})`,message.author.displayAvatarURL({dynamic: true}))
      .setThumbnail(user.displayAvatarURL({dynamic: true}))
      .addField(message.locale.user_info.get('1').name(), message.locale.user_info.get('1').value(user, timestamp, rozet, `<:nitrobadge_arvis0011:1060134367701237842>`))
      .setFooter("Made by ❤️ ArviS#0011");
      message.channel.send({ embeds: [ arvis2 ] });

    } else if (!(member).banner && !(member).banner_color) {

      const arvis3 = new MessageEmbed()
      .setColor("#2F3136")
      .setAuthor(`${user.tag} (${user.id})`,message.author.displayAvatarURL({dynamic: true}))
      .setThumbnail(user.displayAvatarURL({dynamic: true}))
      .addField(message.locale.user_info.get('1').name(), message.locale.user_info.get('1').value(user, timestamp, rozet))
      .setFooter("Made by ❤️ ArviS#0011");

      message.channel.send({ embeds: [ arvis3 ] });
    }
  }
}
//                  ArviS#0011









//                                          ArviS#0011