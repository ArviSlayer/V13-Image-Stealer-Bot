module.exports = {
  help: {

    description_name: `Bot Bilgileri`,
    description_value: (prefix) => `Prefix: **${prefix}** \nBot Dili: :flag_tr: **Türkçe**`,
    cmds: {
      configuration: {
        name: "Yapılandırma Komutları",
        value: "`setlang`, `setprefix`"
      },
      information: {
        name: "Bilgi Komutları",
        value: "`avatar`, `banner`, `guildbanner`, `guildicon`, `userinfo`, `help`"
      },
      support: {
        name: "Bizi Destekle",
        value: "`add`"
      }
    }
  },


  avatar: (user, jpg = { boyut1, boyut2, boyut3 }, png = { boyut1, boyut2, boyut3 }, gif = { boyut1, boyut2, boyut3 }, webp = { boyut1, boyut2, boyut3 }) => `**${user.tag}** Profil Fotoğrafı \n\n **GIF** [[512](${gif.boyut1})] | [[1024](${gif.boyut2})] | [[2048](${gif.boyut3})] \n **PNG** [[512](${png.boyut1})] | [[1024](${png.boyut2})] | [[2048](${png.boyut3})] \n **JPG** [[512](${jpg.boyut1})] | [[1024](${jpg.boyut2})] | [[2048](${jpg.boyut3})] \n **WEBP** [[512](${webp.boyut1})] | [[1024](${webp.boyut2})] | [[2048](${webp.boyut3})]`,


  add: (name, link) => `**${name}** Botunu Sunucuna Ekleyip Kullanmak İstiyorsan [Bu Linki](${link}) Kullanıp Davet Et`,
  random: `<a:yesilsagok_arvis0011:1057990123251302410> Rastgele Avatar`,


 guildicon: (jpg = { boyut1, boyut2, boyut3 }, png = { boyut1, boyut2, boyut3 }, gif = { boyut1, boyut2, boyut3 }, webp = { boyut1, boyut2, boyut3 }) => `**GIF** [[512](${gif.boyut1})] | [[1024](${gif.boyut2})] | [[2048](${gif.boyut3})] \n **PNG** [[512](${png.boyut1})] | [[1024](${png.boyut2})] | [[2048](${png.boyut3})] \n **JPG** [[512](${jpg.boyut1})] | [[1024](${jpg.boyut2})] | [[2048](${jpg.boyut3})] \n **WEBP** [[512](${webp.boyut1})] | [[1024](${webp.boyut2})] | [[2048](${webp.boyut3})]`,
   guild: {
    banner: {
      get: (name) => `${name} Afişi`,
      not: "**[ArviS#0011]** Sunucuda Afiş Bulunmuyor"
    }
  },
  user: {
    banner: {
      get: (target) => `**${target.user.tag}** Üyesinin Profil Afişi`,
      not: (target) => `**${target.user.tag}** Üyesinin Profil Afişi`
    }
  },
  error: {
    type: (number) => {
      if (number == "1") {
        return {
          perm: () => "MANAGE_GUILD",
          send: () => `<:carpi_arvis0011:1046067681515814912> Bunu Yapabilmek İçin **MANAGE_GUILD** Yetkisine İhtiyacın Var`
        }
      } else if (number == "2") {
        return {
          perm: () => "ADMINISTRATOR",
          send: () => `<:carpi_arvis0011:1046067681515814912> Bunu Yapabilmek İçin **ADMINISTRATOR** Yetkisine İhtiyacın Var`
        }
      }
    }
  },


  lang_choose: () => "<:carpi_arvis0011:1046067681515814912> | Bir Dil Seçmelisin \n\n:flag_gb: English (en) \n:flag_tr: Turkish (tr) \n:flag_fr: Français (fr) \n:flag_de: Deutsch (de)",
  

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

  
  prefix_choose: () => "<:carpi_arvis0011:1046067681515814912> | Prefix Girmelisin",
  prefix_changed: () => "<:tik_arvis0011:1046067679884234863> | Prefixsiniz Başarıyla Değiştirildi",


  user_info: {
    get: (number) => {
      if (number == "1") {
        return {
          name: () => "Hesap Bilgileri",
          value: (user, timestamp, badges, nitro) => {
            if (nitro) {
              return `**❯ Avatar**: [Gör](${user.displayAvatarURL({ dynamic: true })}) \n**❯ ID:** ${user.id} \n**❯ Hesap Oluşturma Tarihi:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>) \n**❯ Rozetleri:** ${badges} ${nitro}`
            } else {
              return `**``❯`` Avatar**: [Gör](${user.displayAvatarURL({ dynamic: true })}) \n**❯ ID:** ${user.id} \n**❯ Hesap Oluşturma Tarihi:** <t:${timestamp(user.createdTimestamp)}:D> (<t:${timestamp(user.createdTimestamp)}:R>) \n**❯ Rozetleri:** ${badges}`
            }
          }
        }
      }
    }
  }
};
// ArviS#0011









//ArviS#0011