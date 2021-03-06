// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
  
    name: "skipto",
    category: "Music",
    aliases: [ "jump" ],
    description: "Skip music",
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

        let target = parseInt(args[0]);
      
        if (isNaN(target)) {
            embedgagal.setDescription(`${message.client.sameVC}`);
            return message.channel.send(`<:N_:848429469688397854> ・ Please enter a valid number!`);
        }

        message.client.distube.jump(message, parseInt(args[0]))
        .then(queue => {
            embedsukses.setDescription(`<:Y_:848429615323021354> ・ Successfully **Skipped** ${args[0]} songs.`);
            message.channel.send({ embeds: [embedsukses] });
        })
        .catch(error => {
            embedgagal.setDescription(`${message.client.sameVC}`);
            return message.channel.send(`<:N_:848429469688397854> ・ An error occurred while skip the song.`); 
        })
      
      
    }
  
  
}