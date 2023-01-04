module.exports = {
  help: {

    description_name: `Informations sur les robots`,
    description_value: (prefix) => `Préfixe de bot: **${prefix}** \nLangage Bot: :flag_fr: **Français**`,
    cmds: {
      configuration: {
        name: "Commandes De Configuration",
        value: "`setlang`, `setprefix`"
      },
      information: {
        name: "Commandes d'Informations",
        value: "`avatar`, `banner`, `guildbanner`, `guildicon`, `userinfo`, `help`"
      },
      support: {
        name: "Soutenez Nous",
        value: "`add`"
           }
    }
  },


  avatar: (user, jpg = { boyut1, boyut2, boyut3 }, png = { boyut1, boyut2, boyut3 }, gif = { boyut1, boyut2, boyut3 }, webp = { boyut1, boyut2, boyut3 }) => `photo de profil de **${user.tag}** \n\n **GIF** [[512](${gif.boyut1})] | [[1024](${gif.boyut2})] | [[2048](${gif.boyut3})] \n **PNG** [[512](${png.boyut1})] | [[1024](${png.boyut2})] | [[2048](${png.boyut3})] \n **JPG** [[512](${jpg.boyut1})] | [[1024](${jpg.boyut2})] | [[2048](${jpg.boyut3})] \n **WEBP** [[512](${webp.boyut1})] | [[1024](${webp.boyut2})] | [[2048](${webp.boyut3})]`,


  add: (name, link) => `Si vous souhaitez ajouter et utiliser un **${name}** sur votre serveur, invitez en utilisant [ce lien](${link})`,
  random: `<a:yesilsagok_arvis0011:1057990123251302410> Avatar aléatoire`,


    guildicon: (jpg = { boyut1, boyut2, boyut3 }, png = { boyut1, boyut2, boyut3 }, gif = { boyut1, boyut2, boyut3 }, webp = { boyut1, boyut2, boyut3 }) => `**GIF** [[512](${gif.boyut1})] [[1024](${gif.boyut2})] | [[2048](${gif.boyut3})] \n **PNG** [[512](${png.boyut1})] | [[1024](${png.boyut2})] | [[2048](${png.boyut3})] \n **JPG** [[512](${jpg.boyut1})] | [[1024](${jpg.boyut2})] | [[2048](${jpg.boyut3})] \n **WEBP** [[512](${webp.boyut1})] | [[1024](${webp.boyut2})] | [[2048](${webp.boyut3})]`,
   guild: {
    banner: {
      get: (name) => `Bannière de ${name}`,
      not: "**[ArviS#0011]** Le serveur n'a pas de bannière"
    }
  },


  lang_choose: () => "<:carpi_arvis0011:1046067681515814912> | Vous devez choisir une langue \n\n:flag_gb: English (en) \n:flag_tr: Turkish (tr) \n:flag_fr: Français (fr) \n:flag_de: Deutsch (de)",
  error: {
    type: (number) => {
      if (number == "1") {
        return {
          perm: () => "MANAGE_GUILD",
          send: () => `<:carpi_arvis0011:1046067681515814912> Vous avez besoin du autorité **MANAGE_GUILD** pour le faire`
        }
      } else if (number == "2") {
        return {
          perm: () => "ADMINISTRATOR",
          send: () => `<:carpi_arvis0011:1046067681515814912> Vous avez besoin du autorité **ADMINISTRATOR** pour le faire`
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

  
  prefix_choose: () => "<:carpi_arvis0011:1046067681515814912> | Vous devez écrire un préfixe",
  prefix_changed: () => "<:tik_arvis0011:1046067679884234863> | Vous avez modifié votre préfixe avec succès",


  user_info: {
    get: (number) => {
      if (number == "1") {
        return {
          name: () => "Informations de compte",
          value: (user, timestamp, badges, nitro) => {
            if (nitro) {
              return `**❯ Avatar**: [Voir](${user.displayAvatarURL({ dynamic: true })}) \n**❯ ID:** ${user.id} \n**❯ Date de création du compte :** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>) \n**❯ Insignes:** ${badges} ${nitro}`
            } else {
              return `**❯ Avatar**: [Voir](${user.displayAvatarURL({ dynamic: true })}) \n**❯ ID:** ${user.id} \n**❯ Date de création du compte :** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>) \n**❯ Insignes:** ${badges}`
            }
          }
        }
      }
    }
  },


  user: {
    banner: {
      get: (target) => `Voici l'affiche du profil de **${target.user.tag}**`,
      not: (target) => `Voici l'affiche du profil de **${target.user.tag}**`
    }
  }
};
//ArviS#0011









// ArviS#0011