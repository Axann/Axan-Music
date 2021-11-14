// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
    name: "loop",
    category: "Music",
    aliases: [ "repeat" ],
    description: "Stop thr queue",
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
            embedgagal.setDescription(`${message.client.mustVC}`)
            return message.channel.send({ embeds: [embedgagal] });
        } 

        // no vc
      
        const clientVC = message.guild.me.voice.channel;
        if (!clientVC) {
            embedgagal.setDescription(`${message.client.noVC}`)
            return message.channel.send({ embeds: [embedgagal] });
        }

        // same vc
      
        if (memberVC !== clientVC) {
            return message.channel.send(`${message.client.sameVC}`)
        }

        // queue
      
        const queue = message.client.distube.getQueue(message);
        if (!queue){
            embedgagal.setDescription(`${message.client.noMUSIC}`)
            return message.channel.send({ embeds: [embedgagal] });
        };

      
// ─────────────────────────────────── || SUKSES || ─────────────────────────────────── //


        const embedsukses = new Discord.MessageEmbed()
            .setColor(color)
        
    
        const input = args[0];

        const disable = 0;
        const song = 1;
        const queues = 2;

      
        // sukses
      
        if (!input) {
        message.client.distube.setRepeatMode(message, song);
            embedsukses.setDescription(`${message.client.suksesLOOP}`)
        message.channel.send({ embeds: [embedsukses] });
        } 
      
        else if (input === "lagu" || input === "song") {
        message.client.distube.setRepeatMode(message, song);
            embedsukses.setDescription(`${message.client.suksesLOOP}`)
        message.channel.send({ embeds: [embedsukses] });
        }
      
        // queue
      
        else if (input === "queue" || input === "all") {
        message.client.distube.setRepeatMode(message, queues);
            embedsukses.setDescription(`${message.client.suksesLOOPALL}`)
        message.channel.send({ embeds: [embedsukses] });
        }
      
        // off
      
        else if (input === "off") {
        message.client.distube.setRepeatMode(message, disable);
            embedsukses.setDescription(`${message.client.suksesLOOPSTOP}`)
        message.channel.send({ embeds: [embedsukses] });
        } 
      
        // gagal
      
        else {
            embedgagal.setDescription(`❌ | Please enter valid arguments!
Loop Song: ${message.client.prefix}loop song
Loop Queue: ${message.client.prefix}loop queue
Turn OFF Loop: ${message.client.prefix}loop loop`);
            message.channel.send({ embeds: [embedgagal] });
        }
    }
}