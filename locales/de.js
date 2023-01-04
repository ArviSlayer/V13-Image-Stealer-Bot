module.exports = {
  help: {

    description_name: `Bot-Informationen`,
    description_value: (prefix) => `Bot-Präfix: **${prefix}** \nBot-Sprache: :flag_de: **Deustch**`,
    cmds: {
      configuration: {
        name: "Konfigurationsbefehle",
        value: "`setlang`, `setprefix`"
      },
      information: {
        name: "Informationsbefehle",
        value: "`avatar`, `banner`, `guildbanner`, `guildicon`, `userinfo`, `help`"
      },
      support: {
        name: "Unterstütze Uns",
        value: "`add`"
      }
    }
  },


  avatar: (user, jpg = { boyut1, boyut2, boyut3 }, png = { boyut1, boyut2, boyut3 }, gif = { boyut1, boyut2, boyut3 }, webp = { boyut1, boyut2, boyut3 }) => `Profilbild von **${user.tag}** \n\n **GIF** [[512](${gif.boyut1})] | [[1024](${gif.boyut2})] | [[2048](${gif.boyut3})] \n **PNG** [[512](${png.boyut1})] | [[1024](${png.boyut2})] | [[2048](${png.boyut3})] \n **JPG** [[512](${jpg.boyut1})] | [[1024](${jpg.boyut2})] | [[2048](${jpg.boyut3})] \n **WEBP** [[512](${webp.boyut1})] | [[1024](${webp.boyut2})] | [[2048](${webp.boyut3})]`,


  add: (name, link) => `Wenn Sie einen **${name}** auf Ihrem Server hinzufügen und verwenden möchten, laden Sie ihn über [diesen Link](${link}) ein`,
  random: `<a:yesilsagok_arvis0011:1057990123251302410> Zufälliger Avatar`,


   guildicon: (jpg = { boyut1, boyut2, boyut3 }, png = { boyut1, boyut2, boyut3 }, gif = { boyut1, boyut2, boyut3 }, webp = { boyut1, boyut2, boyut3 }) => `**GIF** [[512](${gif.boyut1})] | [[1024](${gif.boyut2})] | [[2048](${gif.boyut3})] \n **PNG** [[512](${png.boyut1})] | [[1024](${png.boyut2})] | [[2048](${png.boyut3})] \n **JPG** [[512](${jpg.boyut1})] | [[1024](${jpg.boyut2})] | [[2048](${jpg.boyut3})] \n **WEBP** [[512](${webp.boyut1})] | [[1024](${webp.boyut2})] | [[2048](${webp.boyut3})]`,
   guild: {
    banner: {
      get: (name) => `Das Banner von ${name}`,
      not: "**[ArviS#0011]** Der Server hat kein Banner"
    }
  },


  lang_choose: () => "<:carpi_arvis0011:1046067681515814912> | Sie müssen eine Sprache auswählen \n\n:flag_gb: English (en) \n:flag_tr: Turkish (tr) \n:flag_fr: Français (fr) \n:flag_de: Deutsch (de)",
  error: {
    type: (number) => {
      if (number == "1") {
        return {
          perm: () => "MANAGE_GUILD",
          send: () => `<:carpi_arvis0011:1046067681515814912> Dazu benötigen Sie die Berechtigung **MANAGE_GUILD**`
        }
      } else if (number == "2") {
        return {
          perm: () => "ADMINISTRATOR",
          send: () => `<:carpi_arvis0011:1046067681515814912> Dazu benötigen Sie die Berechtigung **ADMINISTRATOR**`
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


  prefix_choose: () => "<:carpi_arvis0011:1046067681515814912> | Sie müssen ein Präfix schreiben",
  prefix_changed: () => "<:tik_arvis0011:1046067679884234863> | Sie haben Ihr Präfix erfolgreich geändert",


  user_info: {
    get: (number) => {
      if (number == "1") {
        return {
          name: () => "Kontoinformation",
          value: (user, timestamp, badges, nitro) => {
            if (nitro) {
              return `**❯ Benutzerbild**: [Sehen](${user.displayAvatarURL({ dynamic: true })}) \n**❯ ID:** ${user.id} \n**❯ Kontoerstellungsdatum:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>)\n**❯ Abzeichen:** ${badges} ${nitro}`
            } else {
              return `**❯ Benutzerbild**: [Sehen](${user.displayAvatarURL({ dynamic: true })}) \n**❯ ID:** ${user.id} \n**❯ Kontoerstellungsdatum:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>) \n**❯ Abzeichen:** ${badges}`
            }
          }
        }
      }
    }
  },


  user: {
    banner: {
      get: (target) => `Hier ist das Profilbanner des Mitglieds **${target.user.tag}**`,
      not: (target) => `Hier ist das Profilbanner des Mitglieds **${target.user.tag}**`
    }
  }
};
//ArviS#0011









// ArviS#0011