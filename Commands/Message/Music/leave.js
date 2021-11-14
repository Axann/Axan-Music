// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
    name: "leave",
    category: "Music",
    aliases: [ "dc" ],
    description: "Leave Voice Channel",
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
            .setColor("RED")

        // must vc
        
        const memberVC = message.member.voice.channel;
        if (!memberVC) {
            embedgagal.setDescription(`${message.client.mustVC}`);
            return message.channel.send({ embeds: [embedgagal] });
        }
      
        // no vc
      
        const clientVC = message.guild.me.voice.channel;
        //if (clientVC && clientVC === memberVC) {
        //    embedgagal.setDescription(`${message.client.noVC}`);
        //    return message.channel.send({ embeds: [embedgagal] });
        //}
      
        // same vc
      
        if (clientVC && clientVC !== memberVC) {
            embedgagal.setDescription(`${message.client.sameVC}`);
            return message.channel.send({ embeds: [embedgagal] });
        }


// ─────────────────────────────────── || SUKSES & GAGAL || ─────────────────────────────────── //


        const embedsukses = new Discord.MessageEmbed()
            .setColor(color)

        // sukses

        const queue = message.client.distube.getQueue(message);
        if (queue) {
            message.client.distube.stop(message);
            message.client.distube.voices.leave(message.guild);
                embedsukses.setDescription(`${message.client.suksesLEAVE}`)
            message.channel.send({ embeds: [embedsukses] });
        }
      
        else {
            message.client.distube.voices.leave(message.guild);
                embedsukses.setDescription(`${message.client.suksesLEAVE}`)
            message.channel.send({ embeds: [embedsukses] });
        }


    }


}