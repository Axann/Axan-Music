// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
    name: "join",
    category: "Music",
    aliases: [ "j" ],
    description: "Join Voice Channel",
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
            embedgagal.setDescription(`${message.client.mustVC}`)
            return message.channel.send({ embeds: [embedgagal] });
        }
      
        // on vc
      
        const clientVC = message.guild.me.voice.channel;
      
        if (clientVC && clientVC === memberVC) {
            embedgagal.setDescription(`${message.client.onVC}`)
            return message.channel.send({ embeds: [embedgagal] });
        }
      
        // same vc
      
        if (clientVC && clientVC !== memberVC) {
            embedgagal.setDescription(`${message.client.sameVC}`)
            return message.channel.send({ embeds: [embedgagal] });
        }


// ─────────────────────────────────── || SUKSES & GAGAL || ─────────────────────────────────── //


        const embed = new Discord.MessageEmbed()
            .setColor(message.client.color)

        message.client.distube.voices.join(memberVC).then(voice => {
          
        embed.setDescription(`✔️ | Successfully **Join** the voice channel.`);
        message.channel.send({ embeds: [embed] });
          
        })
          
        .catch(error => {
            console.error(error);
            return message.channel.send(`❌ | An error occurred while trying to join the voice channel.\nTry using the **Play** command!`);
        });


    }


}