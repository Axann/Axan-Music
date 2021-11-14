// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = async (client, queue) => {

  
    const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<:Y_:848429615323021354> ・ **Leave** the voice channel.\nThank you for using ${client.user.username}!`)
        .setImage(client.musicimg)
        //.setFooter(client.user.username, client.user.displayAvatarURL());
    queue.textChannel.send({ embeds: [embed] });

}