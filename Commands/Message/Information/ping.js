// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
  
    name: "ping",
    category: "Information",
    aliases: [],
    description: "Check Ping Bot",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES" ],
    owner: false,


// ─────────────────────────────────── || SYSTEM || ─────────────────────────────────── //
  
  
    async execute(client, message, args, color) {
      
      
        const embed = new Discord.MessageEmbed()
            .setColor(color)
            .setDescription(`**${message.client.ws.ping}**ms`);
        message.channel.send({ embeds: [embed] });
      
      
    }
  
  
}