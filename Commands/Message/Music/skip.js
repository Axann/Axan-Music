// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
  
    name: "skip",
    category: "Music",
    aliases: [ "s" ],
    description: "Skip Music",
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

        
        if (queue.songs.length === 1) {
          
            message.client.distube.stop(message)
            .then(song => {
                embedsukses.setDescription(`<:Y_:848429615323021354> ・ **Skip** a song.`);
                message.channel.send({ embeds: [embedsukses] });
            })
            .catch(error => {
                embedgagal.setDescription("<:N_:848429469688397854> ・ An error occurred while skip the song."); 
                return message.channel.send({ embeds: [embedgagal] });
            });
        } 
      
        else {
            message.client.distube.skip(message)
            .then(song => {
                embedsukses.setDescription(`<:Y_:848429615323021354> ・ Successfully **Skipped** a song.`);
                message.channel.send({ embeds: [embedsukses] });
            })
            .catch(error => {
                embedgagal.setDescription("<:N_:848429469688397854> ・ An error occurred while shuffle the queue."); 
                return message.channel.send({ embeds: [embedgagal] });
            });
        }
      
      
    }
  
  
}