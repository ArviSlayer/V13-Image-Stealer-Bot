module.exports = {
  help: {

    description_name: `Bot Information`,
    description_value: (prefix) => `Bot Prefix: **${prefix}** \nBot Language: :flag_gb: **English**`,
    cmds: {
      configuration: {
        name: "Configuration Commands",
        value: "`setlang`, `setprefix`"
      },
      information: {
        name: "Information Commands",
        value: "`avatar`, `banner`, `guildbanner`, `guildicon`, `userinfo`, `help`"
      },
      support: {
        name: "Support Us",
        value: "`add`"
      }
    }
  },


  avatar: (user, jpg = { boyut1, boyut2, boyut3 }, png = { boyut1, boyut2, boyut3 }, gif = { boyut1, boyut2, boyut3 }, webp = { boyut1, boyut2, boyut3 }) => `Profile Picture Of **${user.tag}** \n\n **GIF** [[512](${gif.boyut1})] | [[1024](${gif.boyut2})] | [[2048](${gif.boyut3})] \n **PNG** [[512](${png.boyut1})] | [[1024](${png.boyut2})] | [[2048](${png.boyut3})] \n **JPG** [[512](${jpg.boyut1})] | [[1024](${jpg.boyut2})] | [[2048](${jpg.boyut3})] \n **WEBP** [[512](${webp.boyut1})] | [[1024](${webp.boyut2})] | [[2048](${webp.boyut3})]`,


  add: (name, link) => `If You Want To Add And Use **${name}** On Your Server Invite Using [This Link](${link})`,
  random: `<a:yesilsagok_arvis0011:1057990123251302410> Random Avatar`,


   guildicon: (jpg = { boyut1, boyut2, boyut3 }, png = { boyut1, boyut2, boyut3 }, gif = { boyut1, boyut2, boyut3 }, webp = { boyut1, boyut2, boyut3 }) => `**GIF** [[512](${gif.boyut1})] | [[1024](${gif.boyut2})] | [[2048](${gif.boyut3})] \n **PNG** [[512](${png.boyut1})] | [[1024](${png.boyut2})] | [[2048](${png.boyut3})] \n **JPG** [[512](${jpg.boyut1})] | [[1024](${jpg.boyut2})] | [[2048](${jpg.boyut3})] \n **WEBP** [[512](${webp.boyut1})] | [[1024](${webp.boyut2})] | [[2048](${webp.boyut3})]`,
   guild: {
    banner: {
      get: (name) => `${name} Banner`,
      not: "**[ArviS#0011]** The server has no banner"
    }
  },


  lang_choose: () => "<:carpi_arvis0011:1046067681515814912> | You must choose a language \n\n:flag_gb: English (en) \n:flag_tr: Turkish (tr) \n:flag_fr: Français (fr) \n:flag_de: Deutsch (de)",
  error: {
    type: (number) => {
      if (number == "1") {
        return {
          perm: () => "MANAGE_GUILD",
          send: () => `<:carpi_arvis0011:1046067681515814912> You need **MANAGE_GUILD** permission to do this`
        }
      } else if (number == "2") {
        return {
          perm: () => "ADMINISTRATOR",
          send: () => `<:carpi_arvis0011:1046067681515814912> You need **ADMINISTRATOR** permission to do this`
        }
      }
    }
  },
  

  lang_changed: (lang) => {
    if (lang == "de") {
      return "<:tik_arvis0011:1046067679884234863> | Sprache wurde aktualisiert"
    } else if (lang == "en") {
      return "<:tik_arvis0011:1046067679884234863> | Language has beed updated"
    } else if (lang == "fr") {
      return "<:tik_arvis0011:1046067679884234863> | Langue mise à jour avec succès"
    } else if (lang == "tr") {
      return "<:tik_arvis0011:1046067679884234863> | Dil Başarıyla Güncellendi"
    }
  },

  
  prefix_choose: () => "<:carpi_arvis0011:1046067681515814912> | You must write a prefix",
  prefix_changed: () => "<:tik_arvis0011:1046067679884234863> | You have successfully changed your prefix",


  user_info: {
    get: (number) => {
      if (number == "1") {
        return {
          name: () => "Account Information",
          value: (user, timestamp, badges, nitro) => {
            if (nitro) {
              return `**❯ Avatar**: [View](${user.displayAvatarURL({ dynamic: true })}) \n**❯ ID:** ${user.id} \n**❯ Account Creation Date:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>)\n**❯ Badges:** ${badges} ${nitro}`
            } else {
              return `**❯ Avatar**: [View](${user.displayAvatarURL({ dynamic: true })}) \n**❯ ID:** ${user.id} \n**❯ Account Creation Date:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>) \n**❯ Badges:** ${badges}`
            }
          }
        }
      }
    }
  },


  user: {
    banner: {
      get: (target) => `Here's the profile banner of **${target.user.tag}**`,
      not: (target) => `Here's the profile banner of **${target.user.tag}**`
    }
  }
};
// ArviS#0011









//ArviS#0011