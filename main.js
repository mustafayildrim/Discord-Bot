const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '-'

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))


for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Night Bot is online!');
});


client.on("message", msg => {

    const args = msg.content.slice(prefix.length).split(/ +/);

   if (msg.content === "serhat") {
        msg.reply("https://prnt.sc/26kvtfg");
        
    }else if (msg.content === "serdar") {
        msg.reply("@291261717923495937");
    
    }else if (msg.content === 'bruh'){
        client.commands.get('gif').execute(msg, args);
    }else if (msg.content === 'kaan'){
        msg.reply("https://tenor.com/view/malkaan-kaan-nautilus-dazen-kaan-mal-gif-20420695");
      
    }else if (msg.content === 'hakli'){
        msg.reply("adam hakli");

    }else if (msg.content === 'np'){
        msg.reply("https://tenor.com/view/social-credit-gif-23165146");}
    
  });

client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot)
        return;
    
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if(command === 'ping'){
           client.commands.get('ping').execute(message, args);

        }else if (command === 'website'){
            client.commands.get('website').execute(message, args);

        }else if (command === 'youtube'){
            client.commands.get('youtube').execute(message, args);

        }else if (command === 'osu'){
            client.commands.get('osu').execute(message, args);

        }else if(command === 'join'){
            client.commands.get('join').execute(message, args);

        }else if(command === 'help'){
            client.commands.get('help').execute(message, args);

        }else {
            message.channel.send("You need to enter a valid command!");
        }
});


client.login('0GMJY');
