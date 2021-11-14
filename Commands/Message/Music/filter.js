// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
  
    name: "filter",
    category: "Music",
    aliases: [ "f" ],
    description: "Filtering ur music",
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


// ─────────────────────────────────── || FILTER || ─────────────────────────────────── //


        let filter = ['3d', 'bassboost', 'echo', 'flanger', 'gate', 'haas', 'karaoke', 'nightcore', 'reverse', 'vaporwave', 'mcompand', 'phaser', 'tremolo', 'surround', 'earwax'];

        const input = args[0];
        

// ─────────────────────────────────── || SUKSES & GAGAL || ─────────────────────────────────── //


        const embedsukses = new Discord.MessageEmbed()
            .setColor(color)
        
        // on

        if (filter.includes(input)) {
            message.client.distube.setFilter(message, input, true);
            embedsukses.setDescription(`<:Y_:848429615323021354> ・ Current queue filter : **${input}**.`);
            message.channel.send({ embeds: [embedsukses] });
        } 

        // off

        else if (input === "off") {
            message.client.distube.setFilter(message, false, true);

            embedsukses.setDescription(`<:Y_:848429615323021354> ・ Disable queue filter.`);
            message.channel.send({ embeds: [embedsukses] });
        } 
      
        // gagal
      
        else {
        
            embedgagal.setDescription(`**Valid Filter**\`\`\`yaml\n${filter.join(", ")}\`\`\`\n **Turn OFF**\`\`\`yaml\n${message.client.prefix}filter off\`\`\`\n`)
          
            message.channel.send({ embeds: [embedgagal] });
        }
      
      
    }
  
  
}