// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
  
    name: "filter",
    category: "Music",
    aliases: [ "eq", "equalizer" ],
    description: "Audio Filters",
    args: false,
    usage: [ "<3d, bassboost, echo, karaoke, nightcore, vaporwave>", "off" ],
    examples: [ "bassboost", "off" ],
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
            embedgagal.setDescription(message.client.mustVC)
            return message.channel.send({ embeds: [embedgagal] });
        } 

        // no vc
      
        const clientVC = message.guild.me.voice.channel;
      
        if (!clientVC) {
            embedgagal.setDescription(message.client.noVC)
            return message.channel.send({ embeds: [embedgagal] });
        }

        // same vc
      
        if (memberVC !== clientVC) {
            return message.channel.send(message.client.sameVC);
        }

        // queue
      
        const queue = message.client.distube.getQueue(message);
      
        if (!queue){
            embedgagal.setDescription(message.client.noMUSIC)
            return message.channel.send({ embeds: [embedgagal] });
        };

      
// ─────────────────────────────────── || SUKSES || ─────────────────────────────────── //
      
      
        const embed = new Discord.MessageEmbed()
            .setColor(color)
            .setFooter(`Request by ${message.author.tag}`, message.author.displayAvatarURL());

        const embederror = new Discord.MessageEmbed()
            .setColor(color);

      
// ─────────────────────────────────── || FILTER || ─────────────────────────────────── //


        let filter = ['3d', 'bassboost', 'echo', 'flanger', 'gate', 'haas', 'karaoke', 'nightcore', 'reverse', 'vaporwave', 'mcompand', 'phaser', 'tremolo', 'surround', 'earwax'];

        const input = args[0];
        if (!input) {
            embederror.setDescription(`❌ | You didn't provide any arguments!
Examples: ${message.client.prefix}filter bassboost
Valid Filter: ${filter.join(", ")}
Turn OFF Filter: ${message.client.prefix}filter off`);
            message.channel.send({ embeds: [embederror] });
        }

        if (filter.includes(input)) {
            message.client.distube.setFilter(message, input, true);

            embed.setDescription(`🎛️ | Current queue filter: ${input}.`);
            message.channel.send({ embeds: [embed] });
        } else if (input === "off") {
            message.client.distube.setFilter(message, false, true);

            embed.setDescription(`🎛️ | Disable queue filter.`);
            message.channel.send({ embeds: [embed] });
        } else {
            embederror.setDescription(`❌ | Please enter valid arguments!
Valid Filter: ${filter.join(", ")}
Turn OFF Filter: ${message.client.prefix}filter off`);
            message.channel.send({ embeds: [embederror] });
        }
      
      
    }
  
  
}