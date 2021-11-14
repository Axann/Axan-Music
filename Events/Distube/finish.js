// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = async (client, queue) => {

    let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<:N_:848429469688397854> ・ No more song in queue`);
    queue.textChannel.send({ embeds: [embed] });
}