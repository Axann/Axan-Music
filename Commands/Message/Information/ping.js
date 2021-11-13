// ─────────────────────────────────── || MODULE NGENTOT || ─────────────────────────────────── //


const { MessageEmbed } = require("discord.js");


// ─────────────────────────────────── || EXPORT IMPORT || ─────────────────────────────────── //

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
  
  
    async execute(client, message, args) {
        const embed = new MessageEmbed()
            .setColor(message.client.color)
            .setDescription(`Punyamu Pink bang? : **${message.client.ws.ping}**ms`);
        message.channel.send({ embeds: [embed] });
    }
}