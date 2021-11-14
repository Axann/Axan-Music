// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
  
    name: "volume",
    category: "Music",
    aliases: [ "v" ],
    description: "Set volume",
    args: false,
    usage: [ "<Number of volume between 0 - 100>" ],
    examples: [ "100" ],
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
            embedgagal.setDescription(`${message.client.sameVC}`);
            return message.channel.send({ embeds: [embedgagal] });
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

        
        let volume = parseInt(args[0]);
        if (!volume) {
            embedsukses.setDescription(`<:Y_:848429615323021354> ・ Current **Volume** : \`${queue.volume}\`%`);
            return message.channel.send({ embeds: [embedsukses] });
        }

        if (isNaN(volume)){
            embedgagal.setDescription(`<:N_:848429469688397854> ・ Please enter a valid number!`)
            return message.channel.send({ embeds: [embedgagal] });
        }; 

        if (volume < 0)  volume = 0;
        if (volume > 100) volume = 100;

        message.client.distube.setVolume(message, volume);

        embedsukses.setDescription(`<:Y_:848429615323021354> ・ Successfully changed the **Volume** to \`${volume}\`%`);
        message.channel.send({ embeds: [embedsukses] });

    }
}