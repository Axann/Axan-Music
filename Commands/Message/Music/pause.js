// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
    name: "pause",
    category: "Music",
    aliases: [],
    description: "Pause the song",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES" ],
    owner: false,
  
  
// ─────────────────────────────────── || SYSTEM || ─────────────────────────────────── //


    async execute(client, message, args, color) {


// ─────────────────────────────────── || GAGAL || ─────────────────────────────────── //


        const embedgagal = new Discord.MessageEmbed()
            .setColor('RED')

        // must vc
        
        const memberVC = message.member.voice.channel;
        if (!memberVC) {
            embedgagal.setDescription(`${message.client.mustVC}`);
            return message.channel.send({ embeds: [embedgagal] });
        } 

        // no vc
      
        const clientVC = message.guild.me.voice.channel;
        if (!clientVC) {
            embedgagal.setDescription(`${message.client.noVC}`);
            return message.channel.send({ embeds: [embedgagal] });
        }

        // same vc
      
        if (memberVC !== clientVC) {
            embedgagal.setDescription(`${message.client.sameVC}`);
            return message.channel.send({ embeds: [embedgagal] });
        }

        // queue
      
        const queue = message.client.distube.getQueue(message);
        if (!queue){
            embedgagal.setDescription(`${message.client.noMUSIC}`);
            return message.channel.send({ embeds: [embedgagal] });
        };

      
// ─────────────────────────────────── || SUKSES || ─────────────────────────────────── //


        const embedsukses = new Discord.MessageEmbed()
            .setColor(color)
		
        if (queue.paused){
            embedgagal.setDescription(`${message.client.errorPAUSE}`);
            return message.channel.send({ embeds: [embedgagal] });
        };

        message.client.distube.pause(message);
            embedsukses.setDescription(`${message.client.suksesPAUSE}`);
        message.channel.send({ embeds: [embedsukses] });
      
      
    }
  
  
}