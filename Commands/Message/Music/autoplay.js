// ─────────────────────────────────── || MODULE NGENTOT || ─────────────────────────────────── //


const { MessageEmbed } = require("discord.js");


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
    async execute(client, message, args, color) {
      
      
// ─────────────────────────────────── || MISAL GAK NAK VC || ─────────────────────────────────── //


      const embedgagal = new MessageEmbed()
              .setColor(color)
      
        const memberVC = message.member.voice.channel;
      
        if (!memberVC) {
          embedgagal.setDescription(`❌ | You must be in a voice channel!`)
          return message.channel.send({ embeds: [embedgagal] });
        } 

        const clientVC = message.guild.me.voice.channel;
      
        if (!clientVC) {
          embedgagal.setDescription(`<:N_:848429469688397854> | I'm not on any voice channel!`)
          return message.channel.send({ embeds: [embedgagal] });
        }

        if (memberVC !== clientVC) return message.channel.send(`<:N_:848429469688397854> | You must be in the same channel as ${message.client.user}!`);

        const queue = message.client.distube.getQueue(message);
      
        if (!queue){
          embedgagal.setDescription(`<:N_:848429469688397854> | There is no music playing!`)
          return message.channel.send({ embeds: [embedgagal] });
        };

      
// ─────────────────────────────────── || MISAL SUKSES || ─────────────────────────────────── //


        const embed = new MessageEmbed()
                .setColor(color)

        if (!queue.autoplay) {
            message.client.distube.toggleAutoplay(message);

            embed.setDescription(`🔄 | Successfully activated **autoplay** mode.`);
            message.channel.send({ embeds: [embed] });
        } else {
            message.client.distube.toggleAutoplay(message);

            embed.setDescription(`🔄 | Successfully deactivated **autoplay** mode.`);
            message.channel.send({ embeds: [embed] });
        }
    }
}
