// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = async (client, queue) => {


    let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<:N_:848429469688397854> ・ Can't find related video to play. Stop playing music.`);
    queue.textChannel.send({ embeds: [embed] });
}