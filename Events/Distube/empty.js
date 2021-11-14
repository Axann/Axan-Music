// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = async (client, queue) => {

    let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription('<:N_:848429469688397854> ・ Channel is empty.')
    queue.textChannel.send({ embeds: [embed] });

}