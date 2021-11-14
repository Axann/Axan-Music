// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
    name: 'restart',
    category: 'owner',
    aliases: [],
    description: 'Restart bot',
    args: false,
    usage: [],
    examples: ['restart.'],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES" ],
    owner: true,


// ─────────────────────────────────── || SYSTEM || ─────────────────────────────────── //


    async execute(client, message, args, color) {


      const embed = new Discord.MessageEmbed()
        .setColor(color)
        .setDescription(`Restarting bot . . .`);
      
      message.channel.send({ embeds: [embed] }).then(message => {
        process.exit();
      });


    }


}