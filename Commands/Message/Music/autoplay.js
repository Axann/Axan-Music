// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
  
    name: "autoplay",
    category: "Music",
    aliases: [ "ap" ],
    description: "AutoPlay Music",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES" ],
    owner: false,
      

// ─────────────────────────────────── || SYSTEM || ─────────────────────────────────── //

  
    async execute(client, message, args, color) {
      
      
        const embedgagal = new Discord.MessageEmbed()
            .setColor(color)
      
        const memberVC = message.member.voice.channel;
      
      
// ─────────────────────────────────── || GA NAK VC || ─────────────────────────────────── //
      
      
        if (!memberVC) {
          embedgagal.setDescription(message.client.mustVC)
          return message.channel.send({ embeds: [embedgagal] });
        } 

        const clientVC = message.guild.me.voice.channel;
      
        if (!clientVC) {
          embedgagal.setDescription(message.client.noVC)
          return message.channel.send({ embeds: [embedgagal] });
        }

        if (memberVC !== clientVC) return message.channel.send(message.client.sameVC);

        const queue = message.client.distube.getQueue(message);
      
        if (!queue){
          embedgagal.setDescription(message.client.sameVC)
          return message.channel.send({ embeds: [embedgagal] });
        };

      
// ─────────────────────────────────── || MISAL SUKSES || ─────────────────────────────────── //


        const embed = new Discord.MessageEmbed()
                .setColor(color)

        if (!queue.autoplay) {
            message.client.distube.toggleAutoplay(message);

            embed.setDescription('<:Y_:848429615323021354> ・ Successfully activated **autoplay** mode.');
            message.channel.send({ embeds: [embed] });
        } else {
            message.client.distube.toggleAutoplay(message);

            embed.setDescription('<:Y_:848429615323021354> ・ Successfully deactivated **autoplay** mode.');
            message.channel.send({ embeds: [embed] });
        }

      
        }
  
  
}