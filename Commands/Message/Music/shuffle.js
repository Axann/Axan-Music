// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
  
    name: "shuffle",
    category: "Music",
    aliases: [],
    description: "Shuffle thr queue",
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

        message.client.distube.shuffle(message)
            .then(queue => {
                embed.setDescription(`🔀 | Successfully **Shuffled** the queue.`);
                message.channel.send({ embeds: [embed] });
            })
            .catch(error => {
                return message.channel.send("❌ | An error occurred while shuffle  the queue."); 
            });
        
    }
}