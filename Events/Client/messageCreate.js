// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = async function(client, message) {

    if (message.author.bot) return;
    if (!message.guild) return;


// ─────────────────────────────────── || PREFIX || ─────────────────────────────────── //


    let PREFIX = message.client.prefix;
    const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    if (message.content.match(new RegExp(`^<@!?${message.client.user.id}>( |)$`))) {
      
      const ngentot = new Discord.MessageEmbed()
        .setDescription(`Hello **${message.author.tag}**, my prefix is **${PREFIX}**.\nUse **${PREFIX}help** to get the list of the commands!`) 
      return message.channel.send({embeds: [ngentot]});
    }

    const prefixRegex = new RegExp(`^(<@!?${message.client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    const [ matchedPrefix ] = message.content.match(prefixRegex);

  
// ─────────────────────────────────── || IMPORT || ─────────────────────────────────── //
  
  
    const color = message.guild.me.displayHexColor;
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();

    const command = message.client.commands.get(commandName) || message.client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;

  
// ─────────────────────────────────── || ERROR || ─────────────────────────────────── //
  
  
    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;

        if (command.usage) {
            reply += `\n\nExamples:`
            command.usage.forEach(usage => {
                reply += `\n\`${PREFIX}${command.name} ${usage}\``
            });
        }

        const embederror = new Discord.MessageEmbed()
            .setColor(color)
            .setDescription(reply);
        return message.channel.send({ embeds: [embederror] });
    }


    if (command.memberPermissions && !message.member.permissions.has(command.memberPermissions)) return message.channel.send(`❌ | You don't have permission to run this command!`);
    if (command.botPermissions && !message.guild.me.permissions.has(command.botPermissions)) return message.channel.send(`❌ | I don't have permission to run this command!`);
    if (command.owner && !message.client.owner.includes(message.author.id)) return;

    try {
        command.execute(client, message, args, color);
    } catch (error) {
        console.error(error);
        message.client.logger.log(`Error Execute Commands at ${command.name} | ` + error, "error");

        message.channel.send(`❌ | There was an error executing that command.\nI have contacted the owner of the bot to fix it immediately.`);

        let owner = message.client.users.cache.get(client.owner[0]);
        owner.send(`${message.client.emoji.warn} There was an error executing command **${command.name}**.\nAn error encountered: \n${error}\n<#${message.channel.id}>`);
    }
  
  
}