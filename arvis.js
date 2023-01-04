const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs');
client.events = new Collection();
client.commands = new Collection();
client.config = require('./ayarlar.json');
client.db = require('croxydb');
client.banners = discordBanners;
const client = new Client({ 
    intents: [ 
      Intents.FLAGS.GUILDS, 
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MEMBERS
    ]
});


const { DiscordBanners } = require('discord-banners');
const discordBanners = new DiscordBanners(client);

fs.readdir('./commands/', async (err, files) => {
    if (err) throw new Error(err);
    files.forEach(async (folder) => {
        var cmd = require(`./commands/${folder}`);
    });
});


fs.readdir('./events/', async (err, files) => {
    if (err) throw new Error(err);
    files.forEach(async (file) => {
        var event = require(`./events/${file}`);
        client.events.set(event.name, event);
    });
});


client.on('messageCreate', async (message) => {
  const prefix = client.db.fetch(`prefix_${message.guild.id}`) || client.config.prefix;
  client.events.get('messageCreate').execute(client, message, prefix)
});


client.on('ready', async () => client.events.get('ready').execute(client));
client.on('guildCreate', async (as) => client.events.get('ready').execute(client, as));
client.login(client.config.token);
//  ArviS#0011









//   ArviS#0011