// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
  
    name: "play",
    category: "Music",
    aliases: [ "p" ],
    description: "Play a song",
    args: true,
    usage: [ "<YouTube URL>", "<Video Name>", "<Spotify URL>" ],
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
      
        // same vc
      
        const clientVC = message.guild.me.voice.channel;
      
        if (clientVC && clientVC !== memberVC) {
            embedgagal.setDescription(`${message.client.sameVC}`);
            return message.channel.send({ embeds: [embedgagal] });
        }

        message.client.distube.play(message, args.join(' '));
      
      
    }
  
  
}