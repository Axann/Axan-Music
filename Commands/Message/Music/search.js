// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js")


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {

    name: "search",
    category: "Music",
    aliases: [],
    description: "Search a song",
    args: true,
    usage: [ "<Video Name>" ],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES" ],
    owner: false,
  
  
// ─────────────────────────────────── || SYSTEM || ─────────────────────────────────── //
  

    async execute(client, message, args) {
      
      
// ─────────────────────────────────── || EROR || ─────────────────────────────────── //

      
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

      
        message.client.distube.search(args.join(' '), {
            limit: 10,
            type: "video",
            safeSearch: false,
        });

    }
}